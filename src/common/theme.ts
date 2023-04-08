import { createTheme, responsiveFontSizes, Theme, ThemeOptions, } from '@mui/material/styles'
import { Roboto } from 'next/font/google'

const fontFamily = Roboto({ weight: ['400', '500', '700'], subsets: ['latin'] })
const fontFamilyName = fontFamily.style.fontFamily

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: true;
        xm: true;
        sm: true;
        sd: true;
        md: true;
        lg: true;
        xl: true;
    }
}

export const themeOptions: ThemeOptions = {
    palette: {
        mode: 'dark',
        primary: {
            main: '#9F86C0',
            light: "#5E548E",
            dark: '#231942',
        },
        secondary: {
            main: '#BE95C4',
            dark: '#E0B1CB',
            light: '#fff'
        },
        background: {
            default: '#000000',
        },
    },
    components: {
        MuiLink: {
            defaultProps: {
                underline: 'none',
            },
        },
        MuiMenu: {
            styleOverrides: {
                root: {
                    "& .MuiPaper-root": {
                        backgroundColor: '#5E548E'
                    }
                }
            }
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: '#5E548E'
                },
                arrow: {
                    color: '#5E548E'
                },
            }
        },
        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },
            styleOverrides: {
                root: {
                    lineHeight: 1.5,
                    borderWidth: 4,
                },
                textPrimary: {
                    color: '#ffffff',
                },
            },
        },
    },
    typography: {
        h1: { fontFamilyName },
        h2: { fontFamilyName },
        h3: { fontFamilyName },
        h4: { fontFamilyName },
        h5: { fontFamilyName },
        h6: { fontFamilyName },
        subtitle1: { fontFamilyName },
        subtitle2: { fontFamilyName },
        body1: {
            fontSize: '0.875rem',
            lineHeight: '1.43',
            letterSpacing: '0.01071em',
            fontFamilyName,
        },
        body2: { fontFamilyName },
        button: { fontFamilyName, textTransform: 'initial' },
    },
    // use this approach for any spacing (padding,gap,width,height,) when you want to use rem(px) as measurment
    // spacing(1) means 0.5 rem = 8px
    spacing: (factor: number) => `${0.5 * factor}rem`,
    breakpoints: {
        values: {
            xs: 0,
            xm: 450,
            sm: 600,
            sd: 800,
            md: 900,
            lg: 1000,
            xl: 1536,
        },
    },
}

const theme: Theme = createTheme(themeOptions)
const materialTheme = responsiveFontSizes(theme)

export default materialTheme