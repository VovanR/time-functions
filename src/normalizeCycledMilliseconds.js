import {HOURS_IN_ONE_DAY} from './constants';
import secondsToMilliseconds from './secondsToMilliseconds';
import minutesToSeconds from './minutesToSeconds';
import hoursToMinutes from './hoursToMinutes';

const MILLISECONDS_IN_ONE_DAY = secondsToMilliseconds(minutesToSeconds(hoursToMinutes(HOURS_IN_ONE_DAY)));

/**
 * Cycle milliseconds within one day
 *
 * @param {number} milliseconds Milliseconds
 * @returns {number} Milliseconds
 *
 * @example
 * normalizeCycledMilliseconds((24 * 60 * 60 * 1000) + 5000);
 * //=> 5000
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

export default normalizeCycledMilliseconds;
