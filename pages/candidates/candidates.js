export default () => {
  const root = document.querySelector(".root");
  fetch("./pages/candidates/candidates.html")
    .then((response) => response.text())
    .then((profileHTML) => {
      root.innerHTML = profileHTML;
    });
};
