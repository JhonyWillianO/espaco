document.addEventListener('DOMContentLoaded', () => {
    const socket = io();

    const chatForm = document.getElementById('chat-form');
    const messageInput = document.getElementById('message-input');
    const messages = document.getElementById('messages');

    chatForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const message = messageInput.value;
        socket.emit('chat message', message);
        messageInput.value = '';
    });

    socket.on('chat message', (msg) => {
        const messageElement = document.createElement('div');
        messageElement.className = 'message';
        messageElement.textContent = msg;
        messages.appendChild(messageElement);
        messages.scrollTop = messages.scrollHeight;
    });
});
