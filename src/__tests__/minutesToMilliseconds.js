import test from 'ava';
import fn from '../minutesToMilliseconds';

test('test minutesToMilliseconds', t => {
  t.is(fn(0), 0);
  t.is(fn(1), 60000);
  t.is(fn(1.5), 90000);
});
