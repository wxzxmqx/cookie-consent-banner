import { showNotification } from "./notification.js";

let cookieConsent;
const modalWindow = document.querySelector('.cookie-container');
const acceptCookiesBtn = document.querySelector('.btn-accept');
const declineCookiesBtn = document.querySelector('.btn-decline');

const closeWindowBtn = document.querySelector('.close-window');
const resetStorageBtn = document.querySelector('.reset-storage');

function checkStorageData() {
    const savedChoice = localStorage.getItem('cookieConsent');

    return savedChoice !== null ? modalWindow.classList.add('hidden') : modalWindow.classList.remove('hidden');
}

resetStorageBtn.addEventListener('click', () => {
    localStorage.removeItem('cookieConsent');

    return modalWindow.classList.remove('hidden');
});

acceptCookiesBtn.addEventListener('click', () => {
    cookieConsent = true;
    localStorage.setItem("cookieConsent", cookieConsent);
    modalWindow.classList.add('hidden');

    showNotification('All Set!', 'Your cookie preferences have been saved.')
});

declineCookiesBtn.addEventListener('click', () => {
    cookieConsent = false;
    localStorage.setItem("cookieConsent", cookieConsent);
    modalWindow.classList.add('hidden');

    showNotification('Preferences Saved', 'You have opted out of cookies. You can change this anytime.')
});


closeWindowBtn.addEventListener('click', () => {
    modalWindow.classList.add('hidden');
});

checkStorageData();