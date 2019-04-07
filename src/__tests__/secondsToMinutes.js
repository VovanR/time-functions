import test from 'ava';
import fn from '../secondsToMinutes';

test('test secondsToMinutes', t => {
  t.is(fn(0), 0);
  t.is(fn(60), 1);
  t.is(fn(90), 1.5);
});
