function addCandidate(candidate) {
  fetch("http://localhost:9191/candidate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(candidate),
  })
    .then((response) => response.json())
    .then((data) => {
      alert(
        `you submitted canddiate ${candidate.name} ${candidate.lastName} to the  ${candidate.party.name} party`
      );
      console.log("Success!");
      document.getElementById("fname").value = "";
      document.getElementById("lname").value = "";
      document.getElementById("party").value = "none";
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function submitCandidateForm(event) {
  event.preventDefault();
  if (document.getElementById("party").value === "none") {
    return alert("select party!");
  } else if (
    document.getElementById("fname").value === "" ||
    document.getElementById("lname").value === ""
  ) {
    return alert("fill in the form!");
  } else {
    let name = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let party = defineParty(document.getElementById("party").value);
    let candidate = {
      name,
      lastName,
      party,
    };
    addCandidate(candidate);
  }

  console.log("formSubmited");
}

function defineParty(abbrev) {
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
