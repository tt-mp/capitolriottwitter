import React from 'react';
import PropTypes from 'prop-types';

import * as CONSTANTS from './constants.js';
import TimeChartTooltip from './TimeChartTooltip.jsx';
import { timeFromUnix } from '../../helpers/functions.js';

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from 'recharts';

const TimeBarChart = ({ chartData }) => (
    <div className='tweet-count'>
        <ResponsiveContainer width={CONSTANTS.CONTAINER_WIDTH} height ={CONSTANTS.CONTAINER_HEIGHT} >
            <BarChart 
                data={chartData} 
                width={CONSTANTS.WIDTH}
                height={CONSTANTS.HEIGHT}
                margin={{ 
                    top: CONSTANTS.MARGIN.TOP,
                    right: CONSTANTS.MARGIN.RIGHT,
                    left: CONSTANTS.MARGIN.LEFT,
                    bottom: CONSTANTS.MARGIN.BOTTOM }}>
              
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    dataKey = {CONSTANTS.TIME_NAME}
                    domain = {[1609909200, 1609995600]}
                    tickFormatter = {(unixTime) => timeFromUnix(unixTime)}
                />
                <YAxis />
                <Legend />
                <Bar dataKey={CONSTANTS.POST_NAME} stackId="a" fill={CONSTANTS.POST_COLOR} />
                <Bar dataKey={CONSTANTS.SHARE_NAME} stackId="a" fill={CONSTANTS.SHARE_COLOR} />
                <Tooltip content={<TimeChartTooltip />} />
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