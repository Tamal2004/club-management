import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import MemberForm from '@components/MemberForm';
import Button from '@components/Button';
import {
    fetchMemberRequest,
    removeMemberRequest,
    updateMemberRequest
} from '@actions/members';

// Types
import type { RootState } from '@store/reducers';
import type { Member, MemberValues } from '@components/MemberForm/types';
import type { Theme } from '@theme';

const Container = styled.div`
    display: grid;

    grid-template-areas:
        'title edit remove'
        'form form form';

    align-items: center;
    grid-column-gap: 4rem;
`;

const Title = styled.h1`
    color: ${({ theme }: { theme: Theme }) => theme.colors.secondary.main};
    ${({ theme }) => theme.typography.headline};
`;

const StyledMemberForm = styled(MemberForm)`
    grid-area: form;
`;

const Member: React.FC = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [isEditing, setIsEditing] = useState(false);

    const { id } = router.query;

    const member = useSelector((state: RootState) =>
        state.members.members.reduce((acm, member: Member) => {
            if (member.id === id) return member;
            else return acm;
        }, null as Member | null)
    );

    const handleEditToggle = useCallback(() => {
        setIsEditing((isEditing) => !isEditing);
    }, [setIsEditing]);

    const handleSubmit = useCallback(
        (values: MemberValues) => {
            dispatch(
                updateMemberRequest({ ...values, id: id as string }, () =>
                    setIsEditing(false)
                )
            );
        },
        [dispatch, setIsEditing, id]
    );

    const handleRemove = useCallback(() => {
        dispatch(
            removeMemberRequest(id as string, () => router.push('/members'))
        );
    }, [dispatch, id, router]);

    useEffect(() => {
        if (id) {
            dispatch(fetchMemberRequest(id as string));
        }
    }, [id, dispatch]);

    return (
        <Container>
            <Title>Member Information</Title>
            {member && (
                <>
                    <Button onClick={handleEditToggle}>
                        {isEditing ? 'Cancel' : 'Edit'}
                    </Button>
                    <Button onClick={handleRemove} variant='tertiary'>
                        Remove
                    </Button>
                    <StyledMemberForm
                        initialValues={member}
                        onSubmit={handleSubmit}
                        onToggle={handleEditToggle}
                        isEditing={isEditing}
                    />
                </>
            )}
        </Container>
    );
};

export default Member;
