import test from 'ava';
import { sum, diff } from '../index';

test('sum', (t) => {
  t.plan(3);
  t.is(sum(0, 0), 0);
  t.is(sum(3, 4), 7);
  t.is(sum(-5, 10), 5);
});

test('diff', (t) => {
  t.plan(4);
  t.is(diff(0, 0), 0);
  t.is(diff(5, 5), 0);
  t.is(diff(10, 5), 5);
  t.is(sum(-5, -10), -15);
});
