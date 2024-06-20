import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // base url match the project name for github page.
  return {
    plugins: [react(), TanStackRouterVite()],
    base: mode === "development" ? "/" : "/hahow-fe-pretest",
  };
});
