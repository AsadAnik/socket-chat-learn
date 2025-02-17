## Web Sockets

WebSocket is a computer communications protocol, providing full-duplex communication channels over a single TCP connection. The WebSocket protocol was standardized by the IETF as RFC 6455 in 2011. The current API specification allowing web applications to use this protocol is known as WebSockets.

We are going to using Web Sockets for realtime communication with server to client. When we decide to build a notification system or a messaging system into our application or the application should like only for messaging staff.

There is 2 Web Sockets in the world is most popular.

1. WebSocket
2. Socket.io

### And What is WebSocket now?

WebSocket is ***a bidirectional communication protocol that can send the data from the client to the server or from*** the server to the client by ...

### Why we use WebSocket?

The WebSocket API is an advanced technology that makes it possible to **open a two-way interactive communication session between the user's browser and a server**. With this API, you can send messages to a server and receive event-driven responses without having to poll the server for a reply.

### So What is Socket.io?

Socket.IO is ***a library that enables low-latency, bidirectional and event-based communication between a client and a server***. ... It is built on top ...

### Why Socket.io use for?

Socket.IO was created in 2010. It was developed **to use open connections to facilitate realtime communication**, still a relatively new phenomenon at the time. Socket.IO allows bi-directional communication between client and server.

[/readme-assets/1.png](/readme-assets/1.png)

**`Full-Duplex Communication:`** Unlike traditional web communication (HTTP). Where the client sends a request and waits for a response. WebSockets allow for bidirectional communication. Both the client and server can send messages to each other independently.

**`Low Latency:`** WebSockets reduce latency compared to traditional HTTP polling methods because they establish a persistent connection, eliminating the need to repeatedly open and close connections for each exchange.

**`Real-time Communication:`** WebSockets are commonly used for real-time applications such as chat applications, financial trading platforms, and live sports updates. They enable the server to push data to the connected clients instantly.

**`WebSocket API:`** Both the browser and server provide APIs for working with WebSockets. In a web browser, the JavaScript WebSocket API is used to establish and manage WebSocket connections. On the server side, various programming languages and frameworks provide WebSocket support.

## Difference between HTTP and WebSocket

HTTP (Hypertext Transfer Protocol) and WebSocket are both communication protocols, but they serve different purpose and have distinct  characteristic’s.

**Communication Type:**

**`HTTP:`** It is a request-response protocol. The client sends a request to the server, and the server responds to that request. This is a unidirectional communication model.

**`WebSocket:`** It provides full-duplex communication. Both the client and server can send messages independently at any time, allowing for bidirectional communication.

## Connection Lifecycle

**`HTTP:`** It follows a request-response model, where a new connection is established for each request, and its is closed after the response is received. This can result in higher latency, especially for applications requiring real-time updates.

**`WebSocket:`** It establishes a persistent connection between the client and server, allowing for continuous communication. The connection is established with a handshake, and once open, it can be used for multiple messages in both directions without the need to reopen the connection each time.

## Usage

**`HTTP:`** Primarily used for traditional web browsing, where a client requests a webpage, and the server responds with the requested content. It is also used for RESTful APIs.

**`WebSocket:`** Well-suited for real-time applications where low latency and bidirectional communication are crucial, such as chat applications, online gaming, financial platforms, and live updates.

