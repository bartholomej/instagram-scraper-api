import { getUserData } from './helpers/user.helper';
import { InstagramUser } from './interfaces/user.interface';
import { UserScraper } from './services/user.service';

export class InstagramScraper {
  constructor(private userScraper: UserScraper) {}

  public async user(user: string): Promise<InstagramUser> {
    const data = await this.userScraper.user(user);
    return getUserData(data);
  }
}

const userService = new UserScraper();
export const instagram = new InstagramScraper(userService);
