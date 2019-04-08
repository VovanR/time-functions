import {MINUTES_IN_ONE_HOUR} from './constants';

/**
 * Convert minutes to hours
 *
 * @param {number} minutes Minutes
 * @returns {number} hours
 *
 * @example
 * minutesToHours(60);
 * //=> 1
 */
function minutesToHours(minutes) {
  return minutes / MINUTES_IN_ONE_HOUR;
}

export default minutesToHours;
