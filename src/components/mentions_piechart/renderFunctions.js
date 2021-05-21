import { Cell, Sector } from 'recharts';
import * as CONSTANTS from './constants.js';
import { getSin, getCos } from '../../helpers/functions.js';

export function renderCell(index) {
    return <Cell key={`cell-${index}`} fill={CONSTANTS.COLORS[index % CONSTANTS.COLORS.length]} />
}

export function renderActiveShape(props) {
    const { 
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        fill,
        payload } = props;

    const sin = getSin(midAngle);
    const cos = getCos(midAngle);

    // Get start coordinates of arrow.
    // Begins on the edge of outer circle
    const mx = cx + (outerRadius + CONSTANTS.ARROW_START) * cos;
    const my = cy + (outerRadius + CONSTANTS.ARROW_START) * sin;

    // Draw line outward
    const l1_x = cx + (outerRadius + 30) * cos;
    const l1_y = cy + (outerRadius + 30) * sin;

    // Draw line toward extra information
    const l2_x = l1_x + (cos >= 0 ? 1 : -1) * 22;
    const l2_y = l1_y;

    // Determine direction of arrow
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            {/* Dummy to hold percent text */}
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

            {/* Draw arrow to extra information */}
            <path d={`M${mx},${my}L${l1_x},${l1_y}L${l2_x},${l2_y}`} stroke={fill} fill='none' />

            {/* Draw edge highlight of moused-over section */}
            <circle cx={l2_x} cy={l2_y} r={2} fill={fill} stroke='none' />

            {/* Display extra information */}
            {renderText(`@${payload.handle}`, l2_x + (cos >= 0 ? 1 : -1) * 12, l2_y, 0, 12, textAnchor, '#333')}
            {renderText(`${payload.mentions} mentions`, l2_x + (cos >= 0 ? 1 : -1) * 12, l2_y, 18, 10, textAnchor, '#999')}
        </g>
    );
};

export function renderCustomizedLabel({cx, cy, midAngle, innerRadius, outerRadius, percent}) {
    const radius = innerRadius + (outerRadius - innerRadius) * .7;

    const x = cx + radius * Math.cos(-midAngle * CONSTANTS.RADIAN);
    const y = cy + radius * Math.sin(-midAngle * CONSTANTS.RADIAN);

    return (
        <text x={x} y={y} fontSize={12} fill='white' textAnchor={'middle'} dominantBaseline='central'>
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    )
}

function renderText(text, x, y, dy, fontSize, textAnchor, fill) {
    return (
        <text x={x} y={y} dy={dy} fontSize={fontSize} textAnchor={textAnchor} fill={fill}>
            {text}
        </text>
    )
}