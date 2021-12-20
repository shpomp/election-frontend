import renderHome from "./pages/home/home.js";
import renderCandidates from "./pages/candidates/candidates.js";
import renderManage from "./pages/manage/manage.js";
import renderParties from "./pages/parties/parties.js";
import renderMy from "./pages/my/my.js";
import renderLogin from "./firebase-things/loginPage.js";
import renderModal from "./firebase-things/authModal.js";
import renderLOL from "./pages/lol/lol.js";

(function routerFunction() {
  const router = new Navigo("/", { hash: true });
  let fauth = firebase.auth();

  router
    .on({
      "/": () => {
        renderHome().then(router.updatePageLinks);
      },
      "/my": () => {
        if (
          fauth.currentUser === null ||
          localStorage.currentUser == undefined
        ) {
          renderHome().then(router.updatePageLinks);
          setTimeout(function () {
            renderModal();
          }, 500);
        } else {
          renderMy();
        }
      },
      "/parties": () => {
        renderParties();
      },
      "/candidates": () => {
        renderCandidates();
      },
      "/manage": () => {
        renderManage();
        // if (
        //   fauth.currentUser === null ||
        //   localStorage.currentUser == undefined
        // ) {
        //   renderHome().then(router.updatePageLinks);
        //   setTimeout(function () {
        //     renderModal();
        //   }, 500);
        // } else {
        //   renderManage();
        // }
      },
      "/login": () => {
        renderLogin();
      },
      "/lol": () => {
        renderLOL();
      },
    })
    .resolve();
})();
