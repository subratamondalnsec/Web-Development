const max=prompt("Enter the max number");

const ran=Math.floor(Math.random()*max)+1;

let guass = prompt("guess the number");

while(true){
    if(guass=="quit"){
        console.log("user quit");
        break;
    } 
    if(guass==ran){
        console.log("you are right! congrats!!");
        break;
    }
    else if(guass<ran){
        guass=prompt("hint : you guess too small.please try again");
    }
    else{
        guass=prompt("hint : you guess too big.please try again");
    }
}