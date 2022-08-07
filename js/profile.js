
const profile = document.querySelector(".player-card");
const pFirstName = document.querySelector("#info-1");
const pemail = document.querySelector("#info-2");
const page = document.querySelector("#info-3");
const pgender = document.querySelector("#info-4");
const profileBtn = document.querySelector("#Player-Name");
const profileCloseBtn = document.querySelector("#close-btn");
const header = document.querySelector("#Hello");
const balanceBtn = document.querySelector("#balance-btn");
const balanceCard = document.querySelector(".balance-card");
const balanceCloseBtn = document.querySelector("#balance-close-btn");
const blackjackBalance = document.querySelector("#blackjack-balance");

setInterval(()=> {
    blackjackBalance.innerHTML = localStorage.getItem("Balance");
})

profileBtn.addEventListener("click",()=> {
    profile.style.display = "flex";
    header.innerHTML = `Hello, ${localStorage.getItem("FirstName")}`
    pFirstName.innerHTML = localStorage.getItem("FirstName")+ " " + localStorage.getItem("LastName");
    pemail.innerHTML = localStorage.getItem("Mail");
    page.innerHTML = localStorage.getItem("Age");
    pgender.innerHTML = localStorage.getItem("Gender");
})

profileCloseBtn.addEventListener("click", ()=> profile.style.display = "none")

balanceBtn.addEventListener("click", ()=> balanceCard.style.display = "flex");
balanceCloseBtn.addEventListener("click",()=> balanceCard.style.display = "none");