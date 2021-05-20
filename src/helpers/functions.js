import moment from 'moment';
import * as CONSTANTS from './constants.js';

export function timeFromUnix(unixTime) {
    return moment(unixTime * 1000).format('LT');
}

export function getSin(angle) {
    return Math.sin(-CONSTANTS.RADIAN * angle);
}

export function getCos(angle) {
    return Math.cos(-CONSTANTS.RADIAN * angle);
}