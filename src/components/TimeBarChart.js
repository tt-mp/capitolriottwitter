import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from 'recharts'

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <b>{`${moment(label * 1000).format('LT')}`}</b><br/>
                Posts: {payload[0].value}<br/>
                Shares: {payload[1].value}<br/>
                Total: {payload[0].value + payload[1].value}
            </div>
        );
    }
  
    return null;
};

const TimeBarChart = ({ chartData }) => (
    <div className='tweet-count'>
        <ResponsiveContainer width = '95%' height ={325} >
            <BarChart 
                data={chartData} 
                width={500}
                height={300}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
            }}>
              
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    dataKey = 'time'
                    domain = {[1609909200, 1609995600]}
                    tickFormatter = {(unixTime) => moment(unixTime * 1000).format('LT')}
                />
                <YAxis />
                <Legend />
                <Bar dataKey="Posts" stackId="a" fill="#8884d8" />
                <Bar dataKey="Shares" stackId="a" fill="#82ca9d" />
                <Tooltip content={<CustomTooltip />} />
            </BarChart>
        </ResponsiveContainer>
    </div>
)

TimeBarChart.propTypes = {
    chartData: PropTypes.arrayOf(
        PropTypes.shape({
        time: PropTypes.number,
        value: PropTypes.number
        })
    ).isRequired
}

export default TimeBarChart