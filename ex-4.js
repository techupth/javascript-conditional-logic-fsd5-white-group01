//Exercise 4
// Switch Statement
let lightBulbStatus = "On";

//Start coding here
switch (lightBulbStatus) {
  case "On":
    lightBulbStatus = "Light bulb is On.";
    break;
  case "Off":
    lightBulbStatus = "Light bulb is Off.";
    break;
  default:
    lightBulbStatus = "Please choose the correct input (On/Off/Broken)";
    break;
}

console.log(lightBulbStatus);
