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

 function checkForMatch(){
 	if(cardsInPlay[0]===cardsInPlay[1]){
 		console.log("You found a match!");
	}
 	else { console.log("Sorry, try again."); }
 }

 function flipCard(cardID){
 	console.log("User flipped " + cards[cardID]);
 	cardsInPlay.push(cardID);	
 	checkForMatch();
 }

 flipCard(0);
 flipCard(2);
