// Function to navigate to the next step
function nextStep(step) {
  // Hide all steps
  document.querySelectorAll('.form-step').forEach(stepDiv => {
    stepDiv.classList.remove('active');
  });

  // Show the next step
  document.getElementById(`step-${step}`).classList.add('active');
}

// Simulate sending an OTP
function sendOTP() {
  alert("OTP sent to your phone. Please check and enter the OTP.");
}

// Simulate email confirmation
function sendConfirmation() {
  alert(
    "Welcome to Vojexi!\n\nVojexi lets you save and transfer money worldwide.\n\nCheck your email for confirmation."
  );
  nextStep(5);
}

// Logout Function
function logout() {
  alert("You have logged out successfully.");
  location.reload(); // Reload the page to go back to the login form
}

// Placeholder functions for account actions
function sendMoney() {
  alert("Feature coming soon: Send Money.");
}

function payBills() {
  alert("Feature coming soon: Pay Bills.");
}

// Activate the first step on page load
document.addEventListener("DOMContentLoaded", () => {
  document.getElement