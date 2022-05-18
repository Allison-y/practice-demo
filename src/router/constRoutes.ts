import { PdRouteRecordRaw } from '.';
import { LOGIN } from './config';

const constRoutes: PdRouteRecordRaw[] = [
  {
    ...LOGIN,
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
];

export default constRoutes;
