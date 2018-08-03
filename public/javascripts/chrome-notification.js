// prmissão para carregar página com notification
document.addEventListener('DOMContentLoaded', function () {

    if (!Notification) {
        alert('Notificações da área de trabalho não disponíveis em seu navegador. Experimente o Chrome.'); 
        return;
    }

    if (Notification.permission !== "granted") {
        Notification.requestPermission();
    }
        
});


function notifyMe(title, container) {

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