import {checkForURL} from '../client/js/URLChecker'

test('Validate URL', () => {
  expect(checkForURL(url)).toBe(true);
});

