// بناء نسخة الأندرويد: ملفات ثابتة تعمل داخل التطبيق دون خادم ولا إنترنت.
// الطلبات والمساعد الذكي تُرسل إلى الموقع المنشور عند توفر الإنترنت.
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  build: { outDir: "dist-android" },
  define: {
    "import.meta.env.VITE_CLOUD_ORIGIN": JSON.stringify(
      process.env.CLOUD_ORIGIN || "https://hsolar.lovable.app",
    ),
  },
  resolve: {
    dedupe: ["react", "react-dom", "@tanstack/react-router", "@tanstack/react-start"],
  },
  plugins: [
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tailwindcss(),
    tanstackStart({ spa: { enabled: true } }),
    viteReact(),
  ],
});
