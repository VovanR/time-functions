import test from 'ava';
import fn from '../minutesToSeconds';

test('test minutesToSeconds', t => {
  t.is(fn(0), 0);
  t.is(fn(1), 60);
  t.is(fn(1.5), 90);
});
