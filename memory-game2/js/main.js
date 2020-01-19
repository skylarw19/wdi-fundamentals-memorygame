/* delete after creating cards array
let cardOne = "queen";  
let cardTwo = "queen";
let cardThree = "king";
let cardFour = "king";
console.log("User flipped " + cardOne);
console.log("User flipped " + cardThree);
*/
 let cards = ["queen", "queen", "king", "king"];
 let cardsInPlay = [];

 let cardOne = cards[0];
 cardsInPlay.push(cardOne);

 //create var to rep 2nd card flipped. 3rd item in cards array. add to cardsinplay 
 let cardTwo = cards[2];
 cardsInPlay.push(cardTwo);

 if(cardsInPlay.length===2){
 	if(cardsInPlay[0]===cardsInPlay[1]){
 		alert("You found a match!");
 	}
 	else { alert("Sorry, try again."); }
 }

 console.log(cards);
 console.log(cardsInPlay);

