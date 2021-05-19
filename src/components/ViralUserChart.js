import React from 'react';

import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";

function ViralUserChart({ chartData }) {
    const columns = 
    [{
        name: "handle", 
        options: {
            customBodyRender: (value) => {
                return (<a href={`https://twitter.com/${value}`} target='_blank' rel="noreferrer">{`@${value}`}</a>)}
        }}
        , "follows"];

    const options = {
        filter: false,
        print: false,
        download: false,
        viewColumns: false,
        elevation: 0,
        pagination: false,
        tableBodyHeight: '400px',
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
                                <Table style={{ minWidth: "500" }} aria-label="simple table">
                                    <TableBody>
                                        {chartData[rowMeta.dataIndex].tweets.map(tweet => (
                                            <TableRow key={tweet}><td>{tweet}</td></TableRow>
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
        <div className="viral-users">
            <MuiThemeProvider theme={getMuiTheme()}>
                <MUIDataTable
                    title={"TOP 10 VIRAL USERS (HIGHEST FOLLOWER GAIN IN 24HRS) + TWEETS DAY OF"}
                    data={chartData}
                    columns={columns}
                    options={options}
                />
            </MuiThemeProvider>
      </div>
    )
}

export default ViralUserChart;