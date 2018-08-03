
// messagem de fim de tempo, função callback

function endTime() {

	plusOne();
	this.classList.add("interval");
	notifyMe("Hora do intervalo!", "Partiu tomar café!");
	soundNotice("http://www.danosongs.com/music/danosongs.com-inspirabeat.mp3");
    
}

// messagem de fim de tempo do intervalo, função callback

function endTimeInterval() {

	this.classList.add("afterInterval");
	notifyMe("O intervalo acabou!", "Hora de trabalhar!");
	soundNotice("http://www.danosongs.com/music/danosongs.com-inspirabeat.mp3");
    
}

// solicita ao serviço um acrescimo de mais um a variavel de sessão
// sempre que o timer terminar é acionada, exceto o timer de intervalo

function plusOne() {

	let req = new XMLHttpRequest();
	req.open("GET", "/pomodoro/cont");
	req.send(null);
	console.log(req.responseText);
	
}


// notificação com som

function soundNotice(url) {

	const audio = new Audio();
    audio.src = url;

	const promise = audio.play();
 
	if (promise !== undefined) {

		promise.then(_ => {

			setTimeout(function() {
				audio.pause();
			}, 5000);

		})
		.catch(error => {

		});

	}
	
}
