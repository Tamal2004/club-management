import React from 'react';
import styled from 'styled-components';
import NextLink from 'next/link';

// Types
import type { Theme } from '@theme';

const Container = styled.div`
    grid-column: grid-start / grid-end;
    display: flex;
    justify-content: center;

    background-color: ${({ theme }: { theme: Theme }) =>
        theme.colors.grey.light};
`;

const RouteLinks = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;

    column-gap: 6rem;

    height: 24rem;
`;

const StyledLink = styled.a`
    display: grid;
    align-items: center;

    padding: 1.5rem 0;
    border: none;
    background: none;

    text-decoration: none;
    cursor: pointer;
    transition: all 300ms;

    ${({ theme }: { theme: Theme }) => theme.typography.navigation};
    color: ${({ theme }: { theme: Theme }) => theme.colors.primary.main};

    &:hover {
        color: ${({ theme }: { theme: Theme }) => theme.colors.primary.light};
    }

    &:active,
    &:visited {
        color: ${({ theme }: { theme: Theme }) => theme.colors.primary.dark};
    }
`;

const Header = () => {
    return (
        <Container>
            <RouteLinks>
                <NextLink href='/members'>
                    <StyledLink>Members List</StyledLink>
                </NextLink>
                <NextLink href='/member/add'>
                    <StyledLink>Add Member</StyledLink>
                </NextLink>
            </RouteLinks>
        </Container>
    );
};

export default Header;
