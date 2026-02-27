import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/<WTF-CapstoneProject-Team41/EnergyWise-frontend>/",
  // optimizeDeps: { include: ['recharts'] }
});
