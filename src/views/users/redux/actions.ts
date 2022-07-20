import {GetUserActionTypes} from "./types/getUserTypes";
import {Dispatch} from "redux";
import axios from "axios";
import {User, UserAction} from "./types";
import {PostUserActionTypes} from "./types/postUserTypes";
import {GetUserByIdActionTypes} from "./types/getUserByIdTypes";
import {DeleteUserActionTypes} from "./types/deleteUserTypes";
import {PutUserByIdActionTypes} from "./types/putUserByIdTypes";

export const getUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: GetUserActionTypes.GET_USERS})
            const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/users`)
            dispatch({type: GetUserActionTypes.GET_USERS_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({
                type: GetUserActionTypes.GET_USERS_ERROR,
                payload: "Can't fetch users"
            })
        }
    }
}


export const postUser = (data:User, onSuccess:Function) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: PostUserActionTypes.POST_USER})
            const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/users`,data)
            dispatch({type: PostUserActionTypes.POST_USER_SUCCESS, payload: response.data})
            onSuccess()
        } catch (e) {
            dispatch({
                type: PostUserActionTypes.POST_USERS_ERROR,
                payload: "Can't post user"
            })
        }
    }
}

export const getUserById = (id:string,onError:Function) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: GetUserByIdActionTypes.GET_USER_BY_ID})
            const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/users/${id}`)
            dispatch({type: GetUserByIdActionTypes.GET_USER_BY_ID_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({
                type: GetUserByIdActionTypes.GET_USER_BY_ID_ERROR,
                payload: "Can't get user by id"
            })
            onError()
        }
    }
}

export const deleteUser = (id:string,onSuccess:Function, onError:Function) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: DeleteUserActionTypes.DELETE_USER})
            const response = await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/users/${id}`)
            dispatch({type: DeleteUserActionTypes.DELETE_USER_SUCCESS, payload: response.data})
            onSuccess()
        } catch (e) {
            dispatch({
                type: DeleteUserActionTypes.DELETE_USERS_ERROR,
                payload: "Can't delete user by id"
            })
            onError()
        }
    }
}

export const putUser = (id:string, data:User, onSuccess:Function,onError:Function) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: PutUserByIdActionTypes.PUT_USER_BY_ID})
            const response = await axios.put(`${process.env.REACT_APP_API_BASE_URL}/users/${id}`,data)
            dispatch({type: PutUserByIdActionTypes.PUT_USER_BY_ID_SUCCESS, payload: response.data})
            onSuccess()
        } catch (e) {
            dispatch({
                type: PutUserByIdActionTypes.PUT_USER_BY_ID_ERROR,
                payload: "Can't update user"
            })
            onError()
        }
    }
}