import {User} from "../types";

export enum PutUserByIdActionTypes {
    PUT_USER_BY_ID = "PUT_USER_BY_ID",
    PUT_USER_BY_ID_SUCCESS = "PUT_USER_BY_ID_SUCCESS",
    PUT_USER_BY_ID_ERROR = "PUT_USER_BY_ID_ERROR"
}



interface PutUserByIdActionInterface {
    type: PutUserByIdActionTypes.PUT_USER_BY_ID,
}

interface PutUserByIdErrorActionInterface {
    type: PutUserByIdActionTypes.PUT_USER_BY_ID_ERROR,
    payload: string
}

interface PutUserByIdSuccessActionInterface {
    type: PutUserByIdActionTypes.PUT_USER_BY_ID_SUCCESS,
    payload: User
}


export type UserByIdActionPut =
    | PutUserByIdSuccessActionInterface
    | PutUserByIdErrorActionInterface
    | PutUserByIdActionInterface


