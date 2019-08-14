 // declaration variables
 // array with the names of the 3 weapons 
const tab = ["pierre", "feuille", "ciseaux"];
// object with the link of the 3 weapons images
const objectLink = {
	"pierre" : "img/stone.jpg",
	"feuille" : "img/leaf.jpg",
	"ciseaux" : "img/scissors.jpg"
};
let randomNumber = "",
choiceUser = "",
choiceAI = "",
resultat;

// display the weapon of the winner in the DOM
let imgElt = document.getElementById("ecranDebut");

// select the elements choices and results from the DOM
let spanAiElt = document.getElementById("choiceAIspan"),
spanPlayerElt = document.getElementById("choicePlayerSpan"),
spanResultElt = document.getElementById("resultSpan");

// stock the scores in the DOM
let h1Elt = document.getElementById("resultH1"),
scorePlayerSpanElt = document.getElementById("scorePlayerSpan"),
scoreAISpanElt = document.getElementById("scoreAISpan"),
scoreAI = 0,
scorePlayer = 0;
scorePlayerSpan.textContent = scorePlayer;
scoreAISpanElt.textContent =  scoreAI;

// Attribute a random weapon to the AI
function resetAI() {
	randomNumber = Math.floor(Math.random() * 3);
	choiceAI = tab[randomNumber].toLowerCase();
}

// choice comparison loop
function compareChoix() {
	h1Elt.textContent = "";
	imgElt.src = "";
	switch (choiceUser.toLowerCase()) {
		case "pierre" : {
			if (choiceAI === "feuille") {
				resultat = "Vous avez perdu !!!";
				imgElt.src = objectLink.feuille;
			} else if (choiceAI === "ciseaux") {
				resultat = "Vous avez gagnez !!!"
				imgElt.src = objectLink.pierre;
			} else {
				resultat = "Égalité";
				imgElt.src = objectLink.pierre;
			}
		}
			break;
		case "feuille": {
			if (choiceAI === "ciseaux") {
				resultat = "Vous avez perdu !!!";
				imgElt.src = objectLink.ciseaux;
			} else if (choiceAI === "pierre") {
				resultat = "Vous avez gagnez !!!"
				imgElt.src = objectLink.feuille;
			} else {
				resultat = "Égalité";
				imgElt.src = objectLink.feuille;
			}
		}
			break;
		case "ciseaux": {
			if (choiceAI === "pierre") {
				resultat = "Vous avez perdu !!!";
				imgElt.src = objectLink.pierre;
			} else if (choiceAI === "feuille") {
				resultat = "Vous avez gagnez !!!"
				imgElt.src = objectLink.ciseaux;
			} else {
				resultat = "Égalité";
				imgElt.src = objectLink.ciseaux;
			}
		}
			break;
	}

	// stock the choices and results in the DOM
	spanAiElt.textContent = choiceAI;
	spanPlayerElt.textContent = choiceUser;
	spanResultElt.textContent = resultat;
}

// calculated the score
function scoreCounting() {
    if (resultat === "Vous avez gagnez !!!") {
        scorePlayer++;
        scorePlayerSpan.textContent = scorePlayer;
    } else if (resultat === "Vous avez perdu !!!") {
        scoreAI++;
        scoreAISpanElt.textContent =  scoreAI;
    }
}

// event when the choice is make
const choiceButtonsElts = document.querySelectorAll(".choiceWeapon");
for (let button of choiceButtonsElts) {
	button.addEventListener("click", function() {
		if (this.id === "choixPierre") {
			choiceUser = "Pierre";
		} else if (this.id === "choixFeuille") {
			choiceUser = "Feuille";
		} else if (this.id === "choixCiseaux") {
			choiceUser = "Ciseaux";
		}
		resetAI();
		compareChoix();
		scoreCounting();
	});
}

// on click on the reset button
// set the score to zero
document.getElementById("reset").addEventListener("click", () => {
	choiceAI = "Restart";
	choiceUser = "Restart";
	scoreAI = 0;
	scorePlayer = 0;
	resultat = "### Restart ###";
	h1Elt.textContent = "";

	spanResultElt.textContent = resultat;
	spanAiElt.textContent = choiceAI;
	spanPlayerElt.textContent = choiceUser;
	scorePlayerSpan.textContent = scorePlayer;
	scoreAISpanElt.textContent =  scoreAI;
	imgElt.src = "img/ecran_debut.png";
});