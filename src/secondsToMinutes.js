import {SECONDS_IN_ONE_MINUTE} from './constants';

/**
 * Convert seconds to minutes
 *
 * @param {number} seconds Seconds
 * @returns {number} Minutes
 *
 * @example
 * secondsToMinutes(60);
 * //=> 1
 */
function secondsToMinutes(seconds) {
  return seconds / SECONDS_IN_ONE_MINUTE;
}

export default secondsToMinutes;
