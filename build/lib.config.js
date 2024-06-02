import { defineConfig } from "vite";
import {resolve} from "path";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "../packages/index.js"),
      name: "JiangUI",
      fileName: (format) => `jiang-ui-${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  plugins: [
    vue({
      include:[/\.vue$/]
    })
  ],
});
