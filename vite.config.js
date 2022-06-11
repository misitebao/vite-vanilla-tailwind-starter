import path from "path";

import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    createHtmlPlugin({
      // minify: false,
      pages: [
        {
          // entry: "src/main.ts",
          filename: "index.html",
          template: "index.html",
          injectOptions: {
            data: {
              title: "首页",
            },
          },
        },
        {
          filename: "about.html",
          template: "about.html",
          injectOptions: {
            data: {
              title: "关于",
            },
          },
        },
        {
          filename: "404.html",
          template: "404.html",
          injectOptions: {
            data: {
              title: "404",
            },
          },
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
});
