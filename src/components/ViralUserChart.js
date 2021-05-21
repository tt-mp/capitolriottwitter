import React from 'react';

import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";

function ViralUserChart({ chartData }) {
    const columns = 
    [
        {
            name: 'handle', 
            options: {
                customBodyRender: (value) => <a href={`https://twitter.com/${value}`} target='_blank' rel='noreferrer'>{`@${value}`}</a>}
        }
        , "follows"];

    const options = {
        filter: false,
        print: false,
        download: false,
        viewColumns: false,
        elevation: 0,
        pagination: false,
        tableBodyHeight: '375px',
        setTableProps: () => {
            return {
                padding: 'none',
                size: 'small',
        }},
        selectableRows: 'none',
        expandableRows: true,
        renderExpandableRow: (rowData, rowMeta) => {
            return (
                <>
                    <tr>
                        <td colSpan={3}>
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align='center' size='small'><b>POST</b></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {chartData[rowMeta.dataIndex].tweets.map(
                                            tweet => (
                                                <TableRow key={tweet}>
                                                    <TableCell component='th' scope='row' size='small'>
                                                        {tweet}
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </td>
                    </tr>
                </>
            );
        },
    };
  
    const getMuiTheme = () => createMuiTheme({
        overrides: {
            MuiToolbar: {
                gutters: {
                    paddingLeft: '0 !important'
                }
            },
            MuiTypography: {
                h6: {
                    fontSize: 14,
                    fontWeight: 550,
                }
            },
            MUIDataTableHeadCell: {
                contentWrapper: {
                    justifyContent: 'center'
                },
                data: {
                    fontSize: 12,
                    fontWeight: 'bold',
                    textTransform: 'uppercase'
                }
            },
            MUIDataTableBodyCell: {
                root: {
                    fontSize: 12,
                    padding: 3,
                    textAlign: 'center',
                    paddingRight: 5
                }
            }
        }
    });

    return (
        <div className='viral-users'>
            <MuiThemeProvider theme={getMuiTheme()}>
                <MUIDataTable
                    title={'TOP 10 USERS WITH MOST FOLLOWS IN 24HRS'}
                    data={chartData}
                    columns={columns}
                    options={options}
                />
            </MuiThemeProvider>
      </div>
    )
}

export default ViralUserChart;