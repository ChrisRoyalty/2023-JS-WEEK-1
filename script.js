// WEEK_1: PROJECT-1
let speed = +prompt("Enter a speed rate");
if (speed <= 50) {
  console.log("You're not speeding");
} else if (speed > 50 && speed < 200) {
  console.log("You're Speeding");
} else if (speed >= 200) {
  console.log("You're Overspeeding");
} else if (speed != Number) {
  console.log("you're speed rate must be a number");
} else {
  console.log("Wrong entry");
}

// WEEK_1: PROJECT-2:

let enterDataType = "";
console.log(typeof enterDataType);


// This is a for loop used to loop numbers from 1 to 200 stored in the variable speed and while its looping it consoles statements passed through strings when it loops to certain speed rates

for(let speed = 1; speed < 201; speed++){
  if (speed === 50) {
    console.log("You're not speeding");
  } else if (speed === 85) {
    console.log("You're still not speeding @ " + speed + "km/sec");
  } else if (speed === 100) {
    console.log("Yeah you're now speeding @ " + speed + "km/sec");
  } else if (speed === 200) {
    console.log("You're now overspeeding @ " + speed + "km/sec");
  }else{
    console.log(speed);
  }
}

