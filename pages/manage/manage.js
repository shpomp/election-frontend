export default () => {
  const root = document.querySelector(".root");

  fetch("./pages/manage/manage.html")
    .then((response) => response.text())
    .then((manageHTML) => {
      root.innerHTML = manageHTML;

      addCandidate();
    });
};

// POST body from postman
// {
//     "name": "new",
//     "lastName": "politician",
//     "party": {
//         "id": 1,
//         "name": "Socialdemokratiet",
//         "abbreviation": "SD"
//     }
// }

// candidate, partyId;

function addCandidate() {
  const data = {
    name: "new",
    lastName: "politician",
    party: {
      id: 1,
      name: "Socialdemokratiet",
      abbreviation: "SD",
    },
  };

  fetch("http://localhost:9191/candidate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
