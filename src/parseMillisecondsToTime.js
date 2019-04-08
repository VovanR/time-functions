import {MINUTES_IN_ONE_HOUR} from './constants';
import secondsToMinutes from './secondsToMinutes';
import millisecondsToSeconds from './millisecondsToSeconds';
import minutesToHours from './minutesToHours';

/**
 * Convert milliseconds to hours and minutes
 *
 * @param {number} milliseconds Milliseconds
 * @returns {{minutes: number, hours: number}} time object
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

export default parseMillisecondsToTime;
