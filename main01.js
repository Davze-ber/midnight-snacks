
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
console.log(localStorage.getItem("savedEvents"));

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

function saveEvents() {

    const storedEvents = JSON.parse(localStorage.getItem("savedEvents")) || [];

    storedEvents.push(eventDay);

    localStorage.setItem("savedEvents", JSON.stringify(storedEvents));
    eventDiv();
};

function loadEvents() {
    const storedEventsList = localStorage.getItem("savedEvents");
    const parsedEvents = JSON.parse(storedEventsList);
    return parsedEvents || [];
};
function eventDiv() {
    const events = loadEvents();
    const springDiv = seasonSpring;
    const summerDiv = seasonSummer;
    const autumnDiv = seasonAutumn;
    const winterDiv = seasonWinter;

    springDiv.innerHTML = "";
    summerDiv.innerHTML = "";
    autumnDiv.innerHTML = "";
    winterDiv.innerHTML = "";

    events.forEach(event => {
        const eventDiv = document.createElement('div');
        const eventNameDiv = document.createElement('h3');
        const eventDateDiv = document.createElement('p');
        const removeEventDiv = document.createElement('button')


        //Adding text to a Div
        eventNameDiv.textContent = event.eName;
        eventDateDiv.textContent = `${event.eDay} / ${event.eMonth}`;
        removeEventDiv.textContent = 'x';
        removeEventDiv.classList.add('remove-event-btn');

        //Adding a Name, a Date nd Removal of a Div
        eventDiv.append(removeEventDiv, eventNameDiv, eventDateDiv);

        switch (event.eSeason) {
            case "spring":
                springDiv.appendChild(eventDiv);
                break;
            case "summer":
                summerDiv.appendChild(eventDiv);
                break;
            case "autumn":
                autumnDiv.appendChild(eventDiv);
                break;
            case "winter":
                winterDiv.appendChild(eventDiv);
                break;
        }

        removeEventDiv.addEventListener('click', () => {
            eventDiv.remove();

            const updatedEvents = events.filter(
                e => !(e.eName === event.eName &&
                    e.eDay === event.eDay &&
                    e.eMonth === event.eMonth &&
                    e.eSeason === event.eSeason)
            );
            localStorage.setItem("savedEvents", JSON.stringify(updatedEvents));
        });
    });;
}



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

    document.getElementById('event-name').value = "";
    document.getElementById('event-date-DD').value = "";
    document.getElementById('event-date-MM').value = "";

    console.log(eventDay);
    console.log(`Event Name: ${eventName}, Date: ${eventDateDD}/${eventDateMM}, Season: ${eventDay.eSeason}`);




    dialogEvents.close();
    saveEvents(eventDay);

});;
document.addEventListener("DOMContentLoaded", () => {
    eventDiv();
});