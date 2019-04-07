import test from 'ava';
import fn from '../parseMillisecondsToTime';

test('test parseMillisecondsToTime', t => {
  t.deepEqual(fn(((1 * 60) + 15) * 60 * 1000), {hours: 1, minutes: 15});
});
