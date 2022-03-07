import { call, put, takeEvery } from 'redux-saga/effects';
import { v4 as uuid } from 'uuid';

import {
    ADD_MEMBER_REQUEST,
    addMemberRequest,
    addMemberSuccess,
    FETCH_MEMBER_REQUEST,
    FETCH_MEMBERS_REQUEST,
    fetchMemberRequest,
    fetchMembersSuccess,
    fetchMemberSuccess,
    REMOVE_MEMBER_REQUEST,
    removeMemberRequest,
    removeMemberSuccess,
    UPDATE_MEMBER_REQUEST,
    updateMemberRequest,
    updateMemberSuccess
} from '@actions/members';
import { Member, MemberValues } from '@components/MemberForm/types';

const fetchMembersMockRequest = async () => {
    return JSON.parse(localStorage.getItem('members') ?? '[]');
};

const fetchMembersWorker = function* () {
    const members: Member[] = yield call(fetchMembersMockRequest);

    yield put(fetchMembersSuccess(members));
};

const fetchMemberMockRequest = async (id: string) => {
    const members: Member[] = JSON.parse(
        localStorage.getItem('members') ?? '[]'
    );

    const [member] = members.filter((member) => member.id === id);
    return member;
};

const fetchMemberWorker = function* ({
    payload: id
}: ReturnType<typeof fetchMemberRequest>) {
    const member: Member = yield call(fetchMemberMockRequest, id);

    yield put(fetchMemberSuccess(member));
};

const addMemberMockRequest = async (member: MemberValues) => {
    const members: Member[] = JSON.parse(
        localStorage.getItem('members') ?? '[]'
    );

    const uniqueMember: Member = { id: uuid(), ...member };

    localStorage.setItem('members', JSON.stringify([...members, uniqueMember]));

    return uniqueMember;
};

const addMemberRequestWorker = function* ({
    payload: { member, onComplete }
}: ReturnType<typeof addMemberRequest>) {
    const responseMember: Member = yield call(addMemberMockRequest, member);

    yield put(addMemberSuccess(responseMember));

    onComplete();
};

const updateMemberMockRequest = async (updatedMember: Member) => {
    const members: Member[] = JSON.parse(
        localStorage.getItem('members') ?? '[]'
    );

    const updatedMembers = members.map((member) => {
        if (member.id === updatedMember.id) return updatedMember;
        else return member;
    });

    localStorage.setItem('members', JSON.stringify(updatedMembers));

    return updatedMember;
};

const updateMemberRequestWorker = function* ({
    payload: { member, onComplete }
}: ReturnType<typeof updateMemberRequest>) {
    const updatedMember: Member = yield call(updateMemberMockRequest, member);

    yield put(updateMemberSuccess(updatedMember));

    onComplete();
};

const removeMemberMockRequest = (id: string) => {
    const members: Member[] = JSON.parse(
        localStorage.getItem('members') ?? '[]'
    );

    const filteredMembers = members.filter((member) => member.id !== id);

    localStorage.setItem('members', JSON.stringify(filteredMembers));

    return id;
};

const removeMemberRequestWorker = function* ({
    payload: { id, onComplete }
}: ReturnType<typeof removeMemberRequest>) {
    console.log('id', id);
    const filteredId: string = yield call(removeMemberMockRequest, id);

    yield put(removeMemberSuccess(filteredId));

    onComplete();
};

const membersSaga = function* () {
    yield takeEvery(FETCH_MEMBERS_REQUEST, fetchMembersWorker);
    yield takeEvery(FETCH_MEMBER_REQUEST, fetchMemberWorker);
    yield takeEvery(ADD_MEMBER_REQUEST, addMemberRequestWorker);
    yield takeEvery(UPDATE_MEMBER_REQUEST, updateMemberRequestWorker);
    yield takeEvery(REMOVE_MEMBER_REQUEST, removeMemberRequestWorker);
};

export { membersSaga };
