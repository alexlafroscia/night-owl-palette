import { Eta } from "eta";
import { color, ui } from "../mod.ts";

const eta = new Eta({ views: import.meta.dirname });

const contents = eta.render("./index.html", {
  color,
  ui,
});

const encoder = new TextEncoder();
const data = encoder.encode(contents);

await Deno.mkdir("./public", { recursive: true });
await Deno.writeFile("./public/index.html", data);
