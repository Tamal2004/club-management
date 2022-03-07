import { css } from 'styled-components';

import { composeFontSize } from '@libs/theme';


const rootStyle = css`
    html {
        padding: 0;
        margin: 0;
        box-sizing: border-box;

        font-family: Inter, Arial, Helvetica, sans-serif;
        font-size: 4px; // Base desktop token (rem)

        /* ----- Desktop ----- */
        @media screen and (max-width: 1279px) {
            font-size: ${composeFontSize({
                scaleMax: 100,
                scaleMin: 75,
                priorityWidth: 1080,
                precision: 4,
                widthMax: 1280,
                widthMin: 960
            })};
        }

        /* ----- Mobile ----- */
        @media screen and (max-width: 959px) {
            font-size: 4.8px;
        }

        @media screen and (max-width: 767px) and (orientation: landscape) {
            font-size: 4px;
        }

        @media screen and (max-width: 767px) and (orientation: portrait) {
            font-size: ${composeFontSize({
                scaleMax: 120,
                scaleMin: 100,
                priorityWidth: 600,
                widthMax: 768,
                widthMin: 480
            })};
        }

        @media screen and (max-width: 480px) {
            font-size: 4px; // Base mobile token
        }

        @media screen and (max-width: 374px) {
            font-size: ${composeFontSize({
                scaleMax: 100,
                scaleMin: 80,
                priorityWidth: 360,
                widthMax: 375,
                widthMin: 240
            })};
        }
    }

    body {
        margin: 0;
        min-height: 100vh;
    }

    *,
    *::after,
    *::before {
        box-sizing: inherit;
        color: black;

        // Prevents highlight for mobile devices (except Safari)
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

        // Prevents highlight for mobile Safari devices
        // Narrowed to focused pseudo states
        &:focus,
        &:visited,
        &:active {
            outline: none;
        }
    }
    :root {
    }
    ::placeholder {
        /* Standard Pseudo-class */
        color: #9E9E9E;
    }
`;

export default rootStyle;
