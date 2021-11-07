



let writeCards = (myArray, event) => {
  // write cards is the named fucntion to add " " to each name pass thru 
let thankYouCards = []
//creates the array
  for( let i = 0; i < myArray.length ; i++ ){
    //my counter loop
    thankYouCards.push( `Thank you, ${myArray[i]}, for the wonderful ${event} gift!` )
     }
    return thankYouCards
   }



let countDown = (startNum) => {
  while( startNum > 0) {
    console.log(startNum);
    startNum -= 1;
  }
  console.log(startNum)
}
















































// function writeCards( namesArray, event ) {
//   let thankYouCards = []
//   for ( let i = 0; i < namesArray.length; i++ ) {
//     thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
//   }
//   return thankYouCards
// }

// function countDown( startingNumber ) {
//   while ( startingNumber > 0 ) {
//     console.log( startingNumber );
//     startingNumber -= 1;
//   }
//   console.log( startingNumber );
// }