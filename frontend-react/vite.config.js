import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import dotenv from 'dotenv'
// import { json } from 'stream/consumers';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Define environment variables
    VITE_SANITY_PROJECT_ID: JSON.stringify(process.env.VITE_SANITY_PROJECT_ID),
    VITE_SANITY_TOKEN: JSON.stringify(process.env.VITE_SANITY_TOKEN),

    // VITE_BASE_URL: import.meta.env.VITE_SANITY_TOKEN,
  },
});
