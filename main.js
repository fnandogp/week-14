console.log("Hello World");

var form = document.getElementById("name");
console.log("form:", form);

var submitButton = document.getElementById("submit");
console.log("submitButton:", submitButton);

submitButton.onclick = function (event) {
  event.preventDefault();
  console.log("event:", event);

  form.submit();
};
