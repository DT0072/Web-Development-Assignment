// For login page
function validateLoginForm() {
  if (document.forms[0].userName.value == "") {
    alert("Username field cannot be empty.");
    return false;
  }

  const email = document.forms[0].userName.value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address (example@domain.com)");
    return false;
  }

  if (document.forms[0].userPassword.value == "") {
    alert("Password field cannot be empty");
    return false;
  }

  alert("Login Successful!");
  return true;
}

// For registration page
function validateRegisterForm() {
  if (document.forms[0].firstName.value == "") {
    alert("Firstname field cannot be empty.");
    return false;
  }
  if (document.forms[0].lastName.value == "") {
    alert("Lastname field cannot be empty.");
    return false;
  }
  if (document.forms[0].userName.value == "") {
    alert("Email field cannot be empty.");
    return false;
  }

  const email = document.forms[0].userName.value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address (example@domain.com)");
    return false;
  }

  if (document.forms[0].userPassword.value == "") {
    alert("Password field cannot be empty");
    return false;
  }
  if (document.forms[0].confirmPassword.value == "") {
    alert("Confirm password field cannot be empty");
    return false;
  }
  if (
    document.forms[0].userPassword.value !==
    document.forms[0].confirmPassword.value
  ) {
    alert("Passwords do not match.");
    return false;
  }
  if (!document.forms[0].terms.checked) {
    alert("Please accept the Terms & Conditions.");
    return false;
  }

  alert("Registration Successful!");
  return true;
}

// For reset password page
function validateResetForm() {
  const userName = document.forms[0].userName.value;
  const newPasswordFields = document.getElementById("newPasswordFields");
  const resetButton = document.getElementById("resetButton");

  if (newPasswordFields.style.display === "none") {
    if (userName === "") {
      alert("Email field cannot be empty.");
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(userName)) {
      alert("Please enter a valid email address (example@domain.com)");
      return false;
    }

    newPasswordFields.style.display = "block";
    resetButton.textContent = "Reset Password";
    return false;
  }

  const newPassword = document.forms[0].newPassword.value;
  const confirmPassword = document.forms[0].confirmPassword.value;

  if (newPassword === "") {
    alert("New password field cannot be empty");
    return false;
  }

  if (confirmPassword === "") {
    alert("Confirm password field cannot be empty");
    return false;
  }

  if (newPassword !== confirmPassword) {
    alert("Passwords do not match.");
    return false;
  }

  alert("Password reset successful!");
  return true;
}
