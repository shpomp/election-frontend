export function saveEditedCandidate(id, body) {
  fetch(`http://localhost:9191/candidate/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((result) => {
      alert("changes saved!");
      console.log("Success:", result);
      window.location = window.location.href.substring(
        0,
        window.location.href.indexOf("candidate")
      );
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

export function deleteCandidate(id) {
  fetch(`http://localhost:9191/candidate/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((candidate) => {
      if (candidate && Object.keys(candidate).length > 0) {
        if (
          confirm(
            `are you sure you want to delete candidate ${candidate.name} ${candidate.lastName}?`
          )
        ) {
          fetch(`http://localhost:9191/candidate/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => {
              alert(
                `you deleted candidate ${candidate.name} ${candidate.lastName}!`
              );
              window.location = window.location.href.substring(
                0,
                window.location.href.indexOf("candidate")
              );
            })
            .catch((error) => {
              console.error("Error:", error);
            });
          console.log("deleted candidate !");
        } else {
          return;
        }
      } else {
        alert("an error occured! ");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
