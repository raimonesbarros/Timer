import { produce } from "immer";
import { ActionTypes } from "./actions";

export interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

interface CycleState {
  cycles: Cycle[];
  activeCycleId: string | null;
}

export function cyclesReducer(state: CycleState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE:
      return produce(state, draft => {
        draft.cycles.unshift(action.payload.newCycle)
        draft.activeCycleId = action.payload.newCycle.id
      })

    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED:
      return produce(state, draft => {
        const currentCycleIndex = state.cycles.findIndex(cycle => {
          return cycle.id === state.activeCycleId
        })

        if(currentCycleIndex < 0) return state

        draft.cycles[currentCycleIndex].finishedDate = new Date()
        draft.activeCycleId = null
      })
    case ActionTypes.INTERRUPT_CURRENT_CYCLE:
      return produce(state, draft => {
        const currentCycleIndex = state.cycles.findIndex(cycle => {
          return cycle.id === state.activeCycleId
        })

        if(currentCycleIndex < 0) return state

        draft.cycles[currentCycleIndex].interruptedDate = new Date()
        draft.activeCycleId = null
      })
    default:
      return state;
  }
}
