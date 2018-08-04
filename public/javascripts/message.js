
class Message extends Notify {
	// messagem de fim de tempo, função callback

	static endTime() {

		Message.moreOne();
		this.classList.add("interval");
		Message.notifyMe("Hora do intervalo!", "Partiu tomar café!");
		Message.soundNotice("http://www.danosongs.com/music/danosongs.com-inspirabeat.mp3");
		
	}

	// messagem de fim de tempo do intervalo, função callback

	static endTimeInterval() {

		this.classList.add("afterInterval");
		Message.notifyMe("O intervalo acabou!", "Hora de trabalhar!");
		Message.soundNotice("http://www.danosongs.com/music/danosongs.com-inspirabeat.mp3");
		
	}

	// solicita ao serviço um acrescimo de mais um a variavel de sessão
	// sempre que o timer terminar é acionada, exceto o timer de intervalo

	static moreOne() {

		let req = new XMLHttpRequest();
		req.open("GET", "/pomodoro/cont");
		req.send(null);
		console.log(req.responseText);
		
	}
	
}

