
// messagem de fim de tempo, função callback

function endTime() {

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
