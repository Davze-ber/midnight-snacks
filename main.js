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
const formEvents = document.getElementById('form-events');

openDialogEvents.addEventListener('click', () => {
  dialogEvents.showModal();
});

closeDialogEvents.addEventListener('click', () => {
  dialogEvents.close();
});


formEvents.addEventListener('submit', (event) => {
  event.preventDefault();

  const eventName = document.getElementById('event-name').value;
  const eventDateDD = document.getElementById('event-date-DD').value;
  const eventDateMM = document.getElementById('event-date-MM').value;
  let eventSeason = "";

  if (["3", "4", "5"].includes(eventDateMM)) {
    eventSeason = "spring";
  } else if (["6", "7", "8"].includes(eventDateMM)) {
    eventSeason = "summer";
  } else if (["9", "10", "11"].includes(eventDateMM)) {
    eventSeason = "autumn";
  } else if (["12", "1", "2"].includes(eventDateMM)) {
    eventSeason = "winter";
  }
  console.log(`Event Name: ${eventName}, Date: ${eventDateDD}/${eventDateMM} ${eventSeason}`);
  dialogEvents.close()
  createSeasonalEvent(eventName, eventDateDD, eventDateMM, eventSeason);
});
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

function createSeasonalEvent(eventName, eventDateDD, eventDateMM, eventSeason) {

  const EventDate = `${eventDateDD.value}/${eventDateMM.value}`;

  const seasonalEventDiv = document.createElement('div');
  const seasonalEventName = document.createElement('h3');
  seasonalEventName.textContent = eventName;
  const seasonalEventDate = document.createElement('p');
  seasonalEventDate.textContent = EventDate;
  seasonalEventDiv.appendChild(seasonalEventName);
  seasonalEventDiv.appendChild(seasonalEventDate);

  if (eventSeason.value === "spring") {
    seasonSpring.appendChild(seasonalEventDiv);
  } else if (eventSeason.value === "summer") {
    seasonSpring.appendChild(seasonalEventDiv);
  } else if (eventSeason.value === "autumn") {
    seasonSpring.appendChild(seasonalEventDiv);
  } else {
    seasonWinter.appendChild(seasonalEventDiv);
  }
}
// class SeasonalEvent {
//   constructor(eventName,eventDateDD,eventDateMM,eventSeason) {
//     this.eventName = eventName;
//     this.eventDateDD = eventDateDD;
//     this.eventDateMM = eventDateMM;
//     this.eventSeason = eventSeason;
//   }
//   get e

//   report() {
//       console.log(`Event Name: ${eventName}, Date: ${eventDate} ${eventSeason}`);
//   };
// }

// //     const newEvent = document.createElement('div');
// //     newEvent.classList.add(`${eventSeason}-season`);

// //     const newEventHeading = document.createElement('h3')
// //     newEventHeading.textContent = eventName;

// //     const newEventDate = document.createElement('p');
// //     newEventDate.textContent = eventDate;

// //     newEvent.appendChild(newEventHeading);
// //     newEvent.appendChild(newEventDate);

// //     springEvent.append(newEvent);
// //     eventDialog.close();
// // }

// /* 
//     by pressing the button to open event dialog, then close the dialog or use x button to close it

// */
// function addSeasonEvent(eventName, eventDateDD, eventDateMM) {
//     this.eventname = eventName;
//     this.eventDateDD = eventDateDD;
//     this.eventDateMM = eventDateMM;

//       // Determine season based on month
//     if (eventDateMM >= 3 && eventDateMM <= 5) {
//         this.eventSeason = "Spring";
//     } else if (eventDateMM >= 6 && eventDateMM <= 8) {
//         this.eventSeason = "Summer";
//     } else if (eventDateMM >= 9 && eventDateMM <= 11) {
//         this.eventSeason = "Autumn";
//     } else {
//         this.eventSeason = "Winter";
//     }

// }

// // let name = prompt("Enter event name:");
// // let day = parseInt(prompt("Enter day (DD):"));
// // let month = parseInt(prompt("Enter month (MM):"));

// // let userEvent = new addSeasonEvent(eventName, eventDateDD, eventDateMM);
// // console.log(userEvent);
