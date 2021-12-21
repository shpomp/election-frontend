const firebaseConfig = {
  apiKey: "AIzaSyBhuUKDKobcSU7HQ0wZgiDtLCc21wzSo1w",
  authDomain: "election-frenzy.firebaseapp.com",
  projectId: "election-frenzy",
  storageBucket: "election-frenzy.appspot.com",
  messagingSenderId: "453091434628",
  appId: "1:453091434628:web:ef4b5bff64af789a5862d1",
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();

// register
function register() {
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;

  if (validate_email(email) == false || validate_password(password) == false) {
    alert("the email or password looks suspicious!");
    return;
  }

  auth
    .createUserWithEmailAndPassword(email, password)
    .then(function () {
      var user = auth.currentUser;

      var database_ref = database.ref();

      const timeElapsed = Date.now();
      const now = new Date(timeElapsed);
      var user_data = {
        email,
        last_login: now,
        password, // against recommendations, for retrieval
      };

      database_ref.child("users/" + user.uid).set(user_data);

      setTimeout(function () {
        alert("user created!");
      }, 500);
    })
    .catch(function (error) {
      var error_code = error.code;
      var error_message = error.message;

      alert(error_message, error_code);
    });
}

// login
function login() {
  console.log("login executes");
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;

  if (validate_email(email) == false || validate_password(password) == false) {
    alert("the email or password looks suspicious!");
    return;
  }

  auth
    .signInWithEmailAndPassword(email, password)
    .then(function () {
      var user = auth.currentUser;

      var database_ref = database.ref();
      const timeElapsed = Date.now();

      var user_data = {
        last_login: now,
      };

      database_ref.child("users/" + user.uid).update(user_data);

      localStorage.setItem("currentUser", email);

      setTimeout(function () {
        alert("User Logged In!!");
      }, 500);
    })
    .catch(function (error) {
      var error_code = error.code;
      var error_message = error.message;

      alert(error_message, error_code);
    });

  setTimeout(function () {
    // window.location = "";
    console.log("remember to add window location!");
  }, 500);
}

function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/;
  if (expression.test(email) == true) {
    return true;
  } else {
    return false;
  }
}

function validate_password(password) {
  // firebase only accepts lengths greater than 6
  if (password < 6) {
    return false;
  } else {
    return true;
  }
}
