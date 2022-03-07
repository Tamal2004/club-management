import {
    FETCH_MEMBER_SUCCESS,
    FETCH_MEMBERS_SUCCESS,
    REMOVE_MEMBER_SUCCESS,
    UPDATE_MEMBER_SUCCESS
} from '@actions/members';

// Types
import { Member } from '@components/MemberForm/types';
import { AnyAction } from 'redux';

interface MembersState {
    members: Member[];
}

const initialState: MembersState = {
    members: []
};

const members = (state = initialState, action: AnyAction): MembersState => {
    switch (action.type) {
        case FETCH_MEMBERS_SUCCESS: {
            const members = action.payload;

            return { ...state, members };
        }
        case FETCH_MEMBER_SUCCESS: {
            const newMember = action.payload as Member;

            const memberExists = state.members.some(
                (member) => member.id === newMember.id
            );

            // If the Member already exists, then update it just in case
            // If not, then add it
            const members = memberExists
                ? state.members.map((member) => {
                      if (member.id === newMember.id) return newMember;
                      else return member;
                  })
                : [...state.members, newMember];

            return { ...state, members };
        }
        case UPDATE_MEMBER_SUCCESS: {
            const updatedMember = action.payload;

            const members = state.members.map((member) => {
                if (member.id === updatedMember.id) return updatedMember;
                else return member;
            });
            return { ...state, members };
        }
        case REMOVE_MEMBER_SUCCESS: {
            const filteredId = action.payload;

            const members = state.members.filter(
                (member) => member.id !== filteredId
            );
            return { ...state, members };
        }
        default: {
            return state;
        }
    }
};

export { members };
