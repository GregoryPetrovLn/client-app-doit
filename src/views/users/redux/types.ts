import {UserActionGet} from "./types/getUserTypes";
import {UserActionPost} from "./types/postUserTypes";
import {UserByIdActionGet} from "./types/getUserByIdTypes";
import {UserActionDelete} from "./types/deleteUserTypes";
import {UserByIdActionPut} from "./types/putUserByIdTypes";

export interface User {
    id?: string,
    name: string,
    email: string
}

export interface UserState {
    list: User[],
    loadingTable: boolean,
    loadingGetUser: boolean,
    selectedUser: User | null
}

export type UserAction = UserActionGet
    | UserActionPost
    | UserByIdActionGet
    | UserActionDelete
    | UserByIdActionPut