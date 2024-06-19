export type Color =
  | "white"
  | "black"
  | "blue"
  | "cyan"
  | "green"
  | "magenta"
  | "red"
  | "yellow";

export const normal: Record<Color, string> = {
  white: "#bfc4d2",
  black: "#051525",
  blue: "#8aa8f8",
  cyan: "#94d8ca",
  green: "#b6d976",
  magenta: "#be94e4",
  red: "#e89172",
  yellow: "#f6cd93",
};

export const bright: Record<Color, string> = {
  white: "#ffffff",
  black: "#485869",
  blue: "#6ea5de",
  cyan: "#5ec4a9",
  green: "#67d679",
  magenta: "#7858bb",
  red: "#dd5e56",
  yellow: "#fbeb9f",
};
