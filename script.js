const display = document.getElementById("display");
const buttons = document.querySelectorAll(".number, .operator, .equals");

let currentInput = "";
const secretPIN = "999="; // Secret PIN

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (
      button.classList.contains("number") ||
      button.classList.contains("operator")
    ) {
      currentInput += button.textContent;
      display.textContent = currentInput;
    } else if (button.classList.contains("equals")) {
      currentInput += button.textContent;
      if (currentInput === secretPIN) {
        // SOS Triggered!
        display.textContent = "SOS Activated!"; // Visual feedback
        console.log("SOS TRIGGERED");
        currentInput = "";
        setTimeout(() => {
          display.textContent = "0";
        }, 2000); //Reset display to 0 after 2 seconds.
      } else {
        try {
          display.textContent = eval(currentInput);
          currentInput = display.textContent;
        } catch (error) {
          display.textContent = "Error";
          currentInput = "";
        }
      }
    }
  });
});
