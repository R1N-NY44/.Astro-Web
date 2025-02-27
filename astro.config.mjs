// // @ts-check
// import { defineConfig } from 'astro/config';
// import vercel from '@astrojs/vercel';

// import alpinejs from '@astrojs/alpinejs';

// import node from '@astrojs/node';

// import tailwindcss from '@tailwindcss/vite';

// // https://astro.build/config
// export default defineConfig({
//   // Mengaktifkan SSR
//   output: 'server',

//   // Sesuaikan dengan hosting yang kamu pakai
//   adapter: node({
//     mode: 'standalone'
//   }),

//   integrations: [alpinejs()],

//   vite: {
//     plugins: [tailwindcss()]
//   }
// });
// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import alpinejs from '@astrojs/alpinejs';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Output harus 'server' agar bisa menggunakan Serverless Functions di Vercel
  output: 'server',

  // Gunakan adapter vercel untuk serverless
  adapter: vercel(),

  integrations: [alpinejs()],

  vite: {
    plugins: [tailwindcss()]
  }
});
