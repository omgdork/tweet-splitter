import Home from './modules/home';
import Notifications from './modules/notifications';
import Test from './modules/test';

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
  {
    name: 'Test Route',
    component: Test,
    path: '/test',
  },
];

export default routes;
