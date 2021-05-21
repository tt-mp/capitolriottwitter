import React, { useState } from 'react';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import { renderCustomizedLabel, renderCell, renderActiveShape } from './renderFunctions.js';
import * as CONSTANTS from './constants.js';

function MentionsPieChart({ chartData }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const onPieEnter = (_, index) => { setActiveIndex(index); };

  return (
    <div className='mentions'>
        TOP 10 MENTIONED USERS (REPLIES + TAGS)
        <ResponsiveContainer width={CONSTANTS.CONTAINER_WIDTH} height={CONSTANTS.CONTAINER_HEIGHT}>
            <PieChart width={CONSTANTS.CHART_WIDTH} height={CONSTANTS.CHART_HEIGHT}>
                <Pie
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    data={chartData}
                    cx='50%'
                    cy='50%'
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={140}
                    dataKey='mentions'
                    onMouseEnter={onPieEnter}
                >
                    {chartData.map((entry, index) => (renderCell(index)))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    </div>
  );
}

export default MentionsPieChart;
