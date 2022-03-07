import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import MemberForm from '@components/MemberForm';
import { addMemberRequest } from '@actions/members';
import { MemberValues } from '@components/MemberForm/types';
import { useRouter } from 'next/router';
import { Theme } from '@theme/theme';


const Title = styled.h1`
    color: ${({ theme }: { theme: Theme }) => theme.colors.secondary.main};
    ${({ theme }) => theme.typography.headline};
`;

const AddMember: React.FC = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const handleSubmit = useCallback(
        (values: MemberValues) => {
            dispatch(addMemberRequest(values, () => router.push('/members')));
        },
        [router, dispatch]
    );

    return (
        <div>
            <Title>Add Member</Title>
            <MemberForm
                initialValues={{
                    firstName: '',
                    lastName: '',
                    phoneNumber: '',
                    avatarUrl: ''
                }}
                onSubmit={handleSubmit}
                isEditing={true}
            />
        </div>
    );
};

export default AddMember;
