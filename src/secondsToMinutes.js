const {
  SECONDS_IN_ONE_MINUTE
} = require('./constants');

/**
 * @param {number} seconds
 * @returns {number}
 *
 * @example
 * secondsToMinutes(60);
 * //=> 1
 */
module.exports = function (seconds) {
  return seconds / SECONDS_IN_ONE_MINUTE;
};
