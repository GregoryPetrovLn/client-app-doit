import React from 'react';
import TableRow from "./row/TableRow";
import './Table.scss'
import {User} from "../../redux/types";
import {Loader} from "../../../../components";

interface TableInterface {
    list: User[] | null;
    loading: boolean,
    onRowClick:Function
}

export const Table = ({list, loading,onRowClick}: TableInterface) => {
    return (
        <div className={'table-wrapper'}>
            <div className={'custom-table'}>
                {loading ?
                    <Loader/> :
                    <table>
                        <tbody>
                        {list?.map((item: User) => <TableRow onRowClick={onRowClick} item={item} key={item.id}/>)}
                        </tbody>
                    </table>}
            </div>
        </div>
    );
};

