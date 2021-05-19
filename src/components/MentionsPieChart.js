import React, { useState } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

function MentionsPieChart({ chartData }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const onPieEnter = (_, index) => { setActiveIndex(index); };

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    const RADIAN = Math.PI / 180;
    
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * .7;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fontSize={12} fill="white" textAnchor={'middle'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        )};

    const renderActiveShape = (props) => {
        const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload } = props;
        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);
        const sx = cx + (outerRadius + 10) * cos;
        const sy = cy + (outerRadius + 10) * sin;
        const mx = cx + (outerRadius + 30) * cos;
        const my = cy + (outerRadius + 30) * sin;
        const ex = mx + (cos >= 0 ? 1 : -1) * 22;
        const ey = my;
        const textAnchor = cos >= 0 ? 'start' : 'end';
  
    return (
      <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill} />
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fontSize={12} fill="#333">
                {`@${payload.handle}`}
            </text>
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fontSize={10} fill="#999">
                {`${payload.mentions} mentions`}
            </text>
        </g>
    );
  };

  return (
    <div className="mentions">
        TOP 10 MENTIONED USERS (REPLIES + TAGS)
        <ResponsiveContainer width="100%" height={500}>
            <PieChart width="100%" height={300}>
                <Pie
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={140}
                    fill="#8884d8"
                    dataKey="mentions"
                    onMouseEnter={onPieEnter}
                >
                    {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    </div>
  );
}

export default MentionsPieChart;
