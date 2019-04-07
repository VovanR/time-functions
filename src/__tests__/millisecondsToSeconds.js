import test from 'ava';
import fn from '../millisecondsToSeconds';

test('test millisecondsToSeconds', t => {
  t.is(fn(1000), 1);
  t.is(fn(3000), 3);
});
