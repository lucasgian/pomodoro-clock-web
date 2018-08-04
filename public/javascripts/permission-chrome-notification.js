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


