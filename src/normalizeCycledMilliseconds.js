const {
  HOURS_IN_ONE_DAY
} = require('./constants');
const secondsToMilliseconds = require('./secondsToMilliseconds');
const minutesToSeconds = require('./minutesToSeconds');
const hoursToMinutes = require('./hoursToMinutes');

const MILLISECONDS_IN_ONE_DAY = secondsToMilliseconds(minutesToSeconds(hoursToMinutes(HOURS_IN_ONE_DAY)));

/**
 * @param {number} milliseconds
 * @returns {number} milliseconds
 *
 * @example
 * normalizeCycledMilliseconds();
 * //=>
 */
module.exports = function (milliseconds) {
  if (milliseconds >= 0) {
    if (milliseconds < MILLISECONDS_IN_ONE_DAY) {
      return milliseconds;
    }

    return milliseconds % MILLISECONDS_IN_ONE_DAY;
  }

  if (milliseconds > -(MILLISECONDS_IN_ONE_DAY)) {
    return MILLISECONDS_IN_ONE_DAY + milliseconds;
  }

  return MILLISECONDS_IN_ONE_DAY + (milliseconds % MILLISECONDS_IN_ONE_DAY);
};
