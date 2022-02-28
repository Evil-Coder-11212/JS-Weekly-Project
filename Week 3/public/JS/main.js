const notificationBtn = document.getElementById('notification');
const notificationContainer = document.getElementById('notification-container');
let notificationCount = 0;
notificationBtn.addEventListener('click', () => {
    addNotification();
});

const addNotification = () => {
    notificationCount += 1;
    let notification = document.createElement('div');
    notification.classList.add("notification");
    notification.innerHTML = `<p>Notification ${notificationCount}</p>`
    notificationContainer.appendChild(notification);
    setTimeout(() => {
        notification.remove();
        notificationCount -= 1;

    }, 3000);
}