const monthEl = document.querySelector(".date h1");
const dateEl = document.querySelector(".date p");
const daysEl = document.querySelector(".days");





const monthsInx = new Date().getMonth();
const lastDay = new Date(new Date().getFullYear(), monthsInx +1, 0).getDate();
const firstDay = new Date(new Date().getFullYear(), monthsInx, 1).getDay() - 1;
console.log(firstDay);






const months = [
    "January",
     "Februay",
     "March",
     "Aprail",
     "May",
     "june",
     "July",
     "August",
     "September",
     "Octomber",
     "November",
     "December"
];

monthEl.innerText = months[monthsInx];
dateEl.innerText = new Date().toDateString();

let days = "";

for (let i = firstDay; i>0 ; i--) {
    days += `<div class="empty"></div>`;
    
}
for(let i=1;i<=lastDay; i++){
     if (i===new Date().getDate()) {
        days += `<div class="today">${i}</div>`;
     }else{
    days += `<div>${i}</div>`;
     }
}
daysEl.innerHTML= days;

