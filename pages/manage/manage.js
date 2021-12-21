import { renderCandidate } from "../candidates/candidates.js";
import { deleteCandidate } from "./editDeleteCandidate.js";

export default () => {
  const root = document.querySelector(".root");

  fetch("./pages/manage/manage.html")
    .then((response) => response.text())
    .then((manageHTML) => {
      root.innerHTML = manageHTML;

      fetch("http://localhost:9191/candidates")
        .then((response) => response.json())
        .then((data) => {
          let candidatesArray = data;
          let canddidatesTab = document.getElementById("candidates-tab");

          if (candidatesArray && candidatesArray.length > 0) {
            for (let i = 0; i < candidatesArray.length; i++) {
              renderCandidate(candidatesArray[i], canddidatesTab, true);
              let editButton = document.getElementById(
                "edit-candidate" + candidatesArray[i].id
              );
              editButton.addEventListener("click", function () {
                window.location =
                  window.location + `/candidate/${candidatesArray[i].id}`;
              });
              let deleteButton = document.getElementById(
                "delete-candidate" + candidatesArray[i].id
              );
              deleteButton.addEventListener("click", function () {
                deleteCandidate(candidatesArray[i].id);
              });
            }
          } else {
            root.innerHTML = "no data :/";
          }
        });
    });
};
