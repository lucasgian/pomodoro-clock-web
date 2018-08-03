
// messagem de fim de tempo, função callback

function endTime() {

	this.textContent = "Intervalo!";
	this.classList.add("interval");
	soundNotice("http://www.danosongs.com/music/danosongs.com-inspirabeat.mp3");
    
}

// messagem de fim de tempo do intervalo, função callback

function endTimeInterval() {

	this.textContent = "Hora da ação!";
	this.classList.add("afterInterval");
	soundNotice("http://www.danosongs.com/music/danosongs.com-inspirabeat.mp3");
    
}


// notificação com som

function soundNotice(url) {

	const audio = new Audio();
    audio.src = url;
    audio.play();

    setTimeout(function() {
        audio.pause();
    }, 5000);
	
}
