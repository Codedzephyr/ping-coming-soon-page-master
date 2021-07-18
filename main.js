const EmailBorder = document.getElementById("email");
const ErrorMessage = document.getElementById("paragraph2");
const EmptyMessage = document.getElementById("paragraph3");

function PerformCheck() {
  email = document.getElementById("email").value;
  ErrorMessage.style.display = "none";
  EmptyMessage.style.display = "none";
  EmailBorder.style.borderColor = "#ccc";

  var regex =
    /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;

  if (regex.test(email) === false) {
    ErrorMessage.style.display = "block";
    EmailBorder.style.borderColor = " hsl(354, 100%, 66%)";
  }

  if (email == "" || email == null) {
    EmptyMessage.style.display = "block";
    ErrorMessage.style.display = "none";
    EmailBorder.style.borderColor = " hsl(354, 100%, 66%)";
    return;
  }
}
