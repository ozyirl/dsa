type Point = { x: number; y: number };

const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function walk(
  maze: string[],
  wall: string,
  curr: Point,
  end: Point,
  seen: boolean[][],
  path: Point[]
): boolean {
  // out of bounds
  if (
    curr.x < 0 ||
    curr.x >= maze[0].length ||
    curr.y < 0 ||
    curr.y >= maze.length
  )
    return false;

  // wall
  if (maze[curr.y][curr.x] === wall) return false;

  // reached end
  if (curr.x === end.x && curr.y === end.y) {
    path.push(curr);
    return true;
  }

  // seen
  if (seen[curr.y][curr.x]) return false;

  // mark & explore
  seen[curr.y][curr.x] = true;
  path.push(curr);

  for (let i = 0; i < dir.length; i++) {
    const [dx, dy] = dir[i];
    if (walk(maze, wall, { x: curr.x + dx, y: curr.y + dy }, end, seen, path)) {
      return true;
    }
  }

  // backtrack
  path.pop();
  return false;
}

export default function solve(
  maze: string[],
  wall: string,
  start: Point,
  end: Point
): Point[] {
  const seen: boolean[][] = Array.from({ length: maze.length }, () =>
    Array(maze[0].length).fill(false)
  );
  const path: Point[] = [];
  return walk(maze, wall, start, end, seen, path) ? path : [];
}

const maze = [
  "xxxxxxxxxxx x",
  "x         x x",
  "x         x x",
  "x xxxxxxxxx x",
  "x           x",
  "x xxxxxxxxx x",
];

const start = { x: 11, y: 0 }; // opening at top
const end = { x: 1, y: 5 }; // opening at bottom
const wall = "x";

console.log(solve(maze, wall, start, end));
