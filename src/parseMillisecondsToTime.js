const {
  MINUTES_IN_ONE_HOUR
} = require('./constants');
const secondsToMinutes = require('./secondsToMinutes');
const millisecondsToSeconds = require('./millisecondsToSeconds');
const minutesToHours = require('./minutesToHours');

/**
 * @param {number} milliseconds
 * @returns {{minutes: {number}, hours: {number}}
 *
 * @example
 * parseMillisecondsToTime(((1 * 60) + 15) * 60 * 1000);
 * //=> {hours: 1, minutes: 15}
 */
module.exports = function (milliseconds) {
  const timeInMinutes = secondsToMinutes(millisecondsToSeconds(milliseconds));

  const minutes = timeInMinutes % MINUTES_IN_ONE_HOUR;
  const hours = minutesToHours(timeInMinutes - minutes);

  return {
    minutes,
    hours
  };
};
