export default () => {
  const root = document.querySelector(".root");

  fetch("./pages/parties/parties.html")
    .then((response) => response.text())
    .then((discussionHTML) => {
      root.innerHTML = discussionHTML;
    });
};
