const {
  SECONDS_IN_ONE_MINUTE
} = require('./constants');

/**
 * @param {number} minutes
 * @returns {number} seconds
 *
 * @example
 * minutesToSeconds(1);
 * //=> 60
 */
module.exports = function (minutes) {
  return minutes * SECONDS_IN_ONE_MINUTE;
};
