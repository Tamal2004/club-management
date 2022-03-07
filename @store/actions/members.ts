// Types
import type { Action, ActionWithoutPayload } from './types';
import { Member, MemberValues } from '@components/MemberForm/types';

const FETCH_MEMBERS_REQUEST = '@fetch-members-request';

const fetchMembersRequest = (): ActionWithoutPayload => ({
    type: FETCH_MEMBERS_REQUEST
});

const FETCH_MEMBERS_SUCCESS = '@fetch-members-success';

const fetchMembersSuccess = (members: Member[]): Action<Member[]> => ({
    type: FETCH_MEMBERS_SUCCESS,
    payload: members
});

const FETCH_MEMBER_REQUEST = '@fetch-member-request';

const fetchMemberRequest = (id: string): Action<string> => ({
    type: FETCH_MEMBER_REQUEST,
    payload: id
});

const FETCH_MEMBER_SUCCESS = '@fetch-member-success';

const fetchMemberSuccess = (member: Member): Action<Member> => ({
    type: FETCH_MEMBER_SUCCESS,
    payload: member
});

const ADD_MEMBER_REQUEST = '@add-member-request';

const addMemberRequest = (
    member: MemberValues,
    onComplete: () => void
): Action<{ member: MemberValues; onComplete: () => void }> => ({
    type: ADD_MEMBER_REQUEST,
    payload: { member, onComplete }
});

const ADD_MEMBER_SUCCESS = '@add-member-success';

const addMemberSuccess = (member: Member): Action<Member> => ({
    type: ADD_MEMBER_SUCCESS,
    payload: member
});

const UPDATE_MEMBER_REQUEST = '@update-member-request';

const updateMemberRequest = (
    member: Member,
    onComplete: () => void
): Action<{ member: Member; onComplete: () => void }> => ({
    type: UPDATE_MEMBER_REQUEST,
    payload: { member, onComplete }
});

const UPDATE_MEMBER_SUCCESS = '@update-member-success';

const updateMemberSuccess = (member: Member): Action<Member> => ({
    type: UPDATE_MEMBER_SUCCESS,
    payload: member
});

const REMOVE_MEMBER_REQUEST = '@remove-member-request';

const removeMemberRequest = (
    id: string,
    onComplete: () => void
): Action<{ id: string; onComplete: () => void }> => ({
    type: REMOVE_MEMBER_REQUEST,
    payload: { id, onComplete }
});

const REMOVE_MEMBER_SUCCESS = '@remove-member-success';

const removeMemberSuccess = (id: string): Action<string> => ({
    type: REMOVE_MEMBER_SUCCESS,
    payload: id
});

export {
    FETCH_MEMBERS_REQUEST,
    fetchMembersRequest,
    FETCH_MEMBERS_SUCCESS,
    fetchMembersSuccess,
    FETCH_MEMBER_REQUEST,
    fetchMemberRequest,
    FETCH_MEMBER_SUCCESS,
    fetchMemberSuccess,
    ADD_MEMBER_REQUEST,
    addMemberRequest,
    ADD_MEMBER_SUCCESS,
    addMemberSuccess,
    UPDATE_MEMBER_REQUEST,
    updateMemberRequest,
    UPDATE_MEMBER_SUCCESS,
    updateMemberSuccess,
    REMOVE_MEMBER_REQUEST,
    removeMemberRequest,
    REMOVE_MEMBER_SUCCESS,
    removeMemberSuccess
};
