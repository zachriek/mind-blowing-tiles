const wrapper = document.getElementById('tiles');

let columns = Math.floor(document.body.clientWidth / 50);
let rows = Math.floor(document.body.clientHeight / 50);

const colors = ['rgb(229, 57, 53)', 'rgb(253, 216, 53)', 'rgb(244, 81, 30)', 'rgb(76, 175, 80)', 'rgb(33, 150, 243)', 'rgb(156, 39, 176)'];

let count = -1;

const handleOnClick = (index) => {
  count = count + 1;
  anime({
    targets: '.tile',
    backgroundColor: colors[count % (colors.length - 1)],
    delay: anime.stagger(50, {
      grid: [columns, rows],
      from: index,
    }),
  });
};

const createTile = (index) => {
  const tile = document.createElement('div');
  tile.classList.add('tile');
  tile.addEventListener('click', () => handleOnClick(index));
  return tile;
};

const createTiles = (quantity) => {
  Array.from(Array(quantity)).map((tile, index) => {
    wrapper.appendChild(createTile(index));
  });
};

createTiles(columns * rows);

const createGrid = () => {
  wrapper.innerHTML = '';

  columns = Math.floor(document.body.clientWidth / 50);
  rows = Math.floor(document.body.clientHeight / 50);

  wrapper.style.setProperty('--columns', columns);
  wrapper.style.setProperty('--rows', rows);

  createTiles(columns * rows);
};

createGrid();

window.addEventListener('resize', createGrid);
