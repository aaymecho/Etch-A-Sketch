//start of js

const container = document.querySelector('container')
const grid = document.createElement('div')

const grid_size = 16

const createGrid = (gridSize) => {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const gridItem = document.createElement('div');
      gridItem.classList.add('grid-item');
      gridItem.textContent = `Row ${i + 1}, Column ${j + 1}`;
      container.appendChild(gridItem);
    }
  }
}

createGrid(10)
