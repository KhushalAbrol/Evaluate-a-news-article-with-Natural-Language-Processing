import {checkForURL} from '../client/js/URLChecker'

test('Validate URL', () => {
  expect(checkForURL('https://review.udacity.com/#!/rubrics/2668/view')).toBe(true);
});

