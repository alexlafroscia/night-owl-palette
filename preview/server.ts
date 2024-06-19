import { Eta } from "eta";
import { color } from "../mod.ts";

const eta = new Eta({ views: import.meta.dirname });

export default {
  fetch: (_req: Request) =>
    new Response(
      eta.render("./index.html", {
        color,
      }),
      {
        headers: {
          "Content-Type": "text/html; charset=utf-8",
        },
      },
    ),
};
