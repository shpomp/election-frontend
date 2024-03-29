export default () => {
  const root = document.querySelector(".root");
  fetch("./pages/candidates/candidates.html")
    .then((response) => response.text())
    .then((candidatesHTML) => {
      root.innerHTML = candidatesHTML;

      // http://localhost:9191/candidates

      fetch("http://localhost:9191/candidates")
        .then((response) => response.json())
        .then((data) => {
          let candidatesArray = data;
          let tabs = document.getElementsByClassName("tab-content");
          let ALLtab = document
            .getElementById("all")
            .getElementsByClassName("party-tab")[0];

          // outer loop iterates through the fetched candidates
          // inner loop iterates through party-tabs and renders candidates to respective party-tab
          if (candidatesArray && candidatesArray.length > 0) {
            for (let i = 0; i < candidatesArray.length; i++) {
              renderCandidate(candidatesArray[i], ALLtab, false);

              for (let j = 0; j < tabs.length; j++) {
                let currentPartyTab =
                  tabs[j].getElementsByClassName("party-tab")[0];
                if (candidatesArray[i].party.abbreviation === tabs[j].id) {
                  renderCandidate(candidatesArray[i], currentPartyTab, false);
                }
              }
            }
          } else {
            root.innerHTML = "no data :/";
          }
        });
    });
};

export function renderCandidate(candidate, parentElement, manage) {
  let name = candidate.name + " " + candidate.lastName;
  let partyAbbrev = candidate.party.abbreviation;

  let candidateDiv = document.createElement("div");
  let candidateIMG = document.createElement("img");
  let candidateNameH3 = document.createElement("h3");
  let candidatePartySpan = document.createElement("span");

  candidateDiv.setAttribute("class", "candidate-div");
  candidateIMG.style.width = "10vw";
  candidateIMG.setAttribute("src", "./utils/generic_avatar.png");
  candidateNameH3.innerHTML = name;
  candidatePartySpan.innerHTML = partyAbbrev;

  if (manage) {
    let editButton = document.createElement("button");
    editButton.setAttribute("class", "edit-delete-button");
    editButton.setAttribute("id", "edit-candidate" + candidate.id);

    editButton.innerHTML = `edit`;

    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "edit-delete-button");
    deleteButton.setAttribute("id", "delete-candidate" + candidate.id);

    deleteButton.innerHTML = `delete`;

    candidateDiv.append(editButton, deleteButton);
  }

  candidateDiv.append(candidateIMG, candidateNameH3, candidatePartySpan);
  parentElement.appendChild(candidateDiv);
}
