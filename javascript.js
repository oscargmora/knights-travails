function createBoard() {
	const array = [];
	for (let i = 0; i < 8; i++) {
		for (let j = 0; j < 8; j++) {
			array.push([i, j]);
		}
	}
	return array;
}

function findIndex(array, board) {
	for (let i = 0; i < board.length; i++) {
		if (array[0] === board[i][0] && array[1] === board[i][1]) {
			return i;
		}
	}
}

function createInfoArr(index, board) {
	const array = [];
	for (let i = 0; i < board.length; i++) {
		const space = {
			distance: null,
			predecessor: null,
		};
		array.push(space);
	}
	array[index].distance = 0;
	return array;
}

function createNeighbors(index, x, y) {
	if (index === 0) return [x + 2, y + 1];
	if (index === 1) return [x + 1, y + 2];
	if (index === 2) return [x - 1, y + 2];
	if (index === 3) return [x - 2, y + 1];
	if (index === 4) return [x - 2, y - 1];
	if (index === 5) return [x - 1, y - 2];
	if (index === 6) return [x + 1, y - 2];
	if (index === 7) return [x + 2, y - 1];
}

function createAdjacentArr(board) {
	const array = [];
	for (let i = 0; i < board.length; i++) {
		const neighbors = [];
		for (let j = 0; j < 8; j++) {
			const neighbor = createNeighbors(j, board[i][0], board[i][1]);
			const neighborIndex = findIndex(neighbor, board);
			if (neighborIndex !== undefined) {
				neighbors.push(neighborIndex);
			}
		}
		array[i] = neighbors;
	}
	return array;
}

function createPath(endObject, infoArr, board, endIndex) {
	const array = [];

	while (endObject.predecessor !== null) {
		array.unshift(board[endObject.predecessor]);
		endObject = infoArr[endObject.predecessor];
	}

	array.push(board[endIndex]);
	return array;
}

function knightsTravails(start, end) {
	const board = createBoard();
	const startIndex = findIndex(start, board);
	const endIndex = findIndex(end, board);
	const infoArr = createInfoArr(startIndex, board);
	const adjArr = createAdjacentArr(board);
	let queue = [startIndex];
	let u;

	while (u !== endIndex) {
		u = queue.shift();

		for (let i = 0; i < adjArr[u].length; i++) {
			queue.push(adjArr[u][i]);
		}

		if (u === endIndex) {
			const path = createPath(infoArr[u], infoArr, board, endIndex);
			console.log(`You made it in ${infoArr[u].distance} moves!`);
			return path;
		}

		queue.forEach((element) => {
			if (infoArr[element].distance === null) {
				infoArr[element].distance = infoArr[u].distance + 1;
				infoArr[element].predecessor = u;
			}
		});
	}
}

console.log(knightsTravails([0, 0], [3, 3]));
