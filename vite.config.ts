import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import stylelint from 'vite-plugin-stylelint';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), stylelint()],
});
