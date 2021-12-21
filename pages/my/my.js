export default () => {
  const root = document.querySelector(".root");

  fetch("./pages/my/my.html")
    .then((response) => response.text())
    .then((myHTML) => {
      root.innerHTML = myHTML;
    });
};
