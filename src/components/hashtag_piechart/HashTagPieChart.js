import React, { useState } from 'react';

import { PieChart, Pie, ResponsiveContainer } from 'recharts';

import * as CONSTANTS from './constants.js';
import { renderActiveShape, renderCell } from './renderFunctions.js';


function HashTagPieChart({ chartData }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const onPieEnter = (_, index) => { setActiveIndex(index); };

    return (
        <div className = 'hashtags'>
            {CONSTANTS.TITLE}
            <ResponsiveContainer width={CONSTANTS.CONTAINER_WIDTH} height={CONSTANTS.CONTAINER_HEIGHT}>
                <PieChart width={CONSTANTS.WIDTH} height={CONSTANTS.HEIGHT}>
                    <Pie
                        activeIndex={activeIndex}
                        activeShape={renderActiveShape}
                        data={chartData}
                        cx={CONSTANTS.MIDDLE_PERCENT}
                        cy={CONSTANTS.MIDDLE_PERCENT}
                        innerRadius={CONSTANTS.INNER_RADIUS}
                        outerRadius={CONSTANTS.OUTER_RADIUS}
                        dataKey='count'
                        onMouseEnter={onPieEnter}
                    >
                        {chartData.map((entry, index) => (renderCell(index)))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

export default HashTagPieChart;