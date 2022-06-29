/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                Loja: '#201942',
                '--glass-blur': '10px',
            },
        },
    },
    daisyui: {
        themes: [
            {
                light: {
                    ...require('daisyui/src/colors/themes')[
                        '[data-theme=light]'
                    ],
                    primary: '#06002A',
                    info: '#0E9AFF',
                    success: '#00A944',
                    error: '#E26C6C',
                    'info-content': '#FFFFFF',
                    '--glass-blur': '15px',
                },
            },
            'dark',
        ],
    },

    plugins: [require('daisyui')],
}
