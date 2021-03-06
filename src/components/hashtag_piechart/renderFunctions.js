import { Cell, Sector } from 'recharts';
import * as CONSTANTS from './constants.js';
import { getSin, getCos } from '../helpers/functions.js';

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
    const direction = cos >= 0 ? 1 : -1;

    // Get start coordinates of arrow.
    // Begins on the edge of outer circle
    const mx = cx + (outerRadius + CONSTANTS.ARROW_START) * cos;
    const my = cy + (outerRadius + CONSTANTS.ARROW_START) * sin;

    // Draw line outward
    const l1_x = cx + (outerRadius + CONSTANTS.ARROW_LENGTH) * cos;
    const l1_y = cy + (outerRadius + CONSTANTS.ARROW_LENGTH) * sin;

    // Draw line toward extra information
    const l2_x = l1_x + direction * CONSTANTS.ARROW_LENGTH;
    const l2_y = l1_y;

    // Determine direction of arrow
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            {/* Display hashtag in the center */}
            {renderText(`#${payload.hashtag}`, cx, cy, 8, CONSTANTS.MAIN_TEXT_SIZE, 'middle', fill)}

            {/* Draw inner circle */}
            {renderSector(cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill)}

            {/* Draw outer-edge circle highlight */}
            {renderSector(cx, cy, outerRadius + CONSTANTS.EDGE_START, outerRadius + CONSTANTS.EDGE_STOP, startAngle, endAngle, fill)}

            {/* Draw arrow to extra information */}
            <path d={`M${mx},${my}L${l1_x},${l2_y}L${l2_x},${l2_y}`} stroke={fill} fill='none' />

            {/* Draw arrow circle */}
            <circle cx={l2_x} cy={l2_y} r={2} fill={fill} stroke='none' />

            {/* Display extra information */}
            {renderText(
                `${value} tweets`,l2_x + direction * CONSTANTS.ARROW_LENGTH, l2_y, 0, CONSTANTS.MAIN_TEXT_SIZE, textAnchor)}
            {renderText(
                `${(percent * 100).toFixed(2)}%`, l2_x + direction * CONSTANTS.ARROW_LENGTH, l2_y, 14, CONSTANTS.SUB_TEXT_SIZE, textAnchor)}
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