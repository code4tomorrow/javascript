let character = "Warrior";
let stats = null;

switch (character) {
  case "Warrior":
    stats = {attack: 80, defence: 60, speed: 30};
    break;
  case "Scout":
    stats = {attack: 50, defence: 20, speed: 80};
    break;
  case "Archer":
    stats = {attack: 60, defence: 30, speed: 40};
    break;
  default:
    console.log("Unable to assigned character.");
    break;
}

console.log(stats);