import  {createAction, Action,ActionWithPayload,withMatcher} from '../../utils/reducer/reducer.utils';
import { RANDOM_JSON_TYPES, RandomJsonType } from './random-json.types';

export type FetchRandomJsoniesStart = Action<RANDOM_JSON_TYPES.FETCH_RANDOM_JSON_LOADING>;

export type FetchRandomJsonSuccess =ActionWithPayload<RANDOM_JSON_TYPES.FETCH_RANDOM_JSON_SUCCESS,RandomJsonType[]>;

export type FetchRandomJsonFailed = ActionWithPayload<RANDOM_JSON_TYPES.FETCH_RANDOM_JSON_FAILED,Error>;