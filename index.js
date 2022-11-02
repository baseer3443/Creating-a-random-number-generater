let a = Math.random() * 100
a = Number.parseInt(a)
let score = 100
let input;

while (input != a) {
  score = score - 1
  input = prompt("Enter the number")
  console.log("Please Enter The Number")
  if (input == a) {
    console.log('Congrgulations! You have guessed The correct Number')
    console.log(`Your score is ${100 - score}`)
  }

  else if (input < a && input > 0) {
    console.log("You have Guessed the less number than the Origional")
    console.log("Try Again")
  }
  else if (input > a && input < 100) {
    console.log("You have  guessed greater Number than the origional")
    console.log("Try Again")
  }
  else {
    console.log("The Number Must be between 0 and 100")
  }
}