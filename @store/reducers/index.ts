import { combineReducers } from 'redux';
import { members } from './members';

const reducer = combineReducers({
    members
});

type RootState = ReturnType<typeof reducer>;

export type { RootState };
export { reducer };
