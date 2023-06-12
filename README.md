# Issue Reproduction for dnt package

Minimal reproduction of the following issue: https://github.com/denoland/dnt/issues/306

## Failure Case

Run:
```
deno run --allow-env --allow-read --allow-write --allow-net --allow-run ./build_npm.ts
```

## Success Case

Uncomment lines 18 and 19 in [build_npm.ts](./build_npm.ts) and then run:
```
deno run --allow-env --allow-read --allow-write --allow-net --allow-run ./build_npm.ts
```
