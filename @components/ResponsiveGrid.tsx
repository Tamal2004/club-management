import styled from 'styled-components';

const ResponsiveGrid = styled.main`
    display: grid;
    position: relative;

    /* ----- Desktop ----- */
    grid-template-columns:
        [grid-start]
        1fr
        [content-start]
        1110px
        [content-end]
        1fr
        [grid-end];

    /* ----- Mobile ----- */
    @media screen and (max-width: 959px) {
        grid-template-columns:
            [grid-start]
            1fr
            [content-start]
            565px
            [content-end]
            1fr
            [grid-end];
    }

    @media screen and (max-width: 767px) {
        grid-template-columns:
            [grid-start]
            1fr
            [content-start]
            432px
            [content-end]
            1fr
            [grid-end];
    }

    @media screen and (max-width: 480px) {
        grid-template-columns:
            [grid-start]
            24px
            [content-start]
            1fr
            [content-end]
            24px
            [grid-end];
    }

    @media screen and (max-width: 374px) {
        grid-template-columns:
            [grid-start]
            24px
            [content-start]
            1fr
            [content-end]
            24px
            [grid-end];
    }

    grid-row: 1 / -1;
    grid-column: 1 / -1;

    & > section {
        transition: opacity 300ms;
    }

    &.enter,
    &.exit-active {
        & > section {
            opacity: 0;
        }
    }

    &.exit-active {
        & > section {
            z-index: 15000;
        }
    }
    &.enter {
        & > section {
            transition-duration: 0ms;
        }
    }
`;

export default ResponsiveGrid;
