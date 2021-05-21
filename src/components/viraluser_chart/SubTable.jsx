import React from 'react';

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";

function SubTable({ title, rows }) {
    return (
        <tr>
            <td colSpan={3}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align='center' size='small'><b>{title}</b></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map(
                                row => (
                                    <TableRow key={row}>
                                        <TableCell component='th' scope='row' size='small'>
                                            {row}
                                        </TableCell>
                                    </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </td>
        </tr>
    )
}

export default SubTable;