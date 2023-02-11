import {AnyAction} from 'redux';

export type RandomJsonState={
    readonly payload:[];
    readonly isLoading:boolean;
    readonly error:Error| null;
};
export const RANDOM_JSON_INITIAL_STATE:RandomJsonState={
    payload:[],
    isLoading:false,
    error:null,
};

export const randomJsonReducer=(state=RANDOM_JSON_INITIAL_STATE,
    action={}as  AnyAction):RandomJsonState=>{

        return state;
};