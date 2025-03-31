import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['97a4-196-12-132-136.ngrok-free.app'], // Allow your ngrok domain
  }
});
