import { saveEditedCandidate } from "./editDeleteCandidate.js";

export default (id) => {
  const root = document.querySelector(".root");

  console.log(id);
  fetch("./pages/manage/editCandidate.html")
    .then((response) => response.text())
    .then((editCandidateHTML) => {
      root.innerHTML = editCandidateHTML;

      fetch(`http://localhost:9191/candidate/${id}`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          let nameInput = document.getElementById("fname");
          nameInput.value = data.name;
          let lastNameInput = document.getElementById("lname");
          lastNameInput.value = data.lastName;
          let partySelect = document.getElementById("party");
          partySelect.value = data.party.abbreviation;

          let saveEditedCadidateButton = document.getElementById(
            "save-edited-candidate"
          );
          saveEditedCadidateButton.addEventListener("click", function (event) {
            event.preventDefault();
            submitEditedCandidate(id, event);
          });
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
};

function submitEditedCandidate(id) {
  let name = document.getElementById("fname").value;
  let lastName = document.getElementById("lname").value;
  let partySelect = document.getElementById("party").value;
  let party = defineParty(partySelect);
  let body = { id, name, lastName, party };
  saveEditedCandidate(id, body);
}

// repeated code :(
export function defineParty(abbrev) {
  switch (abbrev) {
    case "SD":
      return {
        id: 1,
        name: "Socialdemokratiet",
        abbreviation: "SD",
      };
    case "DKF":
      return {
        id: 2,
        name: "Det konservative Folkeparti",
        abbreviation: "DKF",
      };
    case "SF":
      return {
        id: 3,
        name: "Socialistisk Folkeparti",
        abbreviation: "SF",
      };
    case "DF":
      return {
        id: 4,
        name: "Dansk Folkeparti",
        abbreviation: "DF",
      };
    case "DLP":
      return {
        id: 5,
        name: "Danmarks Liberale Parti",
        abbreviation: "DLP",
      };
    case "DRG":
      return {
        id: 6,
        name: "De Rød-Grønne",
        abbreviation: "DRG",
      };
      defaul: return "";
  }
}
