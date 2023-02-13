import {AnyAction} from 'redux';
import { fetchRandomJsoniesStart,fetchRandomJsonFailed, fetchRandomJsonSuccess
 } from './random-json.action';
import { DataF, RANDOM_JSON_TYPES } from './random-json.types';
import { CartWithProducts } from './random-json.types';

export type RandomJsonState={
    readonly payload:CartWithProducts[];
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
        if(fetchRandomJsoniesStart.match(action))
            return{
                ...state,
                isLoading:true,
            }
        if(fetchRandomJsonSuccess.match(action)){
            return {...state,payload:action.payload}
        }

        if(fetchRandomJsonFailed.match(action)){
            return{...state,error:action.payload}
        }
        return state;
};