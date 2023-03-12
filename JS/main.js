let date = new Date('June 1 2023 00:00:00'); //дата конечного события

function counts() {
	let now = new Date();
	gap = date - now;
	console.log(gap);
	setInterval(counts, 1000);

	let days = Math.floor(gap / 1000 / 60 / 60 / 24);
	let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
	let minutes = Math.floor(gap / 1000 / 60) % 60;
	let seconds = Math.floor(gap / 1000) % 60;



	document.getElementById('Days').innerText = days;
	document.getElementById('Hours').innerText = hours;
	document.getElementById('Minutes').innerText = minutes;
	document.getElementById('Seconds').innerText = seconds;

}
counts();