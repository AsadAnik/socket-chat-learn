const socket = io("ws://localhost:3000");


// region Add User Name to Chat
let userName = '';
(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const userNameParam = urlParams.get('name');
    if (!userNameParam) {
        window.location.href = 'http://localhost:3000';
    }
    // Added user name to chat
    userName = userNameParam;
    document.querySelector('.chat-with').innerHTML = userNameParam;
})();


// region Append Message
function appendMessage(data = { messageText: '', userName: '' }) {
    const chatMessages = document.getElementById('chat-messages');
    const botMessage = document.createElement('div');
    const botName = document.createElement('div');

    // Message Sender Name Add..
    botName.classList.add('user-name', 'bot');
    botName.textContent = data.userName;

    // Bot Message Class and Text Add..
    botMessage.classList.add('message', 'bot');
    botMessage.textContent = data.messageText;

    // Chat Messages..
    chatMessages.appendChild(botName);
    chatMessages.appendChild(botMessage);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// region Send Message
function sendMessage() {
    const userInput = document.getElementById('user-input');
    const messageText = userInput.value.trim();
    if (messageText === '') return;

    // Chat Messages
    const chatMessages = document.getElementById('chat-messages');

    // Add user message
    const userMessage = document.createElement('div');
    userMessage.classList.add('message', 'user');
    userMessage.textContent = messageText;
    chatMessages.appendChild(userMessage);

    console.log('Message text here - ', messageText);
    // Send Message to Server..
    socket.emit('client-message', { messageText, userName });

    // Clear input
    userInput.value = '';
    // Scroll to the bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Simulate bot response as Demo use to check the reply styles
    // setTimeout(() => {
    //     appendMessage();
    // }, 1000);
}

// region Add Typing UI..
function addTypingUI(username = '') {
    const typingIndicator = document.querySelector('.typing-indicator');
    typingIndicator.textContent = `${username} is typing...`;

    // Clear Typing UI 
    setTimeout(() => {
        typingIndicator.textContent = '';
    }, 3000);
}

// Allow sending message with Enter key
// region Enter Key to Submit
document.getElementById('user-input').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

// region Send Message Button
document.getElementById('send-msg-btn').addEventListener('click', function (event) {
    event.preventDefault();
    sendMessage();
});

// region Key Pressing Event
document.getElementById('user-input').addEventListener('keydown', function (event) {
    if (event.key) {
        // Send Typing Event to Server
        socket.emit('typing-client', { userName });
    }
});

// region Socket Client..
// Receive messages from the Server
socket.on('server-message', (data) => {
    // Append Message to UI..
    appendMessage(data);
});

// region Typing Event..
socket.on('typing-server', (data) => {
    console.log(`${data.userName} is typing...`);
    // Add Typing UI..
    addTypingUI(data.userName);
});