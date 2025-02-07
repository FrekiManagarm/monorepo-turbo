// ../frontend/vite.config.ts
import { defineConfig } from "file:///Users/mathieuchambaud/Documents/projects/monorepo/node_modules/.pnpm/vite@5.4.14/node_modules/vite/dist/node/index.js";
import { vitePlugin as remix } from "file:///Users/mathieuchambaud/Documents/projects/monorepo/node_modules/.pnpm/@remix-run+dev@2.15.3_@remix-run+react@2.15.3_@remix-run+serve@2.15.3_typescript@5.7.3_vite@5.4.14/node_modules/@remix-run/dev/dist/index.js";
import { installGlobals } from "file:///Users/mathieuchambaud/Documents/projects/monorepo/node_modules/.pnpm/@remix-run+node@2.15.3_typescript@5.7.3/node_modules/@remix-run/node/dist/index.js";
import tsconfigPaths from "file:///Users/mathieuchambaud/Documents/projects/monorepo/node_modules/.pnpm/vite-tsconfig-paths@4.3.2_typescript@5.7.3_vite@5.4.14/node_modules/vite-tsconfig-paths/dist/index.mjs";
import tailwindcss from "file:///Users/mathieuchambaud/Documents/projects/monorepo/node_modules/.pnpm/tailwindcss@3.4.17/node_modules/tailwindcss/lib/index.js";
import autoprefixer from "file:///Users/mathieuchambaud/Documents/projects/monorepo/node_modules/.pnpm/autoprefixer@10.4.20_postcss@8.5.1/node_modules/autoprefixer/lib/autoprefixer.js";
import { resolve } from "path";
var __vite_injected_original_dirname = "/Users/mathieuchambaud/Documents/projects/monorepo/frontend";
installGlobals();
var vite_config_default = defineConfig({
  plugins: [
    tsconfigPaths(),
    remix({
      serverModuleFormat: "esm",
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true
      }
    })
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcss({
          config: resolve(__vite_injected_original_dirname, "tailwind.config.ts")
        }),
        autoprefixer
      ]
    }
  },
  build: {
    cssMinify: true,
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name][extname]"
      }
    }
  },
  server: {
    port: 3e3
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vZnJvbnRlbmQvdml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbWF0aGlldWNoYW1iYXVkL0RvY3VtZW50cy9wcm9qZWN0cy9tb25vcmVwby9mcm9udGVuZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL21hdGhpZXVjaGFtYmF1ZC9Eb2N1bWVudHMvcHJvamVjdHMvbW9ub3JlcG8vZnJvbnRlbmQvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL21hdGhpZXVjaGFtYmF1ZC9Eb2N1bWVudHMvcHJvamVjdHMvbW9ub3JlcG8vZnJvbnRlbmQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHsgdml0ZVBsdWdpbiBhcyByZW1peCB9IGZyb20gXCJAcmVtaXgtcnVuL2RldlwiO1xuaW1wb3J0IHsgaW5zdGFsbEdsb2JhbHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCI7XG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tIFwidml0ZS10c2NvbmZpZy1wYXRoc1wiO1xuaW1wb3J0IHRhaWx3aW5kY3NzIGZyb20gXCJ0YWlsd2luZGNzc1wiO1xuaW1wb3J0IGF1dG9wcmVmaXhlciBmcm9tIFwiYXV0b3ByZWZpeGVyXCI7XG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcblxuaW5zdGFsbEdsb2JhbHMoKTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHRzY29uZmlnUGF0aHMoKSxcbiAgICByZW1peCh7XG4gICAgICBzZXJ2ZXJNb2R1bGVGb3JtYXQ6IFwiZXNtXCIsXG4gICAgICBmdXR1cmU6IHtcbiAgICAgICAgdjNfZmV0Y2hlclBlcnNpc3Q6IHRydWUsXG4gICAgICAgIHYzX3JlbGF0aXZlU3BsYXRQYXRoOiB0cnVlLFxuICAgICAgICB2M190aHJvd0Fib3J0UmVhc29uOiB0cnVlLFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgY3NzOiB7XG4gICAgcG9zdGNzczoge1xuICAgICAgcGx1Z2luczogW1xuICAgICAgICB0YWlsd2luZGNzcyh7XG4gICAgICAgICAgY29uZmlnOiByZXNvbHZlKF9fZGlybmFtZSwgXCJ0YWlsd2luZC5jb25maWcudHNcIiksXG4gICAgICAgIH0pLFxuICAgICAgICBhdXRvcHJlZml4ZXIsXG4gICAgICBdLFxuICAgIH0sXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgY3NzTWluaWZ5OiB0cnVlLFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBhc3NldEZpbGVOYW1lczogXCJhc3NldHMvW25hbWVdW2V4dG5hbWVdXCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDMwMDAsXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBbVcsU0FBUyxvQkFBb0I7QUFDaFksU0FBUyxjQUFjLGFBQWE7QUFDcEMsU0FBUyxzQkFBc0I7QUFDL0IsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxrQkFBa0I7QUFDekIsU0FBUyxlQUFlO0FBTnhCLElBQU0sbUNBQW1DO0FBUXpDLGVBQWU7QUFFZixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxjQUFjO0FBQUEsSUFDZCxNQUFNO0FBQUEsTUFDSixvQkFBb0I7QUFBQSxNQUNwQixRQUFRO0FBQUEsUUFDTixtQkFBbUI7QUFBQSxRQUNuQixzQkFBc0I7QUFBQSxRQUN0QixxQkFBcUI7QUFBQSxNQUN2QjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILFNBQVM7QUFBQSxNQUNQLFNBQVM7QUFBQSxRQUNQLFlBQVk7QUFBQSxVQUNWLFFBQVEsUUFBUSxrQ0FBVyxvQkFBb0I7QUFBQSxRQUNqRCxDQUFDO0FBQUEsUUFDRDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsV0FBVztBQUFBLElBQ1gsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sZ0JBQWdCO0FBQUEsTUFDbEI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
