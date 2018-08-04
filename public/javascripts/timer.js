class Timer {
	
	constructor(display) {
	
		this._display = display;
	
	}
	
	get display() {

		return this._display;

	}


	// configura as variaveis para o iniciar o loop no metódo decreasingTime

	start(minutes, endedFunction) {
		let seconds = 60;
		let display = this.display;

		if (minutes < 10) {

			display.textContent = "0" + minutes + ":00";

		} else {

			display.textContent = minutes + ":00";

		}

		minutes--;
		
		this.decreasingTime(minutes, seconds, endedFunction, display);
		
	}


	// lógica do cronômetro regresivo
	// é execultado a cada segundo decrementado o timer, até zerá-lo-á
	
	decreasingTime(minutes, seconds, endedFunction, display) {

		let timer = setInterval(function () { 
			if (seconds == 0) {

				if (minutes == 0) {
					clearInterval(timer);

					if (endedFunction) {

						Message.endTimeInterval.call(display);
						return;

					} else {

						Message.endTime.call(display);
						return;

					}
				} else {

					minutes--;
					seconds = 59;

				}
				
			} else {

				seconds--;

			}

			let minutesAux = (minutes < 10 ? ("0" + minutes) : minutes); // se minutes for menor que 10, então adiciona um zero a esquedar (09:00)
			let secondsAux = (seconds < 10 ? ("0" + seconds) : seconds); // se seconds for menor que 10, então adiciona um zero a esquedar (00:09)

			display.textContent = minutesAux + ":" + secondsAux;
			
		}, 1000);


	}

	
}



/**
 *  Controle das chamadas de funções, do cronômetro
 * 	
 * 	@param {Number} time O tempo do cronômetro, como default é 25min
 * 	@param {Function} callback Define qual messagem será mostrada, após o termino do cronômetro
*/ 	
function displayController(time=25, interval=false) {
	
	const timer = new Timer(document.getElementById("timer"));
	timer.start(time, interval);

}

// prepara o timer com valor personalizado

function customDisplay() {
	
	const time = document.getElementById("time").value;

	if ( time < 1 || isNaN(time) ) {

		alert("O tempo deve ser um número inteiro igual ou superio a 1 minuto");
		throw "Time invalid";
		
	}

	displayController(time);
	
}


function clear() {
	
	let req = new XMLHttpRequest();
	req.open("GET", "/final");
	req.send(null);
	console.log(req.responseText);

}   