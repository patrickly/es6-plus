const steps = [
	new Promise(resolve => resolve('We wake up')),
	new Promise(resolve => resolve('Eat breakfast')),
	new Promise(resolve => resolve('Code'))
];

async function runSteps() {
	for await (const step of steps) {
		console.log(step);
	}
}

runSteps();
