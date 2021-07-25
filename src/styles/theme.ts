import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        gray: {
            "main": "#FCFCFC"
        },
        purple: {
            "main": "#5D576B"
        },
        pink: {
            "main": "#F7567C"
        },
    },
    fonts: {
        heading: 'Montserrat',
        body: 'Montserrat'
    },
    styles: {
        global: {
            body: {
                bg: 'purple.main',
                color: 'gray.main'
            }
        }
    }
})