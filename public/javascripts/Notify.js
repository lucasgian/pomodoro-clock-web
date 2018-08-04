class Notify {

	// notificação com som

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
