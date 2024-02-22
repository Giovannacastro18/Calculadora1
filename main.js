const diplay = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.id === "=") {
            diplay.value = eval(display.value);


        } else if (btn.id === "ac") {
            display.value = "";
        } else if (btn.id === "de") {
            diplay.value = display.value.slice(0, -1)
        } else {
            display.value += btn.id;
        }
    })
})

