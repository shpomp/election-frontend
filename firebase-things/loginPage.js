export default () => {
  const root = document.querySelector(".root");

  return fetch("./firebase-things/login.html")
    .then((response) => response.text())
    .then((loginHTML) => {
      root.innerHTML = loginHTML;
    });
};
