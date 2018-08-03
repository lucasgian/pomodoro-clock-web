// lógica do cronômetro regresivo

function startTimer(minutes, display, endedFunction) {
	let seconds = 60;
	display.textContent = minutes + ":00";
	minutes--;
    
	let timer = setInterval(function () { // é execultado a cada segundo decrementado o timer, até zerar o ele
		if (seconds == 0) {
			if (minutes == 0) {
				clearInterval(timer);

				if (endedFunction) {
					endedFunction.call(display);
					return;
				}
			} else {
				minutes--;
				seconds = 59;
			}
		} else {
			seconds--;
		}

		let _minutes = (minutes < 10 ? ("0" + minutes) : minutes); // se minutes for menor que 10, então adiciona um zero a esquedar (09:00)
		let _seconds = (seconds < 10 ? ("0" + seconds) : seconds); // se seconds for menor que 10, então adiciona um zero a esquedar (00:09)

		display.textContent = _minutes + ":" + _seconds;
    }, 1000);
    
}

/**
 *  Controle das chamadas de funções, do cronômetro
 * 	
 * 	@param {Number} time O tempo do cronômetro, como default é 25min
 * 	@param {Function} callback Define qual messagem será mostrada após o termino do cronômetro
*/ 	
function display(time=25, callback=endTime) {
	
    const display = document.getElementById("timer");
    display.deleteCell(0);
    startTimer(time, display.insertCell(0), callback);
	
}
