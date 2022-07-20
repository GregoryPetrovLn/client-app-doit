import {User} from "../types";

export enum PostUserActionTypes {
    POST_USER = "POST_USER",
    POST_USER_SUCCESS = "POST_USER_SUCCESS",
    POST_USERS_ERROR = "POST_USERS_ERROR"
}

interface PostUserActionInterface {
    type: PostUserActionTypes.POST_USER,
}

interface PostUserErrorActionInterface {
    type: PostUserActionTypes.POST_USERS_ERROR,
    payload: string
}

interface PostUserSuccessActionInterface {
    type: PostUserActionTypes.POST_USER_SUCCESS,
    payload: User
}


export type UserActionPost =
    | PostUserActionInterface
    | PostUserErrorActionInterface
    | PostUserSuccessActionInterface


