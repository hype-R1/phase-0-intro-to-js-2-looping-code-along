
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
  //counts downs the number of names
  while( startNum > 0) {
    // counting the number of elements
    console.log(startNum);
    startNum -= 1;
  }
  console.log(startNum)
}

