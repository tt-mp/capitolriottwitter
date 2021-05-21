import React, { useState } from 'react';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import { renderCustomizedLabel, renderCell, renderActiveShape } from './renderFunctions.js';
import * as CONSTANTS from './constants.js';

function MentionsPieChart({ chartData }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const onPieEnter = (_, index) => { setActiveIndex(index); };

  return (
    <div className='mentions'>
        {CONSTANTS.TITLE}
        <ResponsiveContainer width={CONSTANTS.CONTAINER_WIDTH} height={CONSTANTS.CONTAINER_HEIGHT}>
            <PieChart width={CONSTANTS.WIDTH} height={CONSTANTS.HEIGHT}>
                <Pie
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    data={chartData}
                    cx={CONSTANTS.MIDDLE_PERCENT}
                    cy={CONSTANTS.MIDDLE_PERCENT}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={140}
                    fill='#8884d8'
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
