
//DOM Consts//
const playBtn = document.querySelector(".play-btn");
const games = document.querySelector(".games-board");
const blackJackGame = document.querySelector(".blackjack-gameboard");
const betSliderBtn =document.querySelector("#bet-slider");
const betBoard = document.querySelector(".bet-board");
const resetBtn = document.querySelector("#reset-btn");
const dealBtn = document.querySelector("#deal-btn");
const add5 = document.querySelector("#add-5");
const minus5 = document.querySelector("#minus-5");
const add25 = document.querySelector("#add-25");
const minus25 = document.querySelector("#minus-25");
const add50 = document.querySelector("#add-50");
const minus50 = document.querySelector("#minus-50");
const add100 = document.querySelector("#add-100");
const minus100 = document.querySelector("#minus-100");
const balanceAmt1 = document.querySelector("#balance-amt-1");
const betAmt1 = document.querySelector(".bet-amt-1");
const InsufficientBal = document.querySelector(".ins-balance");
const InsufficientBalBtn = document.querySelector("#ins-balance-btn");
const InsufficientBalTxt = document.querySelector("#ins-balance-txt");
const playerCardsParent = document.querySelector(".middle-layout-player")
const dealerCardsParent = document.querySelector(".middle-layout-dealer")
const hitBtn = document.querySelector("#hit");
const standBtn = document.querySelector("#stand");
const playerAmt = document.querySelector("#player-amt");
const dealerAmt = document.querySelector("#dealer-amt");
const resultBoard = document.querySelector(".result-board");
const resultTxt = document.querySelector("#result-txt");
const resultAmt = document.querySelector("#result-amt");
const playAgainBtn = document.querySelector("#again");
const betAmt2 = document.querySelector("#bet-amt-2");
const balanceAmt2 = document.querySelector("#balance-amt-2");

let cardsArray = ["./img/Card1.png","./img/Card2.png","./img/Card3.png","./img/Card4.png","./img/Card5.png","./img/Card6.png","./img/Card7.png","./img/Card8.png","./img/Card9.png","./img/Card10.png","./img/Card11.png","./img/Card12.png","./img/Card13.png"];
let playerScore = [];
let dealerScore = [];




//Call Back Functions//

const addPlayerRandomCard = ()=> {
    let random = Math.floor(Math.random()*12);
    let playerCard = document.createElement("img")
    playerCard.setAttribute("src",`${cardsArray[random]}`);
    if (random === 10 || random === 11 || random === 12 ){
        playerScore.push(10)
    } else {
        playerScore.push(random + 1);
    };
    playerCardsParent.appendChild(playerCard);
    let playerSum = playerScore.reduce((acc,curr)=>{
        return acc + curr
    });
    playerAmt.innerHTML = playerSum;
    if(parseInt(playerAmt.innerHTML) > 21){
        lost();
    }
}


const adddealerRandomCard = ()=> {
    let random = Math.floor(Math.random()*12);
    let dealerCard = document.createElement("img")
    dealerCard.setAttribute("src",`${cardsArray[random]}`);
    if (random === 10 || random === 11 || random === 12 ){
        dealerScore.push(10)
    } else {
        dealerScore.push(random + 1);
    };
    dealerCardsParent.appendChild(dealerCard);
    let dealerSum = dealerScore.reduce((acc,curr)=>{
        return acc + curr
    });
    dealerAmt.innerHTML = dealerSum;
    if(parseInt(dealerAmt.innerHTML) > 21){
        win();
    }
}

const flipDealercard = ()=>{
    let random = Math.floor(Math.random()*12);
    let coverCard = document.querySelector("#cover-card")
    coverCard.setAttribute("src",`${cardsArray[random]}`);
    if (random === 10 || random === 11 || random === 12 ){
        dealerScore.push(10)
    } else {
        dealerScore.push(random + 1);
    };
    let dealerSum = dealerScore.reduce((acc,curr)=>{
        return acc + curr
    });
    dealerAmt.innerHTML = dealerSum;
}

const adddealerCoverCard = ()=>{
    let dealerCard = document.createElement("img")
    dealerCard.setAttribute("src","./img/Card0.png");
    dealerCard.setAttribute("id", "cover-card")
    dealerCardsParent.appendChild(dealerCard);
}

const evaluate = ()=>{
    if (parseInt(playerAmt.innerHTML) < parseInt(dealerAmt.innerHTML)){
        lost();
    } else if (parseInt(playerAmt.innerHTML) > parseInt(dealerAmt.innerHTML)){
        win();
    } else if (parseInt(playerAmt.innerHTML) === parseInt(dealerAmt.innerHTML)){
        draw();
    }
}

const win = ()=> {
    resultBoard.style.display = "flex";
    resultTxt.innerHTML = "You Win";
    resultAmt.innerHTML = parseInt(betAmt2.innerHTML) * 2;
    localStorage.setItem("Balance", parseInt(betAmt2.innerHTML) * 2 + parseInt(balanceAmt2.innerHTML));
}

const lost = ()=>{
    resultBoard.style.display = "flex";
    resultTxt.innerHTML = "You Lost";
    resultAmt.innerHTML = betAmt2.innerHTML;
    localStorage.setItem("Balance", parseInt(balanceAmt2.innerHTML));
}

const draw = ()=>{
    resultBoard.style.display = "flex";
    resultTxt.innerHTML = "Draw";
    resultAmt.innerHTML = "";
    localStorage.setItem("Balance", parseInt(betAmt2.innerHTML) + parseInt(balanceAmt2.innerHTML) )

}

const backJack = ()=>{
    resultBoard.style.display = "flex";
    resultTxt.innerHTML = "Black Jack You Win";
    resultAmt.innerHTML = parseInt(betAmt2.innerHTML) * 3;
    localStorage.setItem("Balance", parseInt(betAmt2.innerHTML) * 3 + parseInt(balanceAmt2.innerHTML));
}

const removeAllChildNodes = (parent)=> {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const startGame = ()=> {
    betSliderBtn.setAttribute("disabled","");
    betBoard.style.left = "-300px";
    betAmt2.innerHTML = betAmt1.innerHTML;
    balanceAmt2.innerHTML = parseInt(balanceAmt1.innerHTML) - parseInt(betAmt1.innerHTML);
    addPlayerRandomCard();
    addPlayerRandomCard();
    adddealerCoverCard();
    adddealerRandomCard();
    if(parseInt(playerAmt.innerHTML) > 21){
        lost();
    } else if (parseInt(playerAmt.innerHTML) === 21){
        win();
    }
    hitBtn.removeAttribute("disabled");
    standBtn.removeAttribute("disabled");
}

const playAgain = ()=> {
    betSliderBtn.removeAttribute("disabled");
    resultBoard.style.display = "none";
    balanceAmt1.innerHTML = localStorage.getItem("Balance");
    removeAllChildNodes(playerCardsParent);
    removeAllChildNodes(dealerCardsParent);
    playerScore = [];
    dealerScore = [];
    playerAmt.innerHTML="";
    dealerAmt.innerHTML="";
    betAmt1.innerHTML= 0;
}




//Bet Functions//

resetBtn.addEventListener("click",()=>{
    betAmt1.innerHTML= 0;
})

add5.addEventListener("click", ()=> {
    betAmt1.innerHTML = parseInt(betAmt1.innerHTML) + 5 
})

minus5.addEventListener("click", ()=> {
    betAmt1.innerHTML = parseInt(betAmt1.innerHTML) - 5
})

add25.addEventListener("click", ()=> {
    betAmt1.innerHTML = parseInt(betAmt1.innerHTML) + 25
})

minus25.addEventListener("click", ()=> {
    betAmt1.innerHTML = parseInt(betAmt1.innerHTML) - 25
})

add50.addEventListener("click", ()=> {
    betAmt1.innerHTML = parseInt(betAmt1.innerHTML) + 50
})

minus50.addEventListener("click", ()=> {
    betAmt1.innerHTML = parseInt(betAmt1.innerHTML) - 50
})

add100.addEventListener("click", ()=> {
    betAmt1.innerHTML = parseInt(betAmt1.innerHTML) + 100
})

minus100.addEventListener("click", ()=> {
    betAmt1.innerHTML = parseInt(betAmt1.innerHTML) - 100
})

InsufficientBalBtn.addEventListener("click", ()=> {
    InsufficientBal.style.display = "none"
})


// Game functions
dealBtn.addEventListener("click",()=> {
    if (parseInt(balanceAmt1.innerHTML) < parseInt(betAmt1.innerHTML)){
        InsufficientBal.style.display = "flex";
        InsufficientBalTxt.innerHTML = "Insufficient Balance"
    } else if (parseInt(betAmt1.innerHTML) <= 0){
        InsufficientBal.style.display = "flex"
        InsufficientBalTxt.innerHTML = "Place your Bet"
    } else {
        startGame();
    }
})

playAgainBtn.addEventListener("click",()=>{
    playAgain();
})

hitBtn.addEventListener("click", ()=> {
    addPlayerRandomCard();
})

const dealerhit = ()=> {
    if(parseInt(dealerAmt.innerHTML) <= 16){
        adddealerRandomCard();
    }
}

standBtn.addEventListener("click",()=>{
    hitBtn.setAttribute("disabled","disabled");
    standBtn.setAttribute("disabled","disabled");
    flipDealercard();
    setTimeout(dealerhit,500);
    setTimeout(dealerhit,750);
    setTimeout(dealerhit,1000);
    setTimeout(dealerhit,1250);
    setTimeout(()=>{
        if(parseInt(dealerAmt.innerHTML) <= 21){
            evaluate();
        }
    },1500)
})

playBtn.addEventListener("click", ()=> {
    games.style.display = "none";
    blackJackGame.style.display = "flex";
    balanceAmt1.innerHTML = localStorage.getItem("Balance")
})

betSliderBtn.addEventListener("click", ()=>{
    betBoard.style.left = "0"
})