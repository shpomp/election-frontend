function showTab(event, tabName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  event.currentTarget.className += " active";
}

function logout() {
  if (confirm("are you sure you want to log out?")) {
    window.localStorage.removeItem("currentUser");
    setTimeout(function () {
      if (window.location.href.indexOf("manage") > -1) {
        setTimeout(function () {
          console.log("bye!");
          window.location = window.location.href.replace("#/manage", "");
        }, 500);
      } else if (window.location.href.indexOf("my") > -1) {
        setTimeout(function () {
          console.log("bye!");
          window.location = window.location.href.replace("#/my", "");
        }, 500);
      } else {
        setTimeout(function () {
          location.reload();
        }, 500);
      }
    }, 500);
  }
}
