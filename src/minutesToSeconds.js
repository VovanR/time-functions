import {SECONDS_IN_ONE_MINUTE} from './constants';

/**
 * Convert minutes to seconds
 *
 * @param {number} minutes Minutes
 * @returns {number} seconds
 *
 * @example
 * minutesToSeconds(1);
 * //=> 60
 */
function minutesToSeconds(minutes) {
  return minutes * SECONDS_IN_ONE_MINUTE;
}

export default minutesToSeconds;
