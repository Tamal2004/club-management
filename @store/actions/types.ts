import { Action as ReduxAction } from 'redux';
import stringifier from 'postcss/lib/stringifier';

interface ActionWithoutPayload extends ReduxAction<string> {
    type: string;
}

interface Action<T> extends ReduxAction<string> {
    type: string;
    payload: T;
}

export type { Action, ActionWithoutPayload };
