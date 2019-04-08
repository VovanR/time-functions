const {
  MINUTES_IN_ONE_HOUR
} = require('./constants');

/**
 * @param {number} minutes
 * @returns {number} hours
 *
 * @example
 * minutesToHours(60);
 * //=> 1
 */
module.exports = function (minutes) {
  return minutes / MINUTES_IN_ONE_HOUR;
};
