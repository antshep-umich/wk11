function hideHumans() {
    console.log("In hideHumans")
    const allDivs = document.querySelectorAll(".character");

    for (let i = 0; i < allDivs.length; i++) {
        // Log what's inside this card
        console.log("Checking card:", allDivs[i].innerHTML);

        // Get the text from the second <dd> (Species)
        let speciesLine = allDivs[i].querySelectorAll("dd")[1].innerHTML;
        console.log("Species found:", speciesLine);

        // If the species is exactly "Human", hide the card
        if (speciesLine == "Human") {
            allDivs[i].style.display = "none";
        }
    }
}

function hideAliens() {
    console.log("In hideAliens")

    const allDivs = document.querySelectorAll(".character");

    for (let i = 0; i < allDivs.length; i++) {
        // Log what's inside this card
        console.log("Checking card:", allDivs[i].innerHTML);

        // Get the text from the second <dd> (Species)
        let speciesLine = allDivs[i].querySelectorAll("dd")[1].innerHTML;
        console.log("Species found:", speciesLine);

        // If the species is exactly "Alien", hide the card
        if (speciesLine == "Alien") {
            allDivs[i].style.display = "none";
        }
    }
}

function showAll() {
    const allDivs = document.querySelectorAll(".character");

    for (let i = 0; i < allDivs.length; i++) {
        console.log("Showing card:", allDivs[i].innerHTML);
        allDivs[i].style.display = "inline-block";
    }
}
