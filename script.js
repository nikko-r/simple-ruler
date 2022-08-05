const root = document.querySelector(":root");
const dpi_x = document.querySelector("#dpi").offsetWidth;
const dpi_y = document.querySelector("#dpi").offsetHeight;
const widthCm = screen.width / dpi_x;
const heightCm = screen.height / dpi_y;
// console.log(widthCm, heightCm);

const leftRuler = document.querySelector(".left-ruler");
const topRuler = document.querySelector(".top-ruler");

const backgroundColorInput = document.querySelector(
    ".color-change__background"
);
const lineColorInput = document.querySelector(".color-change__line");
const textColorInput = document.querySelector(".color-change__text");

const resetColorButton = document.querySelector(".reset-color-button");

const html = `<div class="left-line left-ruler__mm"></div>
<div class="left-line left-ruler__mm"></div>
<div class="left-line left-ruler__mm"></div>
<div class="left-line left-ruler__mm"></div>
<div class="left-line left-ruler__mid"></div>
<div class="left-line left-ruler__mm"></div>
<div class="left-line left-ruler__mm"></div>
<div class="left-line left-ruler__mm"></div>
<div class="left-line left-ruler__mm"></div>`;

for (let i = 0; i < 100; i++) {
    leftRuler.innerHTML += `<div class="left-line left-ruler__cm">${i}</div>
    ${html}`;
    topRuler.innerHTML += `<div class="top-line top-ruler__cm">${i}</div>
    ${html.replaceAll("left", "top")}`;
}
// console.log(leftRuler.innerHTML);

backgroundColorInput.addEventListener("input", (event) => {
    root.style.setProperty("--bg-color", event.currentTarget.value);
});
lineColorInput.addEventListener("input", (event) => {
    root.style.setProperty("--line-color", event.currentTarget.value);
});
textColorInput.addEventListener("input", (event) => {
    root.style.setProperty("--text-color", event.currentTarget.value);
});

resetColorButton.addEventListener("click", () => {
    console.log("click");
    root.style.setProperty("--bg-color", "rgb(0, 132, 255)");
    root.style.setProperty("--line-color", "white");
    root.style.setProperty("--text-color", "white");
    console.dir(backgroundColorInput);
    backgroundColorInput.value = "rgb(0, 132, 255)";
    lineColorInput.value = "white";
    textColorInput.value = "white";
});