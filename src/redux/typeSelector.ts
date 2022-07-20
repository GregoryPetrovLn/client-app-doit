import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {RootState, store} from "./index";
export type AppDispatch = typeof store.dispatch


export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
