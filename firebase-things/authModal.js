export default () => {
  const root = document.querySelector(".root");

  return fetch("./firebase-things/authModal.html")
    .then((response) => response.text())
    .then((authModalHTML) => {
      let modalDiv = document.createElement("div");
      modalDiv.innerHTML = authModalHTML;
      console.log("not logged in!");
      root.appendChild(modalDiv);

      var modal = document.getElementById("myModal");
      modal.style.display = "block";
    });
};
