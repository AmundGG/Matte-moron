
let poeng = 0;
let riktigSvar = 5;

function start() {
    document.getElementById("spill").style.display = "block"; // Gab og Chris! ikke bytt noe her, dette gjør at spillet er synelig.
    nyOppgave();
}

function nyOppgave() {
    let tall1 = 3;
    let tall2 = 2;

    riktigSvar = tall1 + tall2;

    document.getElementById("oppgave").innerHTML =
        tall1 + " + " + tall2 + " = ?";

    document.getElementById("epler").innerHTML =
        "3 + 2";

    document.getElementById("melding").innerHTML = "";
}

function svar(tall) { // denne sjekker om svaralternativet er riktig
    if (tall == riktigSvar) {
        poeng++;
        document.getElementById("melding").innerHTML =
            "Riktig!";
    } else {
        document.getElementById("melding").innerHTML =
            "Prøv igjen.";
    }

    document.getElementById("poeng").innerHTML = // teller antall poeng
        "Poeng: " + poeng;
}
