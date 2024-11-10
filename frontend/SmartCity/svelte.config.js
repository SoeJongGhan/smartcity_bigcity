import adapter from '@sveltejs/adapter-vercel';
import { sveltePreprocess } from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: sveltePreprocess(),

    kit: {
        adapter: adapter(),
        paths: {
            base: process.env.NODE_ENV === 'production' ? '/smartCity' : '',  // Замените '/smartCity' на имя вашего репозитория
        },
        appDir: 'src'  // Настройка имени каталога приложения
    }
};

export default config;