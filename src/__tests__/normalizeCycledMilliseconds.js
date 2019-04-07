import test from 'ava';
import fn from '../normalizeCycledMilliseconds';

test('test normalizeCycledMilliseconds', t => {
  t.is(fn(0), 0);
  t.is(fn(1000), 1000);

  t.is(fn(-1000), 86399000);

  const millisecondsInOneDayAndMore = 24 * 60 * 60 * 1000;

  t.is(fn(millisecondsInOneDayAndMore + 1000), 1000);

  t.is(fn(-(millisecondsInOneDayAndMore + 1000)), 86399000);
});
