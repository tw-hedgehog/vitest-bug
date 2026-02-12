import { assert, expect, test, vi } from 'vitest';
import { magicNumber } from './basic.js';

vi.mock('./module.ts', () => ({ testConst: 20 }));

test('module with space', () => {
  expect(magicNumber(4)).toBe(80);
});
