// // //Script for log in page
// // const openLogin = document.getElementById('openLogin');
// // const closeLogin = document.getElementById('close-btn');
// // const dialogLogin = document.querySelector("[closedby='any']");

// // const CloseBTNs = document.querySelectorAll(".close")

// // //Script for events page
// // const openBTNSum01 = document.querySelector('#open-modalSum01');
// // const closeBTNSum01 = document.querySelector('#close-modalSum01');
// // const dialogSum01 = document.querySelector('#SM01');

// // close modal when clickinh outside
// // openLogin.addEventListener('click', () => dialogLogin.showModal());

// // closeBTNSum01.addEventListener('click', () => dialogSum01.close());
// // dialogSum01.addEventListener('click', event => {
// //     const rect = dialogSum01.getBoundingClientRect();
// //     const isInDialog =
// //     event.clientX >= rect.left &&
// //     event.clientX <= rect.right &&
// //     event.clientY >= rect.top &&
// //     event.clientY <= rect.bottom;

// //     if (!isInDialog) {
// //         dialogSum01.close();
// //     }
// // });
const openDialogEvents = document.getElementById('add-event');
const dialogEvents = document.getElementById('dialog-events');
const closeDialogEvents = document.getElementById('btn-close');

openDialogEvents.addEventListener('click', () => {
  dialogEvents.showModal();
});

closeDialogEvents.addEventListener('click', () => {
  dialogEvents.close();
});
const year = new Date();
console.log(year);


//Buttons to switch Season's Div
const springBtn = document.getElementById('spring');
const summerBtn = document.getElementById('summer');
const autumnBtn = document.getElementById('autumn');
const winterBtn = document.getElementById('winter');
//Season's Div
const seasonSpring = document.getElementById('spring-event');
const seasonSummer = document.getElementById('summer-event');
const seasonAutumn = document.getElementById('autumn-event');
const seasonWinter = document.getElementById('winter-event');

//Switching season's tabs
springBtn.addEventListener('click', () => {
  seasonSpring.style.zIndex = "4";
  seasonSummer.style.zIndex = "3";
  seasonAutumn.style.zIndex = "2";
  seasonWinter.style.zIndex = "1";
});
summerBtn.addEventListener('click', () => {
  seasonSpring.style.zIndex = "3";
  seasonSummer.style.zIndex = "4";
  seasonAutumn.style.zIndex = "2";
  seasonWinter.style.zIndex = "1";
});
autumnBtn.addEventListener('click', () => {
  seasonSpring.style.zIndex = "2";
  seasonSummer.style.zIndex = "3";
  seasonAutumn.style.zIndex = "4";
  seasonWinter.style.zIndex = "1";
});
winterBtn.addEventListener('click', () => {
  seasonSpring.style.zIndex = "1";
  seasonSummer.style.zIndex = "2";
  seasonAutumn.style.zIndex = "3";
  seasonWinter.style.zIndex = "4";
});

const formEvents = document.getElementById('form-events');
formEvents.addEventListener('submit', (event) => {
  event.preventDefault();

  const eventName = document.getElementById('event-name').value.trim();
  const eventDateDD = Number(document.getElementById('event-date-DD').value);
  const eventDateMM = Number(document.getElementById('event-date-MM').value);
  let eventSeason = "";

  switch (eventDateMM) {
    case 3:
    case 4:
    case 5:
      eventSeason = "spring";
      break;
    case 6:
    case 7:
    case 8:
      eventSeason = "summer";
      break;
    case 9:
    case 10:
    case 11:
      eventSeason = "autumn";
      break;
    case 12:
    case 1:
    case 2:
      eventSeason = "winter";
      break;
  }

  const eventDay = {
    eName: eventName,
    eDay: eventDateDD,
    eMonth: eventDateMM,
    eSeason: eventSeason
  }
  console.log(eventDay);

  console.log(`Event Name: ${eventName}, Date: ${eventDateDD}/${eventDateMM}, Season: ${eventDay.eSeason}`);

  const saveEDay = JSON.stringify(eventDay);
  localStorage.setItem("seasonalevents", saveEDay);

  document.getElementById('event-name').value = "";
  document.getElementById('event-date-DD').value = "";
  document.getElementById('event-date-MM').value = "";

  dialogEvents.close();
  createEventDiv(eventDay);
});

function saveEvents() {

}


//Creating Event Div
function createEventDiv(eventDay) {

  const eventDate = `${eventDay.eDay}/${eventDay.eMonth}`;
  const removeEventDiv = document.createElement('button')
  const eventDiv = document.createElement('div');
  const eventNameDiv = document.createElement('h3');
  const eventDateDiv = document.createElement('p');


  //Adding text to a Div
  eventNameDiv.textContent = eventDay.eName;
  eventDateDiv.textContent = eventDate;
  //Removing a Div

  removeEventDiv.textContent = 'x';
  removeEventDiv.classList.add('remove-event-btn');

  //Adding a Name, a Date nd Removal of a Div
  eventDiv.append(removeEventDiv, eventNameDiv, eventDateDiv);

  switch (eventDay.eSeason) {
    case "spring":
      seasonSpring.appendChild(eventDiv);
      break;
    case "summer":
      seasonSummer.appendChild(eventDiv);
      break;
    case "autumn":
      seasonAutumn.appendChild(eventDiv);
      break;
    case "winter":
      seasonWinter.appendChild(eventDiv);
      break;
  }

  removeEventDiv.addEventListener('click', () => {
    seasonalEventDiv.remove();
  });


}



