import { useEffect, useState } from 'react';
import { GET_RESTAURANT_MENU } from './constants';

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url = GET_RESTAURANT_MENU(resId);
    const data = await fetch(url);
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};
export default useRestaurantMenu;
