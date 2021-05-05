const colors = require('tailwindcss/colors');

module.exports = {
    important: true,
    purge: {
        enabled: true,
        content: [
            './src/**/*.scss',
            './src/**/*.pug',
            './src/**/*.js'
        ]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            black: colors.black,
            white: colors.white,
            gray: colors.coolGray,
            red: colors.red,
            yellow: colors.amber,
            green: colors.emerald,
            blue: colors.blue,
            indigo: colors.indigo,
            purple: colors.violet,
            pink: colors.pink,

            main: '#0B102F',
            txmain: '#F2FFFF',
            steel: {
                '50': '#f6fafb',
                '100': '#eaf7f9',
                '200': '#cfeaf3',
                '300': '#abd8ee',
                '400': '#70b5e5',
                '500': '#3d8dd8',
                '600': '#2b69c0',
                '700': '#275299',
                '800': '#213f6e',
                '900': '#192f50',
            },
            plum: {
                '500': '#b673b2',
            }
        },
        spacing: {
            px: '1px',
            '3px': '3px',
            0: '0px',
            0.5: '0.125rem',
            1: '0.25rem',
            1.5: '0.375rem',
            2: '0.5rem',
            2.5: '0.625rem',
            3: '0.75rem',
            3.5: '0.875rem',
            4: '1rem',
            5: '1.25rem',
            6: '1.5rem',
            7: '1.75rem',
            8: '2rem',
            9: '2.25rem',
            10: '2.5rem',
            11: '2.75rem',
            12: '3rem',
            13: '3.25rem',
            14: '3.5rem',
            16: '4rem',
            18: '4.5rem',
            20: '5rem',
            22: '5.5rem',
            24: '6rem',
            28: '7rem',
            32: '8rem',
            36: '9rem',
            40: '10rem',
            44: '11rem',
            48: '12rem',
            52: '13rem',
            56: '14rem',
            60: '15rem',
            64: '16rem',
            72: '18rem',
            80: '20rem',
            96: '24rem',
            98: '26rem',
            'min': 'min-content',
        },
        animation: {
            none: 'none',
            spin: 'spin 1s linear infinite',
            ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
            pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            bounce: 'bounce 1s infinite',
            hidden: 'hidden 1s both',
            appear: 'appear 1s both',
            menuAnimation: 'menuAnimation 1s cubic-bezier(0.23, 1, 0.320, 1) both',
            openPhoneMenu: 'openPhoneMenuAnimation 1s cubic-bezier(0.23, 1, 0.320, 1) both',
            closePhoneMenu: 'closePhoneMenuAnimation 1s cubic-bezier(0.23, 1, 0.320, 1) both',
            burgerElement1: 'animateBurgerElement1 .25s linear both',
            burgerElement3: 'animateBurgerElement3 .25s linear both',
            unAnimateBurgerElement1: 'unAnimateBurgerElement1 .25s linear both',
            unAnimateBurgerElement3: 'unAnimateBurgerElement3 .25s linear both',
            appearBurgerElement2: 'appear .125s linear both',
            hiddenBurgerElement2: 'hidden .125s linear both',
        },
        keyframes: {
            spin: {
                to: {
                    transform: 'rotate(360deg)',
                },
            },
            ping: {
                '75%, 100%': {
                    transform: 'scale(2)',
                    opacity: '0',
                },
            },
            pulse: {
                '50%': {
                    opacity: '.5',
                },
            },
            bounce: {
                '0%, 100%': {
                    transform: 'translateY(-25%)',
                    animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
                },
                '50%': {
                    transform: 'none',
                    animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
                },
            },
            hidden: {
                '0%': {
                    opacity: 1
                },
                '100%': {
                    opacity: 0
                }
            },
            appear: {
                '0%': {
                    opacity: 0
                },
                '100%': {
                    opacity: 1
                }
            },
            menuAnimation: {
                '0%': {
                    transform: 'translateY(-100%)',
                },
                '100%': {
                    transform: 'translateY(0)',
                }
            },
            openPhoneMenuAnimation: {
                '0%': {
                    transform: 'translateX(100%)'
                },
                '100%': {
                    transform: 'translateX(0)',
                }
            },
            closePhoneMenuAnimation: {
                '0%': {
                    transform: 'translateX(0)'
                },
                '100%': {
                    transform: 'translateX(100%)',
                }
            },
            animateBurgerElement1: {
                '0%': {
                    transform: 'translateY(0) rotate(0)'
                },
                '50%': {
                    transform: 'translateY(12.5px) rotate(0)'
                },
                '100%': {
                    transform: 'translateY(12.5px) rotate(45deg)'
                }
            },
            animateBurgerElement3: {
                '0%': {
                    transform: 'translateY(0) rotate(0)'
                },
                '50%': {
                    transform: 'translateY(-12.5px) rotate(0)'
                },
                '100%': {
                    transform: 'translateY(-12.5px) rotate(-45deg)'
                }
            },
            unAnimateBurgerElement1: {
                '0%': {
                    transform: 'translateY(12.5px) rotate(45deg)'
                },
                '50%': {
                    transform: 'translateY(12.5px) rotate(0)'
                },
                '100%': {
                    transform: 'translateY(0) rotate(0)'
                }
            },
            unAnimateBurgerElement3: {
                '0%': {
                    transform: 'translateY(-12.5px) rotate(-45deg)'
                },
                '50%': {
                    transform: 'translateY(-12.5px) rotate(0)'
                },
                '100%': {
                    transform: 'translateY(0) rotate(0)'
                }
            }
        },
        borderWidth: {
            1.5: '1.5px',
            2: '2px',
            3: '3px',
        },
        gridTemplateColumns: {
            '3/4': '75% 25%',
            2: 'repeat(2, minmax(0, 1fr))',
        },
        minHeight: {
            58.5: '58.5px',
        },
        maxWidth: (theme) => ({
            ...theme('spacing'),
            none: 'none',
            0: '0rem',
            18.5: '18.5rem',
            xs: '20rem',
            sm: '24rem',
            md: '28rem',
            lg: '32rem',
            xl: '36rem',
            '2xl': '42rem',
            '3xl': '48rem',
            '4xl': '56rem',
            '5xl': '64rem',
            '6xl': '72rem',
            '7xl': '80rem',
        }),
        fontSize: {
            xxs: ['0.5rem', { lineHeight: '.75rem' }],
            xs: ['0.75rem', { lineHeight: '1rem' }],
            sm: ['0.875rem', { lineHeight: '1.25rem' }],
            base: ['1rem', { lineHeight: '1.5rem' }],
            lg: ['1.125rem', { lineHeight: '1.75rem' }],
            xl: ['1.25rem', { lineHeight: '1.75rem' }],
            '2xl': ['1.5rem', { lineHeight: '2rem' }],
            '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
            '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        },
        width: (theme) => ({
            auto: 'auto',
            ...theme('spacing'),
            '1/2': '50%',
            '1/3': '33.333333%',
            '2/3': '66.666667%',
            '1/4': '25%',
            '2/4': '50%',
            '3/4': '75%',
            '1/5': '20%',
            '2/5': '40%',
            '3/5': '60%',
            '4/5': '80%',
            '1/6': '16.666667%',
            '2/6': '33.333333%',
            '3/6': '50%',
            '4/6': '66.666667%',
            '5/6': '83.333333%',
            '1/12': '8.333333%',
            '2/12': '16.666667%',
            '3/12': '25%',
            '4/12': '33.333333%',
            '5/12': '41.666667%',
            '6/12': '50%',
            '7/12': '58.333333%',
            '8/12': '66.666667%',
            '9/12': '75%',
            '10/12': '83.333333%',
            '11/12': '91.666667%',
            full: '100%',
            screen: '100vw',
            min: 'min-content',
            max: 'max-content',
        }),
        height: (theme) => ({
            auto: 'auto',
            ...theme('spacing'),
            '1/2': '50%',
            '1/3': '33.333333%',
            '2/3': '66.666667%',
            '1/4': '25%',
            '2/4': '50%',
            '3/4': '75%',
            '1/5': '20%',
            '2/5': '40%',
            '3/5': '60%',
            '4/5': '80%',
            '1/6': '16.666667%',
            '2/6': '33.333333%',
            '3/6': '50%',
            '4/6': '66.666667%',
            '5/6': '83.333333%',
            full: '100%',
            screen: '100vh',
        }),
        minWidth: (theme) => ({
            ...theme('spacing'),
            0: '0px',
            full: '100%',
            min: 'min-content',
            max: 'max-content',
        }),
        boxShadow: {
            '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            '3xl': '0 35px 75px -12px rgba(0, 0, 0, 0.25)',
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}