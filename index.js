// Iteration 1: Names and Input

const hacker1 = "Ariola" 
  console.log("The driver's name is " + hacker1);

const hacker2 = "Carol" 
  console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

const hacker3 = "Ariola"
const hacker4 = "Carol"

if (hacker3.length > hacker4.length) {
  console.log("The driver has the longest name, it has " + hacker3.length + " characters.");
} else if (hacker3.length < hacker4.length) {
  console.log("It seems that the navigator has the longest name, it has " + hacker4.length + "characters.");
} else {
  console.log("Wow, you both have equally long names, " + hacker3.length + "characters!")
}

// Iteration 3: Loops

//3.1

const hacker5 = "Ariola"

for (let i = 0; i < 1; i++) {
    /*const char = hacker1[i]*/
    console.log(hacker5.toUpperCase().split('').join(' '))
  }

  //3.2

const hacker6 = "Carol"
let reversed = "";

for (let i = hacker6.length -1 ; i >= 0; i--) {
  reversed += hacker6[i]
}

console.log(reversed)

  //3.3

const hacker7 = "Ariola"
const hacker8 = "Carol"


  for (let i = 0; i < 1; i++) {
    
    let i = hacker7.localeCompare(hacker8)
    
      if (i < 0) {
      console.log(`The driver's name goes first.`);
    } else if (i > 0) {
      console.log(`Yo, the navigator goes first, definitely.`);
    } else {
      console.log(`What? You both have the same name?`);
    }
  }

  //#### Bonus 1:

