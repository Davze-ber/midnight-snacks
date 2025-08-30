//Script for log in page
const openLogin = document.getElementById('openLogin');
const closeLogin = document.getElementById('close-btn');
const dialogLogin = document.querySelector("[closedby='any']");


const CloseBTNs = document.querySelectorAll(".close")

//Script for events page
const openBTNSum01 = document.querySelector('#open-modalSum01');
const closeBTNSum01 = document.querySelector('#close-modalSum01');
const dialogSum01 = document.querySelector('#SM01');

const addEventbtn = document.getElementById('add-event');
const eventDialog = document.getElementById('event-dialog');
const closeEventDialog = document.getElementById('event-dialog-close');
const springEvent = document.getElementById('spring-event');
// close modal when clickinh outside
openLogin.addEventListener('click', () => dialogLogin.showModal());

// closeBTNSum01.addEventListener('click', () => dialogSum01.close());
// dialogSum01.addEventListener('click', event => {
//     const rect = dialogSum01.getBoundingClientRect();
//     const isInDialog =
//     event.clientX >= rect.left &&
//     event.clientX <= rect.right &&
//     event.clientY >= rect.top &&
//     event.clientY <= rect.bottom;
    
//     if (!isInDialog) {
//         dialogSum01.close();
//     }
// });


addEventbtn.addEventListener('click', () => eventDialog.showModal());
eventDialog.addEventListener('click', event => {
    const eventDialogRect = eventDialog.getBoundingClientRect();
    const isInEventDialog =
    event.clientX >= eventDialogRect.left &&
    event.clientX <= eventDialogRect.right &&
    event.clientY >= eventDialogRect.top &&
    event.clientY <= eventDialogRect.bottom;
    
    if (!isInEventDialog) {
        eventDialog.close();
    }
});
closeEventDialog.addEventListener('click', AddEventSeason)
function AddEventSeason() {
    const eventName = document.getElementById('event-name').value;
    const eventSeason = document.getElementById('event-season').value;
    const eventDate = document.getElementById('event-date').value;

    const newEvent = document.createElement('div');
    newEvent.classList.add('new-event');
    newEvent.textContent = `${eventName} (${eventSeason}) - ${eventDate}`;

    springEvent.append(newEvent);
    eventDialog.close();
}