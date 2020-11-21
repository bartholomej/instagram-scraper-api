import { fetchUser } from '../fetchers';
import { scrapeUser } from '../helpers/user.helper';
import { RootObject } from '../interfaces/raw.interface';

export class UserScraper {
  public async user(user: string): Promise<RootObject> {
    const response = await fetchUser(user);
    const userHtml = scrapeUser(response);
    return userHtml;
  }
}
