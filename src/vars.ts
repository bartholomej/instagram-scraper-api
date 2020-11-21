export const userUrl = (user: string): string =>
  `https://www.instagram.com/${encodeURIComponent(user)}`;

export const userDataRegex = /window\._sharedData\s?=\s?({.+);\s?<\/script>/;
