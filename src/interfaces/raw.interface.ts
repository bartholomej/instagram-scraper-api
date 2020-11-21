/* eslint-disable */
// Generated mock data
export interface RootObject {
  config: Config;
  country_code: string;
  language_code: string;
  locale: string;
  entry_data: Entrydata;
  hostname: string;
  is_whitelisted_crawl_bot: boolean;
  connection_quality_rating: string;
  deployment_stage: string;
  platform: string;
  nonce: string;
  mid_pct: number;
  zero_data: Zerodata;
  cache_schema_version: number;
  server_checks: Zerodata;
  knobx: Knobx;
  to_cache: Tocache;
  device_id: string;
  browser_push_pub_key: string;
  encryption: Encryption;
  is_dev: boolean;
  signal_collection_config?: any;
  rollout_hash: string;
  bundle_variant: string;
  frontend_env: string;
}

interface Encryption {
  key_id: string;
  public_key: string;
  version: string;
}

interface Tocache {
  gatekeepers: Gatekeepers;
  qe: Qe;
  probably_has_app: boolean;
  cb: boolean;
}

interface Qe {
  '0': _0;
  '12': _12;
  '13': _13;
  '16': _13;
  '21': _21;
  '22': _22;
  '23': _23;
  '25': _25;
  '26': _26;
  '28': _13;
  '29': _25;
  '31': _25;
  '33': _25;
  '34': _13;
  '36': _36;
  '37': _13;
  '39': _39;
  '41': _41;
  '42': _13;
  '43': _43;
  '44': _44;
  '45': _45;
  '46': _13;
  '47': _47;
  '49': _13;
  '50': _13;
  '54': _13;
  '58': _58;
  '59': _13;
  '62': _13;
  '67': _67;
  '69': _13;
  '71': _71;
  '72': _72;
  '73': _13;
  '74': _74;
  '75': _13;
  '77': _77;
  '80': _80;
  '84': _84;
  '85': _85;
  '87': _13;
  '93': _13;
  '95': _25;
  '98': _77;
  '100': _13;
  '101': _23;
  '108': _23;
  '109': _25;
  '111': _23;
  '113': _113;
  '117': _117;
  '118': _43;
  '119': _13;
  '121': _13;
  '122': _13;
  '123': _43;
  '124': _124;
  '125': _13;
  '127': _43;
  '128': _23;
  '129': _129;
  '131': _131;
  '132': _13;
  '135': _135;
  '137': _25;
  '141': _43;
  '142': _13;
  '143': _143;
  '145': _25;
  '146': _117;
  '148': _148;
  '149': _117;
  '150': _150;
  '151': _148;
  '152': _152;
  '153': _13;
  '154': _13;
  app_upsell: Appupsell;
  igl_app_upsell: Appupsell;
  notif: Appupsell;
  onetaplogin: Appupsell;
  felix_clear_fb_cookie: Appupsell;
  felix_creation_duration_limits: Appupsell;
  felix_creation_fb_crossposting: Appupsell;
  felix_creation_fb_crossposting_v2: Appupsell;
  felix_creation_validation: Appupsell;
  post_options: Appupsell;
  sticker_tray: Appupsell;
  web_sentry: Appupsell;
}

interface Appupsell {
  g: string;
  p: Zerodata;
}

interface _152 {
  p: P31;
  l: P31;
  qex: boolean;
}

interface P31 {
  '1': boolean;
  '2': boolean;
  '3': boolean;
}

interface _150 {
  p: P30;
  l: Zerodata;
  qex: boolean;
}

interface P30 {
  '0': boolean;
  '1': number;
  '3': boolean;
}

interface _148 {
  p: P29;
  l: Zerodata;
  qex: boolean;
}

interface P29 {
  '0': boolean;
  '1': boolean;
  '3': boolean;
}

interface _143 {
  p: P28;
  l: P20;
  qex: boolean;
}

interface P28 {
  '1': boolean;
  '2': boolean;
  '3': boolean;
  '4': boolean;
}

interface _135 {
  p: P27;
  l: Zerodata;
  qex: boolean;
}

interface P27 {
  '0': boolean;
  '1': boolean;
  '2': boolean;
  '3': boolean;
}

interface _131 {
  p: P26;
  l: Zerodata;
  qex: boolean;
}

interface P26 {
  '2': boolean;
  '3': boolean;
  '4': boolean;
}

interface _129 {
  p: P18;
  l: Zerodata;
  qex: boolean;
}

interface _124 {
  p: P25;
  l: Zerodata;
  qex: boolean;
}

interface P25 {
  '0': boolean;
  '1': boolean;
  '2': boolean;
  '3': boolean;
  '4': boolean;
  '5': string;
  '6': string;
}

interface _117 {
  p: P3;
  l: P3;
  qex: boolean;
}

interface _113 {
  p: P24;
  l: Zerodata;
  qex: boolean;
}

interface P24 {
  '0': boolean;
  '1': boolean;
  '2': boolean;
  '4': boolean;
  '5': boolean;
  '7': boolean;
  '8': boolean;
}

interface _85 {
  p: P23;
  l: Zerodata;
  qex: boolean;
}

interface P23 {
  '0': boolean;
  '1': string;
}

interface _84 {
  p: P22;
  l: Zerodata;
  qex: boolean;
}

interface P22 {
  '0': boolean;
  '1': boolean;
  '2': boolean;
  '3': boolean;
  '4': boolean;
  '5': boolean;
  '6': boolean;
  '8': boolean;
}

interface _80 {
  p: P21;
  l: Zerodata;
  qex: boolean;
}

interface P21 {
  '3': boolean;
  '4': boolean;
}

interface _77 {
  p: P20;
  l: Zerodata;
  qex: boolean;
}

interface P20 {
  '1': boolean;
}

interface _74 {
  p: P19;
  l: Zerodata;
  qex: boolean;
}

interface P19 {
  '1': boolean;
  '2': boolean;
  '3': boolean;
  '4': boolean;
  '7': boolean;
  '9': boolean;
  '13': boolean;
  '15': boolean;
}

interface _72 {
  p: P18;
  l: P18;
  qex: boolean;
}

interface P18 {
  '1': boolean;
  '2': boolean;
}

interface _71 {
  p: P17;
  l: Zerodata;
  qex: boolean;
}

interface P17 {
  '1': string;
}

interface _67 {
  p: P16;
  l: Zerodata;
  qex: boolean;
}

interface P16 {
  '0': boolean;
  '1': boolean;
  '2': boolean;
  '3': boolean;
  '4': boolean;
  '5': boolean;
  '7': boolean;
}

interface _58 {
  p: P15;
  l: Zerodata;
  qex: boolean;
}

interface P15 {
  '0': number;
  '1': boolean;
}

interface _47 {
  p: P14;
  l: Zerodata;
  qex: boolean;
}

interface P14 {
  '0': boolean;
  '1': boolean;
  '2': boolean;
  '3': boolean;
  '9': boolean;
  '10': boolean;
  '11': boolean;
}

interface _45 {
  p: P13;
  l: L;
  qex: boolean;
}

interface L {
  '57': boolean;
}

interface P13 {
  '13': boolean;
  '17': number;
  '32': boolean;
  '35': boolean;
  '36': string;
  '37': boolean;
  '38': boolean;
  '40': string;
  '46': boolean;
  '47': boolean;
  '49': boolean;
  '52': boolean;
  '53': boolean;
  '55': boolean;
  '56': string;
  '57': boolean;
  '58': boolean;
  '59': boolean;
  '60': string;
  '61': string;
  '62': string;
  '64': boolean;
  '65': boolean;
  '66': number;
  '67': boolean;
}

interface _44 {
  p: P12;
  l: Zerodata;
  qex: boolean;
}

interface P12 {
  '1': string;
  '2': number;
}

interface _43 {
  p: P11;
  l: Zerodata;
  qex: boolean;
}

interface P11 {
  '0': boolean;
  '1': boolean;
  '2': boolean;
}

interface _41 {
  p: P10;
  l: Zerodata;
  qex: boolean;
}

interface P10 {
  '3': boolean;
}

interface _39 {
  p: P9;
  l: Zerodata;
  qex: boolean;
}

interface P9 {
  '0': boolean;
  '8': boolean;
  '14': boolean;
}

interface _36 {
  p: P8;
  l: Zerodata;
  qex: boolean;
}

interface P8 {
  '0': boolean;
  '1': boolean;
  '2': boolean;
  '3': boolean;
  '4': boolean;
}

interface _26 {
  p: P7;
  l: Zerodata;
  qex: boolean;
}

interface P7 {
  '0': string;
}

interface _25 {
  p: Zerodata;
  l: Zerodata;
  qex: boolean;
}

interface _23 {
  p: P6;
  l: Zerodata;
  qex: boolean;
}

interface P6 {
  '0': boolean;
  '1': boolean;
}

interface _22 {
  p: P5;
  l: Zerodata;
  qex: boolean;
}

interface P5 {
  '2': number;
  '3': number;
  '4': number;
  '10': number;
  '11': number;
  '12': number;
  '13': boolean;
}

interface _21 {
  p: P4;
  l: Zerodata;
  qex: boolean;
}

interface P4 {
  '2': boolean;
}

interface _13 {
  p: P3;
  l: Zerodata;
  qex: boolean;
}

interface P3 {
  '0': boolean;
}

interface _12 {
  p: P2;
  l: Zerodata;
  qex: boolean;
}

interface P2 {
  '0': number;
}

interface _0 {
  p: P;
  l: Zerodata;
  qex: boolean;
}

interface P {
  '9': boolean;
}

interface Gatekeepers {
  '4': boolean;
  '5': boolean;
  '6': boolean;
  '7': boolean;
  '8': boolean;
  '9': boolean;
  '10': boolean;
  '11': boolean;
  '12': boolean;
  '13': boolean;
  '14': boolean;
  '15': boolean;
  '16': boolean;
  '18': boolean;
  '19': boolean;
  '23': boolean;
  '24': boolean;
  '26': boolean;
  '27': boolean;
  '28': boolean;
  '29': boolean;
  '31': boolean;
  '32': boolean;
  '34': boolean;
  '35': boolean;
  '38': boolean;
  '40': boolean;
  '41': boolean;
  '43': boolean;
  '59': boolean;
  '61': boolean;
  '62': boolean;
  '63': boolean;
  '64': boolean;
  '65': boolean;
  '67': boolean;
  '68': boolean;
  '69': boolean;
  '71': boolean;
  '73': boolean;
  '74': boolean;
  '75': boolean;
  '78': boolean;
  '79': boolean;
  '81': boolean;
  '82': boolean;
  '84': boolean;
  '86': boolean;
  '91': boolean;
  '95': boolean;
  '97': boolean;
  '100': boolean;
  '101': boolean;
  '102': boolean;
  '103': boolean;
  '104': boolean;
  '105': boolean;
  '106': boolean;
  '107': boolean;
  '108': boolean;
  '112': boolean;
  '113': boolean;
  '114': boolean;
  '116': boolean;
  '119': boolean;
  '120': boolean;
  '123': boolean;
  '128': boolean;
  '131': boolean;
  '132': boolean;
  '137': boolean;
  '140': boolean;
  '142': boolean;
  '146': boolean;
  '147': boolean;
  '149': boolean;
  '150': boolean;
  '151': boolean;
  '152': boolean;
  '153': boolean;
  '154': boolean;
  '156': boolean;
  '157': boolean;
  '158': boolean;
  '159': boolean;
  '160': boolean;
  '162': boolean;
  '164': boolean;
  '166': boolean;
  '167': boolean;
  '168': boolean;
  '169': boolean;
  '170': boolean;
  '171': boolean;
  '173': boolean;
  '174': boolean;
  '175': boolean;
  '178': boolean;
  '179': boolean;
  '180': boolean;
  '181': boolean;
  '185': boolean;
  '186': boolean;
  '187': boolean;
  '188': boolean;
  '190': boolean;
  '191': boolean;
  '192': boolean;
  '193': boolean;
  '195': boolean;
  '196': boolean;
  '197': boolean;
  '198': boolean;
  '199': boolean;
  '200': boolean;
  '201': boolean;
  '203': boolean;
  '204': boolean;
  '206': boolean;
  '208': boolean;
}

interface Knobx {
  '4': boolean;
  '17': boolean;
  '20': boolean;
  '22': boolean;
  '23': boolean;
  '24': boolean;
  '25': boolean;
  '26': boolean;
  '27': boolean;
  '29': boolean;
  '32': boolean;
  '34': boolean;
  '35': boolean;
  '38': number;
  '39': boolean;
  '40': boolean;
}

interface Zerodata {}

interface Entrydata {
  ProfilePage: ProfilePage[];
}

interface ProfilePage {
  logging_page_id: string;
  show_suggested_profiles: boolean;
  show_follow_dialog: boolean;
  graphql: Graphql;
  toast_content_on_load?: any;
  show_view_shop: boolean;
  profile_pic_edit_sync_props?: any;
}

interface Graphql {
  user: RootUser;
}

export interface RootUser {
  biography: string;
  blocked_by_viewer: boolean;
  restricted_by_viewer?: any;
  country_block: boolean;
  external_url: string;
  external_url_linkshimmed: string;
  edge_followed_by: Edgefollowedby;
  followed_by_viewer: boolean;
  edge_follow: Edgefollowedby;
  follows_viewer: boolean;
  full_name: string;
  has_ar_effects: boolean;
  has_clips: boolean;
  has_guides: boolean;
  has_channel: boolean;
  has_blocked_viewer: boolean;
  highlight_reel_count: number;
  has_requested_viewer: boolean;
  id: string;
  is_business_account: boolean;
  is_joined_recently: boolean;
  business_category_name?: any;
  overall_category_name?: any;
  category_enum?: any;
  is_private: boolean;
  is_verified: boolean;
  edge_mutual_followed_by: Edgemutualfollowedby;
  profile_pic_url: string;
  profile_pic_url_hd: string;
  requested_by_viewer: boolean;
  username: string;
  connected_fb_page?: any;
  edge_felix_video_timeline: Edgefelixvideotimeline;
  edge_owner_to_timeline_media: Edgeownertotimelinemedia;
  edge_saved_media: Edgesavedmedia;
  edge_media_collections: Edgesavedmedia;
  edge_related_profiles: Edgemediatotaggeduser;
}

interface Edgesavedmedia {
  count: number;
  page_info: Pageinfo2;
  edges: any[];
}

interface Pageinfo2 {
  has_next_page: boolean;
  end_cursor?: any;
}

interface Edgeownertotimelinemedia {
  count: number;
  page_info: Pageinfo;
  edges: Edge5[];
}

interface Edge5 {
  node: Node5;
}

interface Node5 {
  __typename: string;
  id: string;
  shortcode: string;
  dimensions: Dimensions;
  display_url: string;
  edge_media_to_tagged_user: Edgemediatotaggeduser2;
  fact_check_overall_rating?: any;
  fact_check_information?: any;
  gating_info?: any;
  sharing_friction_info: Sharingfrictioninfo;
  media_overlay_info?: any;
  media_preview?: string;
  owner: Owner;
  is_video: boolean;
  accessibility_caption?: string;
  dash_info?: Dashinfo;
  has_audio?: boolean;
  tracking_token?: string;
  video_url?: string;
  video_view_count?: number;
  edge_media_to_caption: Edgemediatocaption;
  edge_media_to_comment: Edgefollowedby;
  comments_disabled: boolean;
  taken_at_timestamp: number;
  edge_liked_by: Edgefollowedby;
  edge_media_preview_like: Edgefollowedby;
  location?: Location;
  thumbnail_src: string;
  thumbnail_resources: Thumbnailresource[];
  felix_profile_grid_crop?: any;
  product_type?: string;
  edge_sidecar_to_children?: Edgesidecartochildren;
}

interface Edgesidecartochildren {
  edges: Edge4[];
}

interface Edge4 {
  node: Node4;
}

interface Node4 {
  __typename: string;
  id: string;
  shortcode: string;
  dimensions: Dimensions;
  display_url: string;
  edge_media_to_tagged_user: Edgemediatotaggeduser3;
  fact_check_overall_rating?: any;
  fact_check_information?: any;
  gating_info?: any;
  sharing_friction_info: Sharingfrictioninfo;
  media_overlay_info?: any;
  media_preview: string;
  owner: Owner;
  is_video: boolean;
  accessibility_caption?: string | string;
  dash_info?: Dashinfo;
  has_audio?: boolean;
  tracking_token?: string;
  video_url?: string;
  video_view_count?: number;
}

interface Edgemediatotaggeduser3 {
  edges: (Edge3 | Edge3)[];
}

interface Location {
  id: string;
  has_public_page: boolean;
  name: string;
  slug: string;
}

interface Edgemediatotaggeduser2 {
  edges: Edge3[];
}

interface Edge3 {
  node: Node3;
}

interface Node3 {
  user: User;
  x: number;
  y: number;
}

interface User {
  full_name: string;
  id: string;
  is_verified: boolean;
  profile_pic_url: string;
  username: string;
}

interface Edgefelixvideotimeline {
  count: number;
  page_info: Pageinfo;
  edges: Edge2[];
}

interface Edge2 {
  node: Node2;
}

interface Node2 {
  __typename: string;
  id: string;
  shortcode: string;
  dimensions: Dimensions;
  display_url: string;
  edge_media_to_tagged_user: Edgemediatotaggeduser;
  fact_check_overall_rating?: any;
  fact_check_information?: any;
  gating_info?: any;
  sharing_friction_info: Sharingfrictioninfo;
  media_overlay_info?: any;
  media_preview?: string;
  owner: Owner;
  is_video: boolean;
  accessibility_caption?: any;
  dash_info: Dashinfo;
  has_audio: boolean;
  tracking_token: string;
  video_url: string;
  video_view_count: number;
  edge_media_to_caption: Edgemediatocaption;
  edge_media_to_comment: Edgefollowedby;
  comments_disabled: boolean;
  taken_at_timestamp: number;
  edge_liked_by: Edgefollowedby;
  edge_media_preview_like: Edgefollowedby;
  location?: any;
  thumbnail_src: string;
  thumbnail_resources: Thumbnailresource[];
  felix_profile_grid_crop?: Felixprofilegridcrop;
  encoding_status?: any;
  is_published: boolean;
  product_type: string;
  title: string;
  video_duration: number;
}

interface Felixprofilegridcrop {
  crop_left: number;
  crop_right: number;
  crop_top: number;
  crop_bottom: number;
}

interface Thumbnailresource {
  src: string;
  config_width: number;
  config_height: number;
}

interface Edgemediatocaption {
  edges: Edge[];
}

interface Edge {
  node: Node;
}

interface Node {
  text: string;
}

interface Dashinfo {
  is_dash_eligible: boolean;
  video_dash_manifest?: any;
  number_of_qualities: number;
}

interface Owner {
  id: string;
  username: string;
}

interface Sharingfrictioninfo {
  should_have_sharing_friction: boolean;
  bloks_app_url?: any;
}

interface Edgemediatotaggeduser {
  edges: any[];
}

interface Dimensions {
  height: number;
  width: number;
}

interface Pageinfo {
  has_next_page: boolean;
  end_cursor: string;
}

interface Edgemutualfollowedby {
  count: number;
  edges: any[];
}

interface Edgefollowedby {
  count: number;
}

interface Config {
  csrf_token: string;
  viewer?: any;
  viewerId?: any;
}
