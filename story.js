playerName = prompt("What is your name?");

alert("Hello, " + playerName + " " + welcome);

let pathChoice = (prompt(introText + "\n" + pathText)).toLowerCase();

if (pathChoice === "mountain") {
    let mountainChoice = prompt(pathText1).toLowerCase();
    if (mountainChoice === "climb") {
        alert(endText1);
    } else if (mountainChoice === "back") {
        alert(endText4);
    } else {
        alert("Invalid choice, you lost your chance!");
    }
} else if (pathChoice === "cave") {
    let caveChoice = prompt(pathText2).toLowerCase();
    if (caveChoice === "deeper") {
        alert(endText2);
    } else if (caveChoice === "back") {
        alert(endText4);
    } else {
        alert("Invalid choice, you lost your chance!");
    }
} else if (pathChoice === "river") {
    let riverChoice = prompt(pathText3).toLowerCase();
    if (riverChoice === "cross") {
        alert(endText6);
    } else if (riverChoice === "follow") {
        alert(endText3);
    } else {
        alert("Invalid choice, you lost your chance!");
    }
} else {
    alert("Invalid choice, please restart the game!");
}