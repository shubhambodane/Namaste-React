import { useContext, useState } from 'react';
import { LOGO_URL } from './../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {
  const [btnName, setBtnName] = useState('Login');

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  // subscribing to store using selector
  const cartItems = useSelector((store) => store.cart.items);

  // console.log('Cart Items :', cartItems);

  return (
    <div
      className="flex justify-between bg-orange-50 shadow-lg m-2 sm:bg-yellow-300
    lg:bg-green-100"
    >
      <div>
        <Link to="/">
          <img className="w-56" alt="Namaste App" src={LOGO_URL}></img>
        </Link>
      </div>
      <div className="flex items-center ">
        <ul className="flex p-4 m-4">
          <li className=" px-4">
            Online Status : {onlineStatus ? '🟢' : '🔴'}
          </li>
          <li className="px-4 hover:text-blue-600 hover:underline cursor-pointer transition-colors">
            <Link to="/"> Home</Link>
          </li>
          <li className="px-4 hover:text-blue-600 hover:underline cursor-pointer transition-colors">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className=" px-4 hover:text-blue-600 hover:underline cursor-pointer transition-colors">
            <Link to="/about">About us</Link>
          </li>
          <li className=" px-4 hover:text-blue-600 hover:underline cursor-pointer transition-colors">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="font-bold px-4 hover:text-blue-600 hover:underline cursor-pointer transition-colors">
            <Link to="/cart"> Cart - {cartItems.length}</Link>
          </li>
          <button
            className="px-4 hover:text-blue-600 hover:underline cursor-pointer transition-colors"
            onClick={() => {
              btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login');
            }}
          >
            {btnName}
          </button>
          <li className=" px-4 hover:text-blue-600 hover:underline cursor-pointer transition-colors">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
