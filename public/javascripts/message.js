
class Message {
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


	static soundNotice(url) {

		const audio = new Audio();
		audio.src = url;

		const promise = audio.play();
	
		if (promise !== undefined) {

			promise.then(_ => {

				setTimeout(function() {
					
					audio.pause();
					location.reload();
				
				}, 5000);

			})
			.catch(error => {

				console.log(error);

			});

		}
		
	}

	// chrome-notification
	static notifyMe(title, container) {

		if (Notification.permission !== "granted") {
			Notification.requestPermission();
		}
		
		else {
	
			const notification = new Notification(title, {
				icon: 'https://pbs.twimg.com/profile_images/644212176065024000/9cC8iFCN_400x400.jpg',
				body: container,
			});
	
		}
	
	}
	
}

