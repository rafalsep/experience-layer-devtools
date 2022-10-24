import formatBytes from '../formatBytes';

test('should format bytes correctly', () => {
  const result = formatBytes(124);
  expect(result).toBe('124 bytes');
});

test('should format KB correctly', () => {
  const result = formatBytes(5235);
  expect(result).toBe('5.11 KB');
});

test('should format MB correctly', () => {
  const result = formatBytes(5414900);
  expect(result).toBe('5.16 MB');
});
