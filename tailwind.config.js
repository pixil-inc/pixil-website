/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: [
    // Dynamic sticky positioning for ScrollCard component
    // Generated: top-(id * 8 + 20) where id ranges 1-5
    'top-28', // id=1: 1*8+20=28
    'top-36', // id=2: 2*8+20=36
    'top-44', // id=3: 3*8+20=44
    'top-52', // id=4: 4*8+20=52
    'top-60', // id=5: 5*8+20=60
  ],
};
