import { instagram } from '../src';
import { InstagramUser } from '../src/interfaces/user.interface';

// Users
describe('Fetch Will Smith', () => {
  let user: InstagramUser;

  beforeAll(async () => {
    user = await instagram.user('willsmith');
  });

  test('Get `willsmith` id', async () => {
    expect(user.id).toEqual<string>('3132929984');
  });

  test('Check `willsmith` is not private', async () => {
    expect(user.isPrivate).toBeFalsy();
  });

  test('Check `willsmith` has more than 1000 posts', async () => {
    expect(user.postsCount).toBeGreaterThan(1000);
  });

  test('Check `willsmith` has some latest posts', async () => {
    expect(user.posts.length).toBeGreaterThan(10);
  });

  test("Check `willsmith's` first post has a photo", async () => {
    expect(user.posts[0].photo).toContain('https://');
  });

  test('Check `willsmith` has more than 20M followers', async () => {
    expect(user.followersCount).toBeGreaterThan(20_000_000);
  });

  test('Check `willsmith` has less than 500M followers', async () => {
    expect(user.followersCount).toBeLessThan(500_000_000);
  });
});
