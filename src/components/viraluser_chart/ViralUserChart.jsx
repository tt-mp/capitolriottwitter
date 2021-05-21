import React from 'react';

import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import SubTable from './SubTable.jsx';

function ViralUserChart({ chartData }) {
    const columns = 
    [{
        name: 'handle', 
        options: {
            customBodyRender: (value) => <a href={`https://twitter.com/${value}`} target='_blank' rel='noreferrer'>{`@${value}`}</a>}
    }, "follows"];

    const options = {
        filter: false,
        print: false,
        download: false,
        viewColumns: false,
        elevation: 0,
        pagination: false,
        tableBodyHeight: '375px',
        setTableProps: () => {
            return { padding: 'none', size: 'small' }},
        selectableRows: 'none',
        expandableRows: true,
        renderExpandableRow: (rowData, rowMeta) => 
            <SubTable title='POSTS' rows={chartData[rowMeta.dataIndex].tweets} />
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