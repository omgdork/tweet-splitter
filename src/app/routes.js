import Home from './modules/home';
import Notifications from './modules/notifications';

const routes = [
  {
    name: 'Home',
    component: Home,
    path: '/',
    exact: true,
  },
  {
    name: 'Notifications',
    component: Notifications,
    path: '/notifications',
  },
];

export default routes;
