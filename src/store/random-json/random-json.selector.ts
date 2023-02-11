import { RootState } from "../store"
import { RandomJsonState } from "./random-json.reducer"
export const selectRandomJsonReducer=(state:RootState):RandomJsonState=>state.json;