import { RootState } from "../store"
import { RandomJsonState } from "./random-json.reducer"
import { DataF } from "./random-json.types";
export const selectRandomJson=(state:RootState):RandomJsonState=>state.json;