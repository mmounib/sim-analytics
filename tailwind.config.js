/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
            },
            colors: {
                brand: {
                    50: '#eef2ff',
                    100: '#e0e7ff',
                    500: '#6366f1',
                    600: '#4f46e5',
                    700: '#4338ca',
                },
                dashboard: {
                    bg: '#f8f9fc',
                    card: '#ffffff',
                    border: '#e5e7eb',
                    title: '#1e293b',
                    subtitle: '#64748b',
                },
            },
        },
    },
    plugins: [],
};
