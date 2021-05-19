import React from 'react';
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

function ViralTweetChart({ chartData }) {
    const columns = [{
        name: "handle", 
        options: {
            customBodyRender: (value) => {
                return (
                  <a href={`https://twitter.com/${value}`} target='_blank' rel="noreferrer">{`@${value}`}</a>
                )}   
        }}, "post", 
            {
                name: "retweets",
                options: {
                    customBodyRender: (value) => {
                        return (
                          <center>{value}</center>
                        )}   
                }
            }];

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
        selectableRows: 'none'
    };
  
    const getMuiTheme = () => createMuiTheme({
      overrides: {
        MuiTypography: {
            h6: {
                fontSize: 14,
                fontWeight: 550
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
                paddingRight: 5
            }
        }
      }
    });

    return (
        <div className="viral-tweets">
            <MuiThemeProvider theme={getMuiTheme()}>
                <MUIDataTable
                    title={"VIRAL TWEETS"}
                    data={chartData}
                    columns={columns}
                    options={options}
                />
            </MuiThemeProvider>
      </div>
    )
}

export default ViralTweetChart;