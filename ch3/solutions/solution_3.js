let givenNumber = 4;

if (givenNumber % 2 == 0) {
  if (givenNumber == 2) {
    console.log("My given number is either 2 or 4.");
  } else if (givenNumber == 4) {
    console.log("My given number is either 2 or 4.");
  }

  // another solution
  /*
  if (givenNumber == 2 || givenNumber == 4) {
    console.log("My given number is either 2 or 4.");
  }
  */
} else {
  console.log("My given number is bad.");
}