// script.js
const names = ["John", "Jane", "Jack", "Alex", "Jessica"];

function printGreeting(name) {
  if (name.charAt(0).toLowerCase() === "j") {
    console.log("Goodbye " + name);
  } else {
    console.log("Hello " + name);
  }
}

names.forEach(printGreeting);
