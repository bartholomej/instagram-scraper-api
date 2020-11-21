import { RootObject, RootUser } from '../interfaces/raw.interface';
import { InstagramPost, InstagramUser } from '../interfaces/user.interface';
import { userDataRegex } from '../vars';

export const scrapeUser = (html: string): RootObject => {
  let json = null;
  try {
    const dataString = html.match(userDataRegex)[1];
    json = JSON.parse(dataString);
  } catch (e) {
    console.error('Scraping error');
    return null;
  }
  return json;
};

export const getUserData = (data: RootObject): InstagramUser => {
  const userData = data?.entry_data?.ProfilePage[0]?.graphql?.user;
  const transformedData = transformData(userData);
  return transformedData;
};

export const transformData = (u: RootUser): InstagramUser => {
  const postsArray = u.edge_owner_to_timeline_media?.edges;
  let posts = null;

  if (postsArray && postsArray.length) {
    posts = postsArray.map((post) => {
      const p = post.node;
      return {
        id: p.id,
        shortcode: p.shortcode,
        photo: p.display_url,
        isVideo: p.is_video,
        description: p.edge_media_to_caption?.edges[0]?.node?.text || null,
        commentsCount: p.edge_media_to_comment?.count,
        likesCount: p.edge_liked_by?.count,
        time: p.taken_at_timestamp,
        location: p.location?.name || null
      } as InstagramPost;
    });
  }

  const user: InstagramUser = {
    id: u.id,
    fullName: u.full_name,
    bio: u.biography || null,
    avatar: u.profile_pic_url_hd,
    followersCount: u.edge_followed_by?.count,
    followingsCount: u.edge_follow?.count,
    website: u.external_url || null,
    isPrivate: u.is_private,
    isVerified: u.is_verified,
    fbPage: u.connected_fb_page || null,
    category: u.category_enum || null,
    postsCount: u.edge_owner_to_timeline_media?.count,
    posts: posts || []
  };
  return user;
};
