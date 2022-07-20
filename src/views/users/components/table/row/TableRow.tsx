import React from 'react';
import './TableRow.scss'
import {User} from "../../../redux/types";
interface TableRowInterface{
    item:User,
    onRowClick:Function
}
const TableRow = ({item,onRowClick}:TableRowInterface) => {
    return (
        <tr onClick={()=>onRowClick(item)} className={'table-row'}>
            <td>{item.name}</td>
            <td className={'email'}>{item.email}</td>
        </tr>
    );
};

export default TableRow;