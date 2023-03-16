const thisYear = new Date().getFullYear();
const startSummer = new Date(`June 1 ${thisYear} 00:00:00`);
const endSummer = new Date(`31 Aug ${thisYear} 23:59:59`);

function counts() {
	let now = new Date();

	if(!(startSummer >= now || now >= endSummer)){
		const root =document.getElementById('countdown');
		const messege = "<h1>Summer has come</h1>";
		return root.innerHTML = messege;
	}

	gap = startSummer - now;
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