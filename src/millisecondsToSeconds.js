import {MILLISECONDS_IN_ONE_SECOND} from './constants';

/**
 * Convert milliseconds to seconds
 *
 * @param {number} milliseconds Milliseconds
 * @returns {number} Seconds
 *
 * @example
 * millisecondsToSeconds(1000);
 * //=> 1
 */
function millisecondsToSeconds(milliseconds) {
  return milliseconds / MILLISECONDS_IN_ONE_SECOND;
}

export default millisecondsToSeconds;
