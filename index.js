//these add the aduio files to the program, allowing me to play sounds when buttons are clicked
let addPointsAudio = new Audio("sounds/ding.mp3");
let resetPointsAudio = new Audio("sounds/reset.mp3")

//initialize the scores of both 
let homeScore = 0;
let guestScore = 0;

//get the elements stored locally
homeBoard = document.getElementById("homeScore");
guestBoard = document.getElementById("guestScore");


//all of the functions for Home
function addOneToHome()
{   
    homeScore +=1
    homeBoard.textContent = homeScore;
    ding();
}

function addTwoToHome()
{   
    homeScore +=2
    homeBoard.textContent = homeScore;
    ding();
}

function addThreeToHome()
{   
    homeScore +=3
    homeBoard.textContent = homeScore;
    ding();
}


function resetHome()
{
    homeScore = 0;
    homeBoard.textContent = 0;
    reset()
}

//All of the functions for Guest

function addOneToGuest()
{   
    guestScore +=1
    guestBoard.textContent = guestScore;
    ding();
}

function addTwoToGuest()
{   
    guestScore +=2
    guestBoard.textContent = guestScore;
    ding();
}

function addThreeToGuest()
{   
    guestScore +=3
    guestBoard.textContent = guestScore;
    ding();
}


function resetGuest()
{
    guestScore = 0;
    guestBoard.textContent = 0;
    reset()
}

//function to play audio when win

function ding()
{
    addPointsAudio.load();
    addPointsAudio.play();
}

function reset()
{
    resetPointsAudio.load();
    resetPointsAudio.play();
}