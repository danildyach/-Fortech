let display = document.querySelector(".display");
let buttons = Array.from(document.querySelectorAll(".button"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "AC":
        display.innerText = "0";
        break;
      case "=":
        try {
          display.innerText = Function(`return (${display.innerText})`)();
        } catch (e) {
          display.innerText = "Error!";
        }
        break;
      case "+/-":
        display.innerText = `-${display.innerText}`;
        break;
      case "^":
        let base = parseFloat(display.innerText);
        let exponent = 2;
        let result = Math.pow(base, exponent);
        display.innerText = result.toString();
        break;
      default:
        if (display.innerText === "0" && e.target.innerText !== ".") {
          display.innerText = e.target.innerText;
        } else {
          display.innerText += e.target.innerText;
        }
    }
  });
});
