import { defineConfig } from "tsdown"

export default defineConfig({
    dts: {
        resolve: true,
    },
    entry: ["./src/index.ts"],
    format: ["esm", "cjs"],
    minify: true,
    sourcemap: true,
})
