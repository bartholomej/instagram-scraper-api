import { getUserData, scrapeUser, transformData } from '../src/helpers/user.helper';
import { RootObject, RootUser } from '../src/interfaces/raw.interface';
import { InstagramUser } from '../src/interfaces/user.interface';
import { htmlMock } from './mocks/html-mock';
import * as userMock from './mocks/user-mock.json';

describe('Get UserData', () => {
  let user: InstagramUser = null;
  beforeAll(async () => {
    user = getUserData(userMock as RootObject);
  });

  test('Full name', () => {
    expect(user.fullName).toEqual<string>('Will Smith');
  });
  test('Any posts', () => {
    expect(user.posts.length).toBeGreaterThan(1);
  });
});

describe('Transform data', () => {
  let user: InstagramUser = null;
  beforeAll(async () => {
    user = transformData(userMock.entry_data.ProfilePage[0].graphql.user as RootUser);
  });

  test('Full name', () => {
    expect(user.fullName).toEqual<string>('Will Smith');
  });
  test('Any posts', () => {
    expect(user.posts.length).toBeGreaterThan(1);
  });
});

describe('Scrape user data', () => {
  let rootObject: RootObject = null;
  beforeAll(async () => {
    rootObject = scrapeUser(htmlMock as string);
  });

  test('Full name', () => {
    expect(rootObject.country_code).toEqual<string>('CZ');
  });

  test('Any posts', () => {
    expect(rootObject.entry_data.ProfilePage[0].graphql.user.full_name).toEqual('Will Smith');
  });

  test('Malformed page', () => {
    expect(() => {
      scrapeUser(`<html></html>`);
    }).toThrowError('node-instagram-api: Scraping error');
  });
});
