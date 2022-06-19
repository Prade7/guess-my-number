// "use strict";

// console.log(document.querySelector('.message').textContent)


// console.log("hii")

// document.querySelector(".guess").value=50;
// document.querySelector("#number").textContent=50;


var number =Math.random()*20+1
var number=Math.trunc(number)
console.log(number)
let score=20;
let highScore=0;
var check =document.querySelector(".check");


let displayMessage=function(message){
    document.querySelector(".message").textContent=message;
}

check.addEventListener("click",function(){
    var guess=Number(document.querySelector(".guess").value);

    // When there is no input
    if(!guess){
            displayMessage("No answer!!!");
    }

    // When the guess in correct
    else if(guess==number){
        displayMessage("You are correct");
        
        document.querySelector("body").style.backgroundColor="#00FF00";
        document.querySelector("#number").textContent=guess;
        document.querySelector("#number").style.width="30rem";
        if(score>highScore){
            highScore=score
        document.querySelector(".highscore").textContent=highScore
        }
    }

    else if (number!=guess){
        if(score>1){
        document.querySelector(".message").textContent = guess < number ? "The guess is too low" : "The guess is too High";
            score-=1;
            document.querySelector(".score").textContent=score;
         } else{
        displayMessage("You lost the game!")
        document.querySelector(".score").textContent=0;
                            
                        }
        
    }})
    // When the guess is lesser than the number
//     else if(number > guess){
//         if(score>1){
//         document.querySelector(".message").textContent="The guess is too low";
//         score-=1;
//         document.querySelector(".score").textContent=score;
//         }
//         else{
//             document.querySelector(".message").textContent="You lost the game!"
//         document.querySelector(".score").textContent=0;
            
//         }
//     }

//     // When the guess is higher than the number

//     else if(number < guess){
//        if(score>1){
//         document.querySelector(".message").textContent="The guess is too high";
//         score-=1;
//         document.querySelector(".score").textContent=score;
//        }
//        else{
//         document.querySelector(".message").textContent="You lost the game!";
//         document.querySelector(".score").textContent=0;

//        }
//     }

// })
let again = document.querySelector(".again");

// again.addEventListener("click",function(){
//     score=0;
//     number =Math.random()*20+1
//     number=Math.trunc(number)


// })


again.addEventListener("click",function () {
        score = 20;
        document.querySelector(".score").textContent = score;
        document.querySelector(".message").textContent = "Start Guessing..";
        number = Math.random() * 20 + 1;
        number = Math.trunc(number);
        console.log(number);
        document.querySelector("#number").textContent = "?";
        document.querySelector("body").style.backgroundColor = "#222";
        document.querySelector(".guess").value = "";
        document.querySelector("#number").style.width = "15rem";
    })