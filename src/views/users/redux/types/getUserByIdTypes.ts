import {User} from "../types";

export enum GetUserByIdActionTypes {
    GET_USER_BY_ID = "GET_USER_BY_ID",
    GET_USER_BY_ID_SUCCESS = "GET_USER_BY_ID_SUCCESS",
    GET_USER_BY_ID_ERROR = "GET_USER_BY_ID_ERROR"
}



interface GetUserByIdActionInterface {
    type: GetUserByIdActionTypes.GET_USER_BY_ID,
}

interface GetUserByIdErrorActionInterface {
    type: GetUserByIdActionTypes.GET_USER_BY_ID_ERROR,
    payload: string
}

interface GetUserByIdSuccessActionInterface {
    type: GetUserByIdActionTypes.GET_USER_BY_ID_SUCCESS,
    payload: User
}


export type UserByIdActionGet =
    | GetUserByIdSuccessActionInterface
    | GetUserByIdErrorActionInterface
    | GetUserByIdActionInterface


