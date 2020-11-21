import fetch from 'cross-fetch';
import { userUrl } from '../vars';

export const fetchUser = async (user: string): Promise<string> => {
  const url = userUrl(user);
  const response = await fetch(url);
  return await response.text();
};
