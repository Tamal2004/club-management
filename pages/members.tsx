import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMembersRequest } from '@actions/members';
import MemberCard from '@components/MemberCard';
//
import type { RootState } from '@store/reducers';
import { Theme } from '@theme/theme';

const Title = styled.h1`
    color: ${({ theme }: { theme: Theme }) => theme.colors.secondary.main};
    ${({ theme }) => theme.typography.headline};
`;

const MembersList = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    grid-row-gap: 8rem;
`;

const NoResultsFound = styled.h3`
    ${({ theme }: { theme: Theme }) => theme.typography.body};
`;

const Members: React.FC = () => {
    const dispatch = useDispatch();
    const members = useSelector((state: RootState) => state.members.members);

    useEffect(() => {
        dispatch(fetchMembersRequest());
    }, [dispatch]);

    return (
        <div>
            <Title>Members List</Title>
            <MembersList>
                {members.length ? (
                    members.map(
                        ({
                            firstName,
                            lastName,
                            phoneNumber,
                            avatarUrl,
                            id
                        }) => (
                            <MemberCard
                                key={id}
                                firstName={firstName}
                                lastName={lastName}
                                phoneNumber={phoneNumber}
                                avatarUrl={avatarUrl}
                                id={id}
                            />
                        )
                    )
                ) : (
                    <NoResultsFound>No results found</NoResultsFound>
                )}
            </MembersList>
        </div>
    );
};

export default Members;
