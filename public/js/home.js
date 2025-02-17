const inputName = document.querySelector('#input-name');
const inputForm = document.querySelector('#basic-info-form');


inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const userName = inputName.value;
    window.location.href = `http://localhost:3000/chat?name=${userName}`;
});

// 