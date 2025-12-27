function showNotification(headerText, messageText) {
    const notification = document.querySelector('.notification-container');
    const header = document.querySelector('.notification-header');
    const message = document.querySelector('.notification-message');

    header.textContent = headerText;
    message.textContent = messageText;

    notification.classList.remove('hidden');

    setTimeout(() => {
        notification.classList.add('hidden');
    }, 3000);
}

export { showNotification };