import { Eta } from "eta";
import { color, ui } from "../mod.ts";

const eta = new Eta({ views: import.meta.dirname });

export default {
  fetch: (_req: Request) =>
    new Response(
      eta.render("./index.html", {
        color,
        ui,
      }),
      {
        headers: {
          "Content-Type": "text/html; charset=utf-8",
        },
      },
    ),
};
