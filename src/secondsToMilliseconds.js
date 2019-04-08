import {MILLISECONDS_IN_ONE_SECOND} from './constants';

/**
 * Convert seconds to milliseconds
 *
 * @param {number} seconds Seconds
 * @returns {number} milliseconds
 *
 * @example
 * secondsToMilliseconds(1);
 * //=> 1000
 */
function secondsToMilliseconds(seconds) {
  return seconds * MILLISECONDS_IN_ONE_SECOND;
}

export default secondsToMilliseconds;
