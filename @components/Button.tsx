import React from 'react';
import { Theme } from '@theme/theme';
import styled, { css } from 'styled-components';

type ButtonProps = JSX.IntrinsicElements['button'] & {
    variant?: 'primary' | 'secondary' | 'tertiary';
};

interface StyledButtonInterface {
    $variant: 'primary' | 'secondary' | 'tertiary';
    $disabled?: boolean;
}

const StyledButton = styled.button<StyledButtonInterface>`
    display: grid;

    justify-content: center;
    align-items: center;

    border-radius: 2rem;

    cursor: pointer;
    white-space: nowrap;
    text-decoration: none;
    user-select: none;
    outline: none;
    transition: all 300ms;

    padding: 2rem 4rem;

    color: white;
    ${({
        theme,
        $variant,
        $disabled = false
    }: {
        theme: Theme;
        $variant: 'primary' | 'secondary' | 'tertiary';
        $disabled?: boolean;
    }) => css`
        background-color: ${theme.colors[$variant].main};
        border-color: ${theme.colors[$variant].main};

        &:hover {
            background-color: ${theme.colors[$variant].light};
            border-color: ${theme.colors[$variant].light};
        }
        &:active {
            background-color: ${theme.colors[$variant].dark};
            border-color: ${theme.colors[$variant].dark};
        }

        ${$disabled &&
        css`
            background-color: ${theme.colors.grey.main};
            border-color: ${theme.colors.grey.main};
            color: black;
            &:hover {
                background-color: ${theme.colors.grey.main};
                border-color: ${theme.colors.grey.main};
            }
            &:active {
                background-color: ${theme.colors.grey.main};
                border-color: ${theme.colors.grey.main};
            }
        `}
    `};

    ${({ theme }: { theme: Theme }) => theme.typography.body};
    pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'initial')};
`;

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    disabled,
    onClick,
    children,
    className
}) => {
    return (
        <StyledButton
            className={className}
            $variant={variant}
            $disabled={disabled}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </StyledButton>
    );
};

export default Button;
