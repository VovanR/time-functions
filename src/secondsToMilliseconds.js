const {
  MILLISECONDS_IN_ONE_SECOND
} = require('./constants');

/**
 * @param {number} seconds
 * @returns {number}
 *
 * @example
 * secondsToMilliseconds(1);
 * //=> 1000
 */
module.exports = function (seconds) {
  return seconds * MILLISECONDS_IN_ONE_SECOND;
};
