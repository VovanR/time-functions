const {
  MILLISECONDS_IN_ONE_SECOND
} = require('./constants');

/**
 * @param {number} milliseconds
 * @returns {number} seconds
 *
 * @example
 * millisecondsToSeconds(1000);
 * //=> 1
 */
module.exports = function (milliseconds) {
  return milliseconds / MILLISECONDS_IN_ONE_SECOND;
};
