import { useRoutes } from 'react-router-dom';
import Freelancers from './Freelancers';
import MainPage from '../protected/MainPage';
import Login from '../auth/Login';
import Signup from '../auth/Signup';
import { RequireAuth } from '../auth/authHelpers';
import Freelancer from './Freelancer';
import Addfreelancer from './Addfreelancer';
import Reserve from './Reserve';

const MyRoutes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <MainPage />,
      children: [
        {
          index: true,
          element: <Freelancers />,
        },
        {
          path: '/details/:id',
          element: <div><Freelancer /></div>,
        },
        {
          path: '/reserve/:freelancer_id?',
          element: <RequireAuth><Reserve /></RequireAuth>,
        },
        {
          path: '/myreservation',
          element: <RequireAuth><div>Link to my reservation</div></RequireAuth>,
        },
        {
          path: '/addfreelancer',
          element: <RequireAuth><Addfreelancer /></RequireAuth>,
        },
        {
          path: '/deletefreelancer',
          element: <RequireAuth><div>Link to Delete Freelancer</div></RequireAuth>,
        },
        {
          path: '/logout',
          element: <div>Logout</div>,
        },
        {
          path: '*',
          element: <div>Page not found</div>,
        },
      ],
    },
    {
      path: '/signin',
      element: <Login />,
    },
    {
      path: '/signup',
      element: <Signup />,
    },
  ]);

  return routes;
};

export default MyRoutes;
