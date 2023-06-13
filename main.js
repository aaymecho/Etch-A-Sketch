function generatePixel(size) {
  const container = document.querySelector(".container");

  for (let column = 0; column < size; column++) {
    const div_container = document.createElement("div");
    div_container.classList.add("div_container");
    container.appendChild(div_container);
    for (let row = 0; row < size; row++) {
      const pixel = document.createElement("div");
      pixel.classList.add("pixel");
      div_container.appendChild(pixel);
    }
  }
}

generatePixel(100);
