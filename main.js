let size = 16;

function generatePixel(size) {
  const container = document.querySelector(".container");
  for (let column = 0; column < size; column++) {
    const div_container = document.createElement("div");
    div_container.classList.add("div_container");
    container.appendChild(div_container);
    for (let row = 0; row < size; row++) {
      const pixel = document.createElement("div");
      pixel.classList.add(`pixel`);
      pixel.addEventListener('mouseover', () => {
        pixel.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
      }, { once: true });
      div_container.appendChild(pixel);
    }

  }
}


function reset() {
  const container = document.querySelector(".container");
  container.replaceChildren();
  generatePixel(size);

}
//reset button
const reset_button = document.querySelector(".reset");
reset_button.addEventListener("click", () => {
  reset();
})


//resize button
const resize = document.querySelector(".resize");
resize.addEventListener("click", () => {
  size = prompt("Desired value?");
  reset();
})




generatePixel(size);
