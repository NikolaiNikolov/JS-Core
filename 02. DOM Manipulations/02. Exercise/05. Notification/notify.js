function notify(message) {
    let notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';
    setTimeout(disappear, 2000);
    function disappear() {
        notification.style.display = 'none';
    }
}