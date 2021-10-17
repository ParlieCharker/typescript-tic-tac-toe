export type Squares = "X"[] | "O"[] | null[];

export type BoardState = {
  squares: Squares;
  xIsNext: boolean;
};
