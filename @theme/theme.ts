import { css } from 'styled-components';

const theme = {
    colors: {
        primary: {
            light: '#4689ED',
            main: '#186CE8',
            dark: '#1356BA'
        },
        secondary: {
            light: '#353D77',
            main: '#020C55',
            dark: '#020A44'
        },
        tertiary: {
            light: '#FA8B6B',
            main: '#F96E46',
            dark: '#C75838'
        },
        grey: { light: '#EEEEEE', main: '#E0E0E0', dark: '#BDBDBD' }
    },
    typography: {
        headline: css`
            font-size: 12rem;
            line-height: 1.25;
            font-weight: 700;
        `,
        mHeadline: css`
            font-size: 6.5rem;
            line-height: 1.31;
            font-weight: 700;
        `,
        navigation: css`
            font-size: 7.75rem;
            line-height: 1.55;
            font-weight: 700;
        `,
        body: css`
            font-size: 6rem;
            line-height: 1.5;
            font-weight: 400;
        `,
        mBody: css`
            font-size: 3.5rem;
            line-height: 1.71;
            font-weight: 400;
        `
    }
};

type Theme = typeof theme;
export type { Theme };
export { theme };
