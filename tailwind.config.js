/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            'xs': '576px',
            'mxs': {'max':'575.98px'},
            'fxs':{"max":"575.98px"},
            // => @media (min-width: 576px) { ... }

            'sm': '640px',
            'msm': {'max':'639.98px'},
            'fmsm':{"min":"576px","max":"639.98px"},

            // => @media (min-width: 640px) { ... }

            'xsm': '768px',
            'mxsm': {'max':'767.98px'},
            'fxsm':{"min":"640px","max":"767.98px"},
            // => @media (min-width: 768px) { ... }

            'md': '992px',
            // => @media (min-width: 992px) { ... }
            'mmd': {'max':'991.98px'},
            // => @media (max-width: 991.98px) { ... }
            'fmd':{"min":"768px","max":"991.98px"},

            'lg': '1200px',
            'mlg': {'max':'1199.98px'},
            'flg': {"min":"992px",'max':'1199.98px'},
            // => @media (min-width: 1200px) { ... }

            'xl': '1400px',
            // => @media (min-width: 1400px) { ... }
            'mxl': {'max':'1399.98px'},
            'fxl': {"min":"1200px",'max':'1399.98px'},
        },
        fontFamily: {
            gordita: ['var(--font-gordita)',"gordita"]
        },
        extend: {
            spacing: {
                '0.5': '0.5rem',
                '1': '1rem',
                '1.5': '1.5rem',
                '2': '2rem',
                '2.5': '2.5rem',
                '3': '3rem',
                '3.5': '3.5rem',
            }
        },
    },
    plugins: [],
}
