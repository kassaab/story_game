playerName = prompt("What is your name?");

alert("Hello, " + playerName + " " + welcome);

let pathChoice = prompt(introText + "\n" + pathText).toLowerCase();

if (pathChoice === "path") {
    let mountainChoice = prompt(pathText1).toLowerCase();
    if (mountainChoice === "enter") {
        let hutChoice = prompt(pathText1A).toLowerCase();
        if (hutChoice === "follow") {
            alert(endText2);
        } else {
            alert(endText7);
        }
    } else if (mountainChoice === "climb") {
        let ledgeChoice = prompt(pathText1B).toLowerCase();
        if (ledgeChoice === "cross") {
            alert(endText3);
        } else {
            alert(endText7);
        }
    } else {
        alert("Invalid choice, you lost your chance!");
    }

} else if (pathChoice === "cave") {
    let caveChoice = prompt(pathText2).toLowerCase();
    if (caveChoice === "light") {
        let treasureChoice = prompt(pathText2A).toLowerCase();
        if (treasureChoice === "take") {
            alert(endText4);
        } else {
            alert(endText6);
        }
    } else if (caveChoice === "back") {
        let tunnelChoice = prompt(pathText2B).toLowerCase();
        if (tunnelChoice === "deeper") {
            alert(endText5);
        } else {
            alert(endText6);
        }
    } else {
        alert("Invalid choice, you lost your chance!");
    }

} else {
    alert("Invalid choice, please restart the game!");
}
