import React, {useEffect} from 'react';
import {Table} from './components/table/Table';
import './Users.scss'
import {deleteUser, getUserById, getUsers, postUser, putUser} from "./redux/actions";
import {useAppDispatch, useTypedSelector} from "../../redux/typeSelector";
import Card from "../../components/card/Card";
import CustomUserField from "./components/user-field/CustomUserField";
import {User} from "./redux/types";

const Users = () => {
    const dispatch = useAppDispatch()
    const {list, loadingTable, selectedUser, loadingGetUser} = useTypedSelector(state => state.users)

    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = () => dispatch(getUsers())
    const onErrorFetchHandler=()=>{
        fetchUsers()
        alert('Sorry error occurred')
    }

    const createNewUser = (data: User) => dispatch(postUser(data, fetchUsers))

    const updateUser = (data: User) => selectedUser?.id && dispatch(putUser(selectedUser?.id, data,fetchUsers, onErrorFetchHandler))

    const deleteUserHandler = () => selectedUser?.id && dispatch(deleteUser(selectedUser.id, fetchUsers, onErrorFetchHandler))

    const onRowClick = (item: User) => item?.id && dispatch(getUserById(item.id,onErrorFetchHandler))



    return (
        <div className={'users'}>
            <Card>
                <CustomUserField createRequest={createNewUser}
                                 btnText={'Create new'}/>
            </Card>
            <Card>
                <Table onRowClick={onRowClick}
                       list={list}
                       loading={loadingTable}/>
            </Card>
            <Card>
                <CustomUserField deleteBtn={true}
                                 deleteHandler={deleteUserHandler}
                                 createRequest={updateUser}
                                 btnText={'Update'}
                                 showElement={!!selectedUser}
                                 selectedUser={selectedUser}
                                 loading={loadingGetUser}
                />
            </Card>
        </div>
    );
};

export default Users;