import {MILLISECONDS_IN_ONE_SECOND, SECONDS_IN_ONE_MINUTE} from './constants';

/**
 * Convert minutes to milliseconds
 *
 * @param {number} minutes Minutes
 * @returns {number} Milliseconds
 *
 * @example
 * minutesToMilliseconds(1);
 * //=> 60000
 */
function minutesToMilliseconds(minutes) {
  return minutes * SECONDS_IN_ONE_MINUTE * MILLISECONDS_IN_ONE_SECOND;
}

export default minutesToMilliseconds;
