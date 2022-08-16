import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            '@babel/plugin-transform-react-jsx',
            {
              throwIfNamespace: false, // defaults to true
              runtime: 'automatic', // defaults to classic
              importSource: 'my-react-mono/dist/react', // defaults to react
            },
          ],
        ],
      },
    }),
  ],
});
