import {UserAction, UserState} from "./types";
import {GetUserActionTypes} from "./types/getUserTypes";
import {GetUserByIdActionTypes} from "./types/getUserByIdTypes";
import {DeleteUserActionTypes} from "./types/deleteUserTypes";
import {PutUserByIdActionTypes} from "./types/putUserByIdTypes";


const initialState: UserState = {
    list: [],
    loadingTable: false,
    loadingGetUser: false,
    selectedUser: null
}

export const reducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case GetUserActionTypes.GET_USERS:
            return {...state, loadingTable: true, list: []}
        case GetUserActionTypes.GET_USERS_SUCCESS:
            return {...state, loadingTable: false, list: action.payload}
        case GetUserActionTypes.GET_USERS_ERROR:
            return {...state, loadingTable: false, list: []}

        case GetUserByIdActionTypes.GET_USER_BY_ID:
            return {...state, loadingGetUser: true}
        case GetUserByIdActionTypes.GET_USER_BY_ID_SUCCESS:
            return {...state, loadingGetUser: false, selectedUser: action.payload}
        case GetUserByIdActionTypes.GET_USER_BY_ID_ERROR:
            return {...state, loadingGetUser: false, selectedUser: null}

        case DeleteUserActionTypes.DELETE_USER_SUCCESS:
            return {...state,selectedUser:null}
        case DeleteUserActionTypes.DELETE_USERS_ERROR:
            return {...state,selectedUser:null}

        case PutUserByIdActionTypes.PUT_USER_BY_ID:
            return {...state,selectedUser:null, loadingGetUser:true}
        case PutUserByIdActionTypes.PUT_USER_BY_ID_SUCCESS:
            return {...state,selectedUser:null, loadingGetUser:false}
        default:
            return state
    }

}