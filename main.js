//Script for log in page
const openLogin = document.getElementById('openLogin');
const closeLogin = document.getElementById('close-btn');
const dialogLogin = document.querySelector("[closedby='any']");


const CloseBTNs = document.querySelectorAll(".close")

//Script for events page
const openBTNSum01 = document.querySelector('#open-modalSum01');
const closeBTNSum01 = document.querySelector('#close-modalSum01');
const dialogSum01 = document.querySelector('#SM01');



// close modal when clickinh outside
openLogin.addEventListener('click', () => dialogLogin.showModal());

openBTNSum01.addEventListener('click', () => dialogSum01.showModal());
closeBTNSum01.addEventListener('click', () => dialogSum01.close());
dialogSum01.addEventListener('click', event => {
    const rect = dialogSum01.getBoundingClientRect();
    const isInDialog =
    event.clientX >= rect.left &&
    event.clientX <= rect.right &&
    event.clientY >= rect.top &&
    event.clientY <= rect.bottom;
    
    if (!isInDialog) {
        dialogSum01.close();
    }
});
CloseBTNs.forEach((btn) => {
    btn.addEventListener("click", () => { 
    btn.parentElemnt.close();
})  
});
