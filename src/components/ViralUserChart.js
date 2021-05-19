import React from 'react';
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

function ViralUserChart({ chartData }) {
    const columns = [{
        name: "handle", 
        options: {
            customBodyRender: (value, tableMeta, updateValue) => {
                return (
                  <a href={`https://twitter.com/${value}`} target='_blank'>{`@${value}`}</a>
                )}
        }}, "follows"];

    const rows = [];

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
            console.log(rowData, rowMeta);
            return (
              <>
                <tr>
                  <td colSpan={1}>
                    <TableContainer>
                      <Table style={{ minWidth: "500" }} aria-label="simple table">
                        <TableBody>
                          {rows.map(row => (
                            <TableRow key={row.name}>
                              <TableCell component="th" scope="row">
                                {row.body}
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
                padding: 3,
                paddingRight: 5
            }
        }
      }
    });

    return (
        <div className="viral-users">
            <MuiThemeProvider theme={getMuiTheme()}>
                <MUIDataTable
                    title={"VIRAL USERS"}
                    data={chartData}
                    columns={columns}
                    options={options}
                />
            </MuiThemeProvider>
      </div>
    )
}

export default ViralUserChart;