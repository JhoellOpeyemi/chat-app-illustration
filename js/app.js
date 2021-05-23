/* Start of GSAP Animation */
// Create GSAP Timeline
const timeLine = gsap.timeline({ defaults: { duration: 0.65 } });

timeLine
	.from('.bg-pattern', { height: 0 }) // background pattern
	.from('.received-1 p', { y: 10, x: -20, scale: 0, opacity: 0 }, '+=.9') // first text
	.from('.received-2 p', { y: 10, x: -20, scale: 0, opacity: 0 }, '+=.15') // second text
	.from('.first-image', { opacity: 0 }, '+=.9') // first dog image
	.from('.second-image', { opacity: 0 }, '-=.5') // second dog image
	.from('.third-image', { opacity: 0 }, '-=.5') // third dog image
	.from('.sent-2 p', { y: 10, x: 20, scale: 0, opacity: 0 }, '+=.15') // third text
	.from('.sent-3 p', { y: 10, x: 20, scale: 0, opacity: 0 }, '+=.15') // fourth text
	.from('.received-3 p', { y: 10, x: -20, scale: 0, opacity: 0 }, '+=.9') // fifth text
	.from('.received-4', { y: 10, x: -20, scale: 0, opacity: 0 }, '+=.15') // sixth text (price chat)
	.from('.received-5', { y: 10, x: -20, scale: 0, opacity: 0 }, '+=.15'); // seventh text (price chat)

/* End of GSAP Animation */

// Query Selectors
const sendBtn = document.querySelector('.send-btn');
const input = document.querySelector('.message-area');
const chatArea = document.querySelector('.chat-area');

// Event Listener
sendBtn.addEventListener('click', sendMessage);

// Function
function sendMessage() {
	// Get input value
	const text = input.value;

	if (text !== '') {
		// Create new message div
		const newMessage = document.createElement('div');
		// create new message p
		const newMessageP = document.createElement('p');
		// Set text of p to input value
		newMessageP.innerText = text;
		// Add classes to new message div
		newMessage.classList.add('sent', 'new-message');
		// Append new message p to new message div
		newMessage.appendChild(newMessageP);
		// Append new message div to chat area
		chatArea.appendChild(newMessage);

		chatArea.scrollTop = chatArea.scrollHeight;
		input.value = '';
	}
}

// How are you today?!
