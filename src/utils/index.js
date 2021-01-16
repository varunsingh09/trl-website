import moment from 'moment';
const ACCESS_TOKEN_KEY = "trl";
const LOGIN_USER_ID = "userId";
const BEARER = "Bearer "

//const ACCESS_USER_ID = localStorage.getItem(LOGIN_USER_ID);
const ACCESS_USER_ID = 'Admin'
//const default_token = localStorage.getItem(ACCESS_TOKEN_KEY);
const default_token = ''

export const DATE_FORMAT = "YYYY-MM-DD HH:mm:ss"
export const AD_FLAG = false
export const IMAGE_PATH = `https://trlnews.com/`
export const EXT = `.jpg`
export const TRL_LOGO_PATH = `https://trlnews.com/images/1589219407_thump.jpg`
export const TRL_LOGO_NAME = `1589219407_thump.jpg`
export const TRL_WIRE_IMAGE_PATH =`http://35.154.84.221:2017/uploads/`;

export const MESSAGE_CLOSE_POP_TIMINGS = 2

export const ARTICLE_POST_DATE = moment().format("YYYY-MM-DD")
export const ARTICLE_POST_TIME = moment().format("HH:mm:ss");


export const TOKEN = default_token
export const USER_ID = ACCESS_USER_ID
export const CONTENT_TYPE = { "Content-Type": "application/json"};
export const CONTENT_TYPE_DEFAULT = { "Authorization": `${BEARER}${default_token}`, "Content-Type": "application/json","Access-Control-Allow-Origin": "http://www.trlwire.com","crossdomain": true };
export const CONTENT_TYPE_FILE = { "Authorization": `${BEARER}${default_token}`, "Content-Type": "multipart/form-data","Access-Control-Allow-Origin": "http://www.trlwire.com","crossdomain": true };



// export const login = (data) => {
//     localStorage.setItem(ACCESS_TOKEN_KEY, data.data !== undefined && data.data.token);
//     localStorage.setItem(LOGIN_USER_ID, data.data !== undefined && data.data.loginUserId);
//     window.location = "/admin/users/dashboard"

// }

// export const logout = () => {
//     localStorage.removeItem(ACCESS_TOKEN_KEY);
//     window.location = "/login"
// }

// export const isLogin = () => {
//     if (localStorage.getItem(ACCESS_TOKEN_KEY)) {
//         return true;
//     }

//     return false;
// }

// export const token = () => {
//     return localStorage.getItem(ACCESS_TOKEN_KEY);
// }


