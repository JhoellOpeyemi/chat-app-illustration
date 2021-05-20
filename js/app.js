// Create GSAP Timeline
const timeLine = gsap.timeline({ defaults: { duration: 0.65 } });

timeLine
	.from('.bg-pattern', { height: 0 }) // background pattern
	.from('.other-person-text-1', { y: 10, x: -20, scale: 0, opacity: 0 }, '+=.9') // first text
	.from(
		'.other-person-text-2',
		{ y: 10, x: -20, scale: 0, opacity: 0 },
		'+=.15'
	) // second text
	.from('.first-image', { opacity: 0 }, '+=.9') // first dog image
	.from('.second-image', { opacity: 0 }, '-=.5') // second dog image
	.from('.third-image', { opacity: 0 }, '-=.5') // third dog image
	.from('.user-text-2', { y: 10, x: 20, scale: 0, opacity: 0 }, '+=.15') // third text
	.from('.user-text-3', { y: 10, x: 20, scale: 0, opacity: 0 }, '+=.15') // fourth text
	.from('.other-person-text-3', { y: 10, x: -20, scale: 0, opacity: 0 }, '+=.9') // fifth text
	.from(
		'.other-person-text-4',
		{ y: 10, x: -20, scale: 0, opacity: 0 },
		'+=.15'
	) // sixth text (price chat)
	.from(
		'.other-person-text-5',
		{ y: 10, x: -20, scale: 0, opacity: 0 },
		'+=.15'
	); // seventh text (price chat)
