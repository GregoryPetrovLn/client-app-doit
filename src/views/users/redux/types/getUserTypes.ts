import {User} from "../types";

export enum GetUserActionTypes {
    GET_USERS = "GET_USERS",
    GET_USERS_SUCCESS = "GET_USERS_SUCCESS",
    GET_USERS_ERROR = "GET_USERS_ERROR"
}



interface GetUsersActionInterface {
    type: GetUserActionTypes.GET_USERS,
}

interface GetUsersErrorActionInterface {
    type: GetUserActionTypes.GET_USERS_ERROR,
    payload: string
}

interface GetUsersSuccessActionInterface {
    type: GetUserActionTypes.GET_USERS_SUCCESS,
    payload: User[]
}


export type UserActionGet =
    | GetUsersActionInterface
    | GetUsersErrorActionInterface
    | GetUsersSuccessActionInterface


