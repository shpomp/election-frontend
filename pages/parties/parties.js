export default () => {
  const root = document.querySelector(".root");

  fetch("./pages/parties/parties.html")
    .then((response) => response.text())
    .then((partiesHTML) => {
      root.innerHTML = partiesHTML;
      const partiesDiv = document.getElementById("parties");
      fetch("http://localhost:9191/parties")
        .then((response) => response.json())
        .then((parties) => {
          console.log(parties);
          for (let i = 0; i < parties.length; i++) {
            renderParty(parties[i], partiesDiv);
          }
        });
    });
};

function renderParty(party, parentElement) {
  let name = party.name;
  let partyAbbrev = party.abbreviation;

  let partyDiv = document.createElement("div");
  let partyHeadDiv = document.createElement("div");
  let partyLogo = document.createElement("img");
  let partyName = document.createElement("h3");
  let partySpan = document.createElement("span");
  let partyDescription = document.createElement("p");

  partyDiv.setAttribute("class", "party-div");
  partyLogo.setAttribute("src", "./utils/generic_logo.png");
  partyName.innerHTML = name;
  partySpan.innerHTML = partyAbbrev;
  partyDescription.innerText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec felis justo. Vivamus ut quam erat. Maecenas sagittis consectetur placerat. Nam libero est, accumsan nec leo vitae, finibus congue diam. Donec vitae urna non neque euismod imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar finibus quam, eu auctor ipsum feugiat et. Suspendisse eu tristique neque, ut bibendum nibh. Duis convallis posuere tellus, sed cursus lectus aliquam ut.";
  partyHeadDiv.append(partyLogo, partyName, partySpan);
  partyDiv.append(partyHeadDiv, partyDescription);
  parentElement.appendChild(partyDiv);
}
