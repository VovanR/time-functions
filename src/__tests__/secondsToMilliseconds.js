import test from 'ava';
import fn from '../secondsToMilliseconds';

test('test secondsToMilliseconds', t => {
  t.is(fn(0), 0);
  t.is(fn(1), 1000);
});
