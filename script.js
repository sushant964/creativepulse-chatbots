
const chatBody = document.getElementById('chat-body');

function sendMessage() {
  const userInput = document.getElementById('user-input');
  const message = userInput.value.trim();
  if (message === '') return;
  
  appendMessage('You', message);
  getBotResponse(message);
  userInput.value = '';
}

function appendMessage(sender, text) {
  const messageDiv = document.createElement('div');
  messageDiv.textContent = sender + ': ' + text;
  chatBody.appendChild(messageDiv);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function getBotResponse(input) {
  const faq = {
    "what are your hours": "Our business hours are 9AM - 6PM, Monday to Friday.",
    "where are you located": "We are located at 123 Main Street, Cityname.",
    "contact": "You can reach us at contact@example.com."
  };
  
  const lowerInput = input.toLowerCase();
  const response = Object.keys(faq).find(q => lowerInput.includes(q));
  
  if (response) {
    appendMessage('Bot', faq[response]);
  } else {
    appendMessage('Bot', "Sorry, I don't understand that. Please ask something else.");
  }
}
