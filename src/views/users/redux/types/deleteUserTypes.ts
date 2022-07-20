import {User} from "../types";

export enum DeleteUserActionTypes {
    DELETE_USER = "DELETE_USER",
    DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS",
    DELETE_USERS_ERROR = "DELETE_USERS_ERROR"
}

interface DeleteUserActionInterface {
    type: DeleteUserActionTypes.DELETE_USER,
}

interface DeleteUserErrorActionInterface {
    type: DeleteUserActionTypes.DELETE_USERS_ERROR,
    payload: string
}

interface DeleteUserSuccessActionInterface {
    type: DeleteUserActionTypes.DELETE_USER_SUCCESS,
    payload: User
}


export type UserActionDelete =
    | DeleteUserActionInterface
    | DeleteUserErrorActionInterface
    | DeleteUserSuccessActionInterface


