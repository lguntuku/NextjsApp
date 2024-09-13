import { createReducer, on } from "@ngrx/store"
import { InitialState1111 } from "./counter.state"
import { decrement, increment11, reset } from "./counter.action"


export const _counterReducer = createReducer(InitialState1111,
    on(increment11,(state) => {
        return{
            ...state,
            counter : state.counter + 1 
        }
    }),
    on(decrement,(state) => {
        return{
            ...state,
            counter : state.counter - 1 
        }
    }),
    on(reset,(state) => {
        return{
            ...state,
            counter : 0 
        }
    }),
    )

export function counterReducer(state :any,action :any){
   return _counterReducer(state,action)
}