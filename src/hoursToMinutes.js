const {
  MINUTES_IN_ONE_HOUR
} = require('./constants');

/**
 * @param {number} hours
 * @returns {number}
 *
 * @example
 * hoursToMinutes(1);
 * //=> 60
 */
module.exports = function (hours) {
  return hours * MINUTES_IN_ONE_HOUR;
};
