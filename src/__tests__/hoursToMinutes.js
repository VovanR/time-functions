import test from 'ava';
import fn from '../hoursToMinutes';

test('test hoursToMinutes', t => {
  t.is(fn(0), 0);
  t.is(fn(1), 60);
  t.is(fn(1.5), 90);
  t.is(fn(2), 120);
});
