[![npm version](https://badge.fury.io/js/node-instagram-api.svg)](https://badge.fury.io/js/node-instagram-api)
[![Package License](https://img.shields.io/npm/l/node-instagram-api.svg)](https://www.npmjs.com/node-instagram-api)
[![Build & Publish](https://github.com/bartholomej/node-instagram-api/workflows/Build%20&%20Publish/badge.svg)](https://github.com/bartholomej/node-instagram-api/actions)
[![codecov](https://codecov.io/gh/bartholomej/node-instagram-api/branch/master/graph/badge.svg?token=YQH9UoVrGP)](https://codecov.io/gh/bartholomej/node-instagram-api)

# Instagram API

> Tiny NPM library for getting public user's profile and posts.
>
> - No API key needed!
> - No registration needed
> - Browser + Node.js (SSR) support
> - TypeScript 100%

## Install

via yarn

```bash
yarn add node-instagram-api
```

via npm

```bash
npm install node-instagram-api --save
```

## Usage

Get latest posts from [Will Smith](https://www.instagram.com/willsmith)

```javascript
import { instagram } from 'node-instagram-api';

instagram.user('willsmith').then((user) => console.log(user));
```

#### Results

```javascript
{
  id: '3132929984',
  category: null,
  fullName: 'Will Smith',
  bio: 'New playground. Same kid from West Philly.⁣⁣⁣',
  website: 'https://fb.me/RTTWillTakeover',
  followersCount: 50410933,
  followingsCount: 185,
  isPrivate: false,
  isVerified: true,
  avatar: 'https://scontent-prg1-1.cdninstagram.com/v/t51.2885-19/s320x320/126947726_281263379986327_6281262352239007520_n.jpg?_nc_ht=scontent-prg1-1.cdninstagram.com&_nc_ohc=47FwFhMeHegAX_G_Efc&tp=1&oh=cb0674289129567814e591e1256131d2&oe=5FE33AAD',
  fbPage: null,
  postsCount: 1052,
  posts: [
    {
      id: '2447030206582756101',
      shortcode: 'CH1mQIKBBMF',
      photo: 'https://scontent-prg1-1.cdninstagram.com/v/t51.2885-15/e35/126151383_156030889537953_5358114580816397186_n.jpg?_nc_ht=scontent-prg1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=SQAb3GhyBBwAX-KcYjc&tp=1&oh=07d2403de4db567647310872a81ab83f&oe=5FBB2897',
      isVideo: true,
      description: 'This is why nobody lets me cook. #FreshPrinceReunion',
      commentsCount: 6217,
      likesCount: 1334788,
      time: 1605928764,
      location: undefined
    },
    {
      id: '2446931950146244085',
      shortcode: 'CH1P6TuBU31',
      photo: 'https://scontent-prg1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/126838948_202552767996560_4560560924720673_n.jpg?_nc_ht=scontent-prg1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=doGn1dkB44gAX84lb7d&tp=1&oh=4c68a21d7f75a808b9ca21dac476554d&oe=5FE070D8',
      isVideo: false,
      description: 'Can’t Viv with ‘em, can’t Viv without ‘em! :-) #FreshPrinceReunion',
      commentsCount: 6396,
      likesCount: 1320494,
      time: 1605917041,
      location: undefined
    }
  ]
}
```

### More

Work in progress...

## Development

I welcome you to customize this according to your needs ;)

Pull requests for any improvements would be great!

### Developing and debugging this library

```bash
git clone git@github.com:bartholomej/node-instagram-api.git
cd node-instagram-api
yarn
yarn start
```

#### Run demo locally

You can find and modify it in [`./demo.ts`](./demo.ts) file

```bash
yarn demo
```

## Donation

If this project have helped you save time please consider [making a donation](https://github.com/sponsors/bartholomej) for some 🍺 or 🍵 ;)

## Privacy Policy

I DO NOT STORE ANY DATA. PERIOD.

I physically can't. I have nowhere to store it. I don't even have a server database to store it. So even if Justin Bieber asked nicely to see your data, I wouldn't have anything to show him.

That's why, with this library, what happens on your device stays on your device till disappear.

## License

Copyright &copy; 2020 [Lukas Bartak](http://bartweb.cz)

Proudly powered by nature 🗻, wind 💨, tea 🍵 and beer 🍺 ;)

All contents are licensed under the [MIT license].

[mit license]: LICENSE
