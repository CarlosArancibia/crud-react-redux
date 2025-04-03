import type { TypedUseSelectorHook } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../store/store'

export const useSelectorApp: TypedUseSelectorHook<RootState> = useSelector
export const useDispatchApp: () => AppDispatch = useDispatch
