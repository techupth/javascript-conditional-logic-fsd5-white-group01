//Exercise 2
let lightBulbStatus = "On";

// Start coding here.
lightBulbStatus = "Broken";
if (lightBulbStatus === "On") {
    console.log("Light bulb is On.");
} else if (lightBulbStatus === "Broken") {
    console.log("Light bulb is Broken.");
    lightBulbStatus = "Light bulb is Broken.";
} else {
    console.log("Please choose the correct input (On/Off/Broken)");
}
console.log(lightBulbStatus);