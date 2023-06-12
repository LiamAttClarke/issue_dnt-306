import { build, emptyDir } from "dnt/mod.ts";

await emptyDir("./npm");

await build({
  entryPoints: ["./src/mod.ts"],
  outDir: "./npm",
  importMap: "deno.json",
  shims: {
    deno: true,
  },
  package: {
    name: "issue_dnt-306",
    version: Deno.args[0],    
  },
  postBuild() {            
    // Delete unwanted node_modules outputs    
    // Deno.removeSync("npm/esm/node_modules", { recursive: true });
    // Deno.removeSync("npm/script/node_modules", { recursive: true });
  },
});
