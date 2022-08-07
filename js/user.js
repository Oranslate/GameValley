const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const mail = document.querySelector("#mail");
const age = document.querySelector("#age");
const gender = document.querySelector("#gender");
const submitBtn = document.querySelector("#submit")
const clearBtn = document.querySelector("#reset")
const gamesboard = document.querySelector(".games-board");
const playerDetails = document.querySelector(".player-details");
const userName = document.querySelector("#Player-Name");


if (localStorage.getItem("FirstName")){
    userName.innerHTML = localStorage.getItem("FirstName");
    gamesboard.style.display = "flex";
    playerDetails.style.display = "none";
} else {
    userName.innerHTML = "Profile";
    playerDetails.style.display = "flex";
    gamesboard.style.display = "none";
}


const submit = ()=> {
    console.log("Validation Done");
    localStorage.setItem("Balance", 5000)
    localStorage.setItem("FirstName", `${firstName.value}`)
    localStorage.setItem("LastName", `${lastName.value}`)
    localStorage.setItem("Mail", `${mail.value}`)
    localStorage.setItem("Age", `${age.value}`)
    localStorage.setItem("Gender", `${gender.value}`)
    playerDetails.style.display = "none";
    gamesboard.style.display = "flex";
    userName.innerHTML = localStorage.getItem("FirstName")

}

submitBtn.addEventListener("click", ()=> {
    firstName.value.trim() === ""
    || lastName.value.trim() === ""
    || mail.value.trim() === ""
    || age.value === ""
    || gender.value.trim() === ""
    ? alert("Please Fill All Required Fields")
    : age.value <= 16
    ? alert ("The Game is +16")
    :submit();
})

clearBtn.addEventListener ("click",()=> {
    console.log("Clearing")
    firstName.value = "";
    lastName.value = "";
    mail.value = "";
    age.value = "";
    gender.value = "";
})


