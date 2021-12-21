export default () => {
  const root = document.querySelector(".root");

  return fetch("./pages/home/home.html")
    .then((response) => response.text())
    .then((homeHTML) => {
      root.innerHTML = homeHTML;

      if (localStorage.currentUser) {
        // add logged in user
        let header = document.querySelector(".header");
        let headerUserSpan = document.createElement("span");
        headerUserSpan.innerHTML = "logged in as: " + localStorage.currentUser;
        header.appendChild(headerUserSpan);
        // hide login/register button
        let loginRegisterButton = document.querySelector(
          "#login-register-button"
        );
        loginRegisterButton.style.display = "none";
        // add logout button to header
        let headerLogoutButtonExists = document.getElementById(
          "header-logout-button"
        );
        let headerLogoutButton = headerLogoutButtonExists
          ? document.getElementById("header-logout-button")
          : document.createElement("button");
        headerLogoutButton.innerHTML = "logout";
        headerLogoutButton.setAttribute("id", "header-logout-button");
        headerLogoutButton.addEventListener("click", () => logout());
        header.appendChild(headerLogoutButton);
      }
    });
};
