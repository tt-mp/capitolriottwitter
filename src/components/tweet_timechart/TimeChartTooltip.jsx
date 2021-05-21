import React from 'react';
import { timeFromUnix } from '../helpers/functions.js';

const TimeChartTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        const unixTime = label;
        const posts = payload[0].value;
        const shares = payload[1].value;
        const total = posts + shares;
        
        return (
            <div className="timechart-tooltip">
                <b>{`${timeFromUnix(unixTime)}`}</b><br/>
                Posts: {posts}<br/>
                Shares: {shares}<br/>
                Total: {total}
            </div>
        );
    }
  
    return null;
};

export default TimeChartTooltip;