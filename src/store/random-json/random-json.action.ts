import  {createAction, Action,ActionWithPayload,withMatcher} from '../../utils/reducer/reducer.utils';
import { RANDOM_JSON_TYPES, DataF, CartWithProducts } from './random-json.types';

export type FetchRandomJsoniesStart = Action<RANDOM_JSON_TYPES.FETCH_RANDOM_JSON_START>;

export type FetchRandomJsonSuccess =ActionWithPayload<RANDOM_JSON_TYPES.FETCH_RANDOM_JSON_SUCCESS,CartWithProducts[]>;

export type FetchRandomJsonFailed = ActionWithPayload<RANDOM_JSON_TYPES.FETCH_RANDOM_JSON_FAILED,Error>;


export const fetchRandomJsoniesStart=withMatcher(():FetchRandomJsoniesStart=>
    createAction(RANDOM_JSON_TYPES.FETCH_RANDOM_JSON_START));



export const fetchRandomJsonSuccess=withMatcher((payload:CartWithProducts[]):FetchRandomJsonSuccess=>
    createAction(RANDOM_JSON_TYPES.FETCH_RANDOM_JSON_SUCCESS,payload));

export const fetchRandomJsonFailed=withMatcher((error:Error):FetchRandomJsonFailed=>
    createAction(RANDOM_JSON_TYPES.FETCH_RANDOM_JSON_FAILED,error))