/*
TODO:
- Bedre CSS - merefremhaved navne - DONE
- Fjerne JavaScript variabler/funktioner fra HTML-kode - DONE
- Större udvalg af navne - DONE
- Funktionalitet til at imellem pige- og drengenavne - DONE
- Importere lister med navne - DONE
- Favoritliste - CANNOT INTERPRET. Maybe weighted names? - DONE
*/

// $(document).ready(function() {});

//Event listener in vanilla JavaScript
document.getElementById("btn").addEventListener("click", function (myEvent) {
    //console.log(myEvent);
    //myEvent.target.innerHTML = myEvent.screenX;
    showName();
});


function showName() {
    var name, girlName, boyName, girlNameNumber, boyNameNumber, lastNameNumber;

    girlNameNumber = randomWeighted(girlNames.length, 4);

    boyNameNumber = randomWeighted(boyNames.length, 4);

    lastNameNumber = randomWeighted(lastNames.length, 4);

    girlName = girlNames[girlNameNumber] + " " + lastNames[lastNameNumber];

    boyName = boyNames[boyNameNumber] + " " + lastNames[lastNameNumber];

    if (document.getElementById("male").checked) {
        name = boyName;
    }

    if (document.getElementById("female").checked) {
        name = girlName;
    }

    document.getElementById("result").innerHTML = "<strong>" + name + "</strong>";

    console.log("girlNameNumber: " + girlNameNumber + "\nboyNameNumber: " + boyNameNumber + "\nlastNameNumber: " + lastNameNumber);

}

/*
function random(max) {
    return Math.floor(Math.random() * max);
}
*/


function randomWeighted(max, weight) {
    return Math.floor(Math.pow(Math.random(), weight) * max);
}
