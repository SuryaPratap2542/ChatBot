
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatMessages = document.getElementById('chat-messages');
const toggler = document.querySelector(".chatbot-toggler");

sendButton.addEventListener('click', () => {
    const messageText = messageInput.value.trim();
    if (messageText !== '') {
        const inputMessage = createMessage(messageText, 'input-message');
        chatMessages.appendChild(inputMessage);

        // Simulate bot response after a short delay
        setTimeout(() => {
            let responseText = '';
            switch (messageText.toLowerCase()) {
                case 'hi':
                case 'hello':
                    responseText = 'Hello there!';
                    break;
                case 'how are you':
                    responseText = 'I am just a bot, but I am doing fine!';
                    break;
                case 'name':
                case 'what is your name':
                    responseText = "I'm just a chatbot, so I don't have a name.";
                    break;
                case 'who are you':
                    responseText = "I'm a simple chatbot designed to assist you.";
                    break;
                default:
                    responseText = "I'm sorry, I don't understand.";
                    break;
            }

            const outputMessage = createMessage(responseText, 'output-message');
            chatMessages.appendChild(outputMessage);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 500);

        messageInput.value = '';
    }
});

function createMessage(text, className) {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = text;
    messageDiv.classList.add('message', className);
    return messageDiv;
}

toggler.addEventListener("click", () => document.body.classList.toggle("show-chatcontainer"));