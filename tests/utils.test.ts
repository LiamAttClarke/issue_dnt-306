import { assert } from "std/testing/asserts.ts";
import * as svgTransformParser from "ya-svg-transform";

Deno.test("imports ya-svg-transform successfully", () => {
  assert(svgTransformParser);
});

