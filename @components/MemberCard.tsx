import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

// Types
import { Member } from '@components/MemberForm/types';
import type { Theme } from '@theme/theme';

const Card = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-template-areas:
        'first avatar'
        'last avatar'
        'phone avatar'
        '. avatar';
    grid-template-columns: 1fr 75rem;
    grid-row-gap: 4rem;

    width: 100%;
    padding: 6rem;
    border-radius: 2rem;

    transition: background-color 300ms;
    cursor: pointer;

    background-color: ${({ theme }: { theme: Theme }) =>
        theme.colors.grey.main};

    &:hover {
        background-color: ${({ theme }: { theme: Theme }) =>
            theme.colors.grey.light};
    }

    &:active {
        background-color: ${({ theme }: { theme: Theme }) =>
            theme.colors.grey.dark};
    }
`;

const Field = styled.div`
    display: grid;
    grid-column-gap: 2rem;
    grid-auto-flow: column;
    grid-template-columns: 60rem min-content;

    margin-left: 6rem;

    &.first {
        grid-area: first;
    }

    &.last {
        grid-area: last;
    }

    &.phone {
        grid-area: phone;
    }
`;

const Label = styled.label`
    font-weight: 700;

    ${({ theme }: { theme: Theme }) => theme.typography.body};
`;

const Value = styled.div`
    ${({ theme }: { theme: Theme }) => theme.typography.body};
`;

const AvatarWrapper = styled.picture`
    grid-area: avatar;

    width: 100%;
    height: 100%;

    border-radius: 2rem;
    overflow: hidden;
`;

const Avatar = styled.img`
    grid-area: avatar;

    width: 100%;
    height: 100%;

    object-fit: cover;
`;

const MemberCard: React.FC<Member> = ({
    firstName,
    lastName,
    phoneNumber,
    avatarUrl,
    id
}) => {
    const router = useRouter();

    const handleClick = useCallback(
        () => router.push(`/member/${id}`),
        [router, id]
    );

    return (
        <Card onClick={handleClick}>
            <Field className='first'>
                <Label>First Name</Label>
                <Value>{firstName}</Value>
            </Field>
            <Field className='last'>
                <Label>Last Name</Label>
                <Value>{lastName}</Value>
            </Field>
            <Field className='phone'>
                <Label>Phone Number</Label>
                <Value>{phoneNumber}</Value>
            </Field>
            <AvatarWrapper>
                <Avatar src={avatarUrl} alt='Avatar image' />
            </AvatarWrapper>
        </Card>
    );
};

export default MemberCard;
