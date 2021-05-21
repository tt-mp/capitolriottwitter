import moment from 'moment';

export const RADIAN = Math.PI / 180;

export function timeFromUnix(unixTime) {
    return moment(unixTime * 1000).format('LT');
}

export function getSin(angle) {
    return Math.sin(-RADIAN * angle);
}

export function getCos(angle) {
    return Math.cos(-RADIAN * angle);
}