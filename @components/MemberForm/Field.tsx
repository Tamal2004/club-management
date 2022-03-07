import React, { useCallback, useEffect, useState } from 'react';
import { useField } from 'formik';
import styled from 'styled-components';
import { Theme } from '@theme/theme';

interface FieldProps {
    isEditing: boolean;
    initialValue: string;
    id: string;
    label: string;
    placeholder: string;
    className?: string; // Overrides
}

const StyledField = styled.div`
    display: grid;
    grid-template-columns: 60rem min-content;
`;

const Label = styled.label`
    font-weight: 700;
    
    ${({ theme }: { theme: Theme }) => theme.typography.body};
`;

const Value = styled.div`
    ${({ theme }: { theme: Theme }) => theme.typography.body};
`;

const Input = styled.input`
    min-width: 120rem;
    padding: 2rem 4rem;
    
    ${({ theme }: { theme: Theme }) => theme.typography.body};
`;

const Field: React.FC<FieldProps> = ({
    isEditing,
    initialValue,
    id,
    className,
    placeholder,
    label
}) => {
    const [{ onChange, value }] = useField(id);

    useEffect(() => {
        onChange(initialValue);
    }, [onChange, initialValue]);

    return (
        <StyledField className={className}>
            <Label htmlFor={id}>{label}</Label>
            {isEditing ? (
                <Input
                    id={id}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            ) : (
                <Value>{value}</Value>
            )}
        </StyledField>
    );
};

export default Field;
