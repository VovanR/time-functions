const {
  MILLISECONDS_IN_ONE_SECOND,
  SECONDS_IN_ONE_MINUTE,
  MINUTES_IN_ONE_HOUR,
  HOURS_IN_ONE_DAY
} = require('./constants.js');

/**
 * @param {number} hours
 * @returns {number}
 *
 * @example
 * hoursToMinutes(1);
 * //=> 60
 */
function hoursToMinutes(hours) {
  return hours * MINUTES_IN_ONE_HOUR;
}

/**
 * @param {number} minutes
 * @returns {number}
 *
 * @example
 * minutesToSeconds(1);
 * //=> 60
 */
function minutesToSeconds(minutes) {
  return minutes * SECONDS_IN_ONE_MINUTE;
}

/**
 * @param {number} seconds
 * @returns {number}
 *
 * @example
 * secondsToMilliseconds(1);
 * //=> 1000
 */
function secondsToMilliseconds(seconds) {
  return seconds * MILLISECONDS_IN_ONE_SECOND;
}

/**
 * @param {number} milliseconds
 * @returns {number}
 *
 * @example
 * millisecondsToSeconds(1000);
 * //=> 1
 */
function millisecondsToSeconds(milliseconds) {
  return milliseconds / MILLISECONDS_IN_ONE_SECOND;
}

/**
 * @param {number} seconds
 * @returns {number}
 *
 * @example
 * secondsToMinutes(60);
 * //=> 1
 */
function secondsToMinutes(seconds) {
  return seconds / SECONDS_IN_ONE_MINUTE;
}

/**
 * @param {number} minutes
 * @returns {number}
 *
 * @example
 * minutesToHours(60);
 * //=> 1
 */
function minutesToHours(minutes) {
  return minutes / MINUTES_IN_ONE_HOUR;
}

const MILLISECONDS_IN_ONE_DAY = secondsToMilliseconds(minutesToSeconds(hoursToMinutes(HOURS_IN_ONE_DAY)));

/**
 * @param {number} milliseconds
 * @returns {number}
 *
 * @example
 * normalizeCycledMilliseconds();
 * //=>
 */
function normalizeCycledMilliseconds(milliseconds) {
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
}

/**
 * @param {number} milliseconds
 * @returns {{minutes: {number}, hours: {number}}
 *
 * @example
 * parseMillisecondsToTime(((1 * 60) + 15) * 60 * 1000);
 * //=> {hours: 1, minutes: 15}
 */
function parseMillisecondsToTime(milliseconds) {
  const timeInMinutes = secondsToMinutes(millisecondsToSeconds(milliseconds));

  const minutes = timeInMinutes % MINUTES_IN_ONE_HOUR;
  const hours = minutesToHours(timeInMinutes - minutes);

  return {
    minutes,
    hours
  };
}

module.exports = {
  hoursToMinutes,
  minutesToSeconds,
  secondsToMilliseconds,
  millisecondsToSeconds,
  secondsToMinutes,
  minutesToHours,
  normalizeCycledMilliseconds,
  parseMillisecondsToTime
};
