export interface InstagramUser {
  id: string; // id
  category: string; // category_enum
  fullName: string; // full_name
  bio: string; // biography
  website: string; // external_url
  followersCount: number; // edge_followed_by.count
  followingsCount: number; // edge_follow.count
  isPrivate: boolean; // is_private
  isVerified: boolean; // is_verified
  avatar: string; // profile_pic_url_hd
  fbPage: string; // connected_fb_page
  postsCount: number;
  posts: InstagramPost[];
}

export interface InstagramPost {
  id: string; // id
  shortcode: string; // shotcode
  photo: string; // display_url
  isVideo: boolean; // is_video
  description: string; // edge_media_to_caption.edges[0].node.text
  commentsCount: number; // edge_media_to_comment.count
  likesCount: number; // edge_liked_by.count
  time: number; // taken_at_timestamp
  location: string; // location.name
}
