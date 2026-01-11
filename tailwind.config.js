/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './public/**/*.html'],
  safelist: [
    'top-28',
    'top-32',
    'top-36',
    'top-40',
    'top-44',
    'top-48',
    'top-52',
    'top-56',
    'top-60',
    'text-sm',
    'text-md',
    'text-lg',
    // Add pattern for dynamic sticky positioning
    {
      pattern: /top-\[(2[0-9]|[3-9][0-9]|1[0-9][0-9])px\]/,
    },
  ],
};
