import {
  assertType,
  type IsExact,
} from "https://deno.land/std@0.224.0/testing/types.ts";
import { dark, light } from "./ui.ts";

Deno.test('"dark" and "light" have the same structure', function () {
  assertType<IsExact<typeof dark, typeof light>>(true);
});
