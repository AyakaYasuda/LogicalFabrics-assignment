import React, { Reducer, Dispatch, createContext, useReducer } from 'react'

const createAnalyzedDataCtx = <StateType, ActionType>(
  reducer: Reducer<StateType, ActionType>,
  initialState: StateType
) => {
  const defaultDispatch: Dispatch<ActionType> = () => initialState

  const analyzedDataCtx = createContext({
    state: initialState,
    dispatch: defaultDispatch,
  })

  const Provider = (props: React.PropsWithChildren<{}>) => {
    const [state, dispatch] = useReducer<Reducer<StateType, ActionType>>(
      reducer,
      initialState
    )
    return <analyzedDataCtx.Provider value={{ state, dispatch }} {...props} />
  }

  return [analyzedDataCtx, Provider] as const
}

interface initialStateInterface {
  boundingPoly: null
  confidence: number
  description: string
  locale: string
  locations: []
  mid: string
  properties: []
  score: number
  topicality: number
}

const initialState: initialStateInterface[] = []
type State = typeof initialState
type Action = { type: 'fetch'; payload: typeof initialState }

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'fetch':
      return action.payload
    default:
      return state
  }
}

export const [analyzedDataCtx, AnalyzedDataProvider] = createAnalyzedDataCtx(
  reducer,
  initialState
)
