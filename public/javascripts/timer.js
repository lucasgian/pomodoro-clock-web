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

// controle das chamadas de funções do cronômetro

function display() {

    const timer = document.getElementById("timer");
    timer.deleteCell(0);
    startTimer(25, timer.insertCell(0), endTime);

}

// messagem de fim de tempo

function endTime() {

	this.textContent = "Intervalo!";
    
}