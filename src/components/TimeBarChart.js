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

const TimeBarChart = ({ chartData }) => (
    <div className='tweet-count'>
        <ResponsiveContainer width = '95%' height = {325} >
            <BarChart data={chartData} width={500} height={300} margin={{
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
                <Bar dataKey="post_count" stackId="a" fill="#8884d8" />
                <Bar dataKey="share_count" stackId="a" fill="#82ca9d" />
                <Tooltip />
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