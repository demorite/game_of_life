const c = document.querySelector("canvas");

const ctx     = c.getContext("2d");
let cell_size = 10;
const gutter  = 2.5;

let grid      = [];
window.onload = window.onresize = function () {
	c.height = window.innerHeight;
	c.width  = window.innerWidth;
	for (let h = 0, j = 0; h < window.innerHeight - (gutter + cell_size); h += cell_size + gutter, j++) {
		grid[j] = [];
		for (let w = 0, i = 0; w < window.innerWidth - (gutter + cell_size); w += cell_size + gutter, i++) {
			const bin = Math.floor(Math.random() * 2);
			grid[j].push(bin);
		}
	}
};

function drawGrid() {
	ctx.clearRect(0, 0, c.width, c.height);
	for (let row in grid) {
		for (let column in grid[row]) {
			ctx.beginPath();
			ctx.save();
			ctx.fillStyle = grid[row][column] === 1 ? "#789" : "#123";
			ctx.fillRect(column * (cell_size + gutter), row * (cell_size + gutter), cell_size, cell_size);
			ctx.restore();
			ctx.closePath();
		}
	}
}

function updateCells() {
	const copyGrid = JSON.parse(JSON.stringify(grid));

	for (let y in copyGrid) {
		y = +y;
		for (let x in copyGrid[y]) {
			x = +x;

			let neighbours = 0;

			copyGrid[y - 1] && copyGrid[y - 1][x - 1] === 1 && neighbours++;
			copyGrid[y - 1] && copyGrid[y - 1][x] === 1 && neighbours++;
			copyGrid[y - 1] && copyGrid[y - 1][x + 1] === 1 && neighbours++;

			copyGrid[y] && copyGrid[y][x - 1] === 1 && neighbours++;
			copyGrid[y] && copyGrid[y][x + 1] === 1 && neighbours++;

			copyGrid[y + 1] && copyGrid[y + 1][x - 1] === 1 && neighbours++;
			copyGrid[y + 1] && copyGrid[y + 1][x] === 1 && neighbours++;
			copyGrid[y + 1] && copyGrid[y + 1][x + 1] === 1 && neighbours++;

			if (copyGrid[y][x] === 0 && neighbours === 3)
				grid[y][x] = 1;
			if (copyGrid[y][x] === 1 && (neighbours < 2 || neighbours > 3))
				grid[y][x] = 0;
		}
	}
}

function loop() {
	drawGrid();
	updateCells();
	requestAnimationFrame(loop);
}

window.addEventListener("keypress", e => e.key === "d" && loop());

loop();