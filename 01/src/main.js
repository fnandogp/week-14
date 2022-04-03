console.log("Hello World");

// NAME INPUT
var nameInput = document.getElementById("name");
var nameInputError = document.getElementById("name-error");
nameInput.addEventListener("blur", function (event) {
  const value = event.target.value;
  const error = validateName(value);
  nameInputError.innerText = error;
  nameInputError.className = error ? "" : "hidden";
});

// PASSWORD INPUT
var passwordInput = document.getElementById("password");
var passwordInputError = document.getElementById("password-error");
passwordInput.addEventListener("blur", function (event) {
  const value = event.target.value;
  const error = validatePassword(value);
  passwordInputError.innerText = error;
  passwordInputError.className = error ? "" : "hidden";
});

// CONFIRM PASSWORD INPUT
var confirmPasswordInput = document.getElementById("confirm-password");
// TODO

var form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(form);
  console.log("event:", event.target);
  console.log("formData:", formData.values());
  var nameValue = formData.get("name");
  var nameError = validateName(nameValue);
  console.log("nameError:", nameError);

  var passwordValue = formData.get("password");
  var passwordError = validateName(passwordValue);
  console.log("passwordError:", passwordError);

  if (nameError || passwordError) {
    alert("ERROR! Please complete the form before moving forward.");
  } else {
    alert("Thank you!");
  }
});

// HELPER FUNCTIONS
function validateName(value) {
  console.log("value:", value);
  if (!value) {
    return "name field is required";
  }

  if (value.length < 2) {
    return "name field should be at least two char long";
  }

  if (value.length > 15) {
    return "name field should be up to fifteen char long";
  }

  return "";
}

function validatePassword(value) {
  if (!value) {
    return "password field is required";
  }

  if (value.length < 6) {
    return "password field should be at least six char long";
  }

  if (!value.match(/[0-9]/)) {
    return "password field should contain at least one number";
  }

  if (!value.match(/[A-Z]/)) {
    return "password field should contain at least one uppercase letter";
  }

  if (!value.match(/[a-z]/)) {
    return "password field should contain at least one lowercase letter";
  }

  return "";
}

function validateConfirmPassword(value) {
  // TODO
}
