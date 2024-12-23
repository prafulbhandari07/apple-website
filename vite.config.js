import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [
            "react",
            "react-dom",
            "three",
            "@react-three/fiber",
            "@react-three/drei",
          ],
        },
      },
    },
    chunkSizeWarningLimit: 1500, // Increase the limit (in KB) to suppress the warning
  },
});
