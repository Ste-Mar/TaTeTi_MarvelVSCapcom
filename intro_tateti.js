let charactersSelected = 0;
let iconFirstPlayer = "";
let iconSecondPlayer = "";
let nameCharacter = ["Spiderman", "Magneto", "Chun-Li", "Ken", "Wolverine", "Storm"];



const selectIcon = (id) => {

    if (charactersSelected == 0) {
        iconFirstPlayer = document.getElementById(id).src
        // iconFirstPlayer = "img/" + id + ".gif";
        document.getElementById(id).disabled = true
        sessionStorage.setItem("firstPlayer", iconFirstPlayer);
        charactersSelected++;
        sessionStorage.setItem("nameFirstCharacter", namesCharacteres(id));


    } else if (charactersSelected == 1) {
        iconSecondPlayer = document.getElementById(id).src
        // iconFirstPlayer = "img/" + id + ".gif";
        document.getElementById(id).disabled = true
        sessionStorage.setItem("secondPlayer", iconSecondPlayer);
        charactersSelected++;
        sessionStorage.setItem("nameSecondCharacter", namesCharacteres(id));
        document.getElementById("start").href = "tateti.html";

        for (let i = 1; i < 7; i++) {
            document.getElementById(i).disabled = true
        }
    }




}

const namesCharacteres = (id) => {

    return nameCharacter[id - 1];


}