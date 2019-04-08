import {MINUTES_IN_ONE_HOUR} from './constants';

/**
 * Convert hours to minutes
 *
 * @param {number} hours Hours
 * @returns {number} minutes
 *
 * @example
 * hoursToMinutes(1);
 * //=> 60
 */
function hoursToMinutes(hours) {
  return hours * MINUTES_IN_ONE_HOUR;
}

export default hoursToMinutes;
