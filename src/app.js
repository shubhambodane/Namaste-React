import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, Outlet } from 'react-router';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import './index.css';
import UserContext from './utils/UserContext';
import { RouterProvider } from 'react-router/dom';

// Chunking
// Code splitting
// Dynamic Bundling
// Lazy loading
// On demand loading
// dynamic import

const Grocery = lazy(() => import('./components/Grocery'));
const About = lazy(() => import('./components/About'));
const AppLayout = () => {
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const data = {
      name: 'Shubham Bodane',
    };
    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Body />,
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/grocery',
        element: (
          <Suspense fallback={<p> Grocery Loading....</p>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: 'restaurants/:resId',
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
