import { test } from 'bun:test';
import { strict as assert } from 'assert';
import { sum } from './index.js';

test('sum of 2 and 3 should be 5', () => {
  assert.equal(sum(2, 3), 5);
});

test('sum of -1 and 1 should be 0', () => {
  assert.equal(sum(-1, 1), 0);
});

test('sum of 0 and 0 should be 0', () => {
  assert.equal(sum(0, 0), 0);
});