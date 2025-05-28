import vue from "@vitejs/plugin-vue";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist",
    lib: {
      entry: path.resolve(__dirname, "resources/js/field.vue"),
      name: "Nova5ItemsField",
      fileName: () => "field.js",
    },
    rollupOptions: {
      external: ["vue", "@nova"],

      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  plugins: [vue()],
});
