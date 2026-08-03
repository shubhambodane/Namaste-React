const BASE_URL = 'https://namastedev.com/api/v1';
const GET_ALL_RESTAURANTS = `${BASE_URL}/listRestaurants`;
const GET_RESTAURANT_MENU = (resId) =>
  `${BASE_URL}/listRestaurantMenu/${resId}`;

const LOGO_URL =
  'https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png';
const CDN_URL =
  'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/';

export { LOGO_URL, CDN_URL, GET_ALL_RESTAURANTS, GET_RESTAURANT_MENU };
