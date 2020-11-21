import { userUrl } from '../src/vars';

describe('Vars', () => {
  test('Assemble user url', () => {
    const url = userUrl('willsmith');
    expect(url).toBe('https://www.instagram.com/willsmith');
  });
});
