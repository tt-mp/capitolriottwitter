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
        payload,
        percent,
        value } = props;

    const sin = getSin(midAngle);
    const cos = getCos(midAngle);

    // Get start coordinates of arrow.
    // Begins on the edge of outer circle
    const mx = cx + (outerRadius + CONSTANTS.ARROW_START) * cos;
    const my = cy + (outerRadius + CONSTANTS.ARROW_START) * sin;

    // Draw line outward
    const l1_x = cx + (outerRadius + CONSTANTS.ARROW_LENGTH) * cos;
    const l1_y = cy + (outerRadius + CONSTANTS.ARROW_LENGTH) * sin;

    // Draw line toward extra information
    const l2_x = l1_x + (cos >= 0 ? 1 : -1) * CONSTANTS.ARROW_LENGTH;
    const l2_y = l1_y;

    // Determine direction of arrow
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            {/* Display hashtag in the center */}
            {renderText(`#${payload.hashtag}`, cx, cy, 8, 12, 'middle', fill)}

            {/* Draw inner circle */}
            {renderSector(cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill)}

            {/* Draw outer circle */}
            {renderSector(cx, cy, outerRadius + CONSTANTS.EDGE_START, outerRadius + CONSTANTS.EDGE_STOP, startAngle, endAngle, fill)}

            {/* Draw arrow to extra information */}
            <path d={`M${mx},${my}L${l1_x},${l2_y}L${l2_x},${l2_y}`} stroke={fill} fill='none' />

            {/* Draw edge highlight of moused-over section */}
            <circle cx={l2_x} cy={l2_y} r={2} fill={fill} stroke='none' />

            {/* Display extra information */}
            {renderText(
                `${value} tweets`,l2_x + (cos >= 0 ? 1 : -1) * CONSTANTS.ARROW_LENGTH, l2_y, 0, CONSTANTS.INFO_COUNT_SIZE, textAnchor, '#333')}
            {renderText(
                `${(percent * 100).toFixed(2)}%`, l2_x + (cos >= 0 ? 1 : -1) * CONSTANTS.ARROW_LENGTH, l2_y, 16, CONSTANTS.INFO_PERCENT_SIZE, textAnchor, '#999')}
        </g>
    );
};


function renderText(text, x, y, dy, fontSize, textAnchor, fill) {
    return (
        <text x={x} y={y} dy={dy} fontSize={fontSize} textAnchor={textAnchor} fill={fill}>
            {text}
        </text>
    )
}

function renderSector(cx, cy, innerRadius, outerRadius, startAngle, endAngle,fill) {
    return (
        <Sector
            cx={cx}
            cy={cy}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            startAngle={startAngle}
            endAngle={endAngle}
            fill={fill}
        />       
    )
}