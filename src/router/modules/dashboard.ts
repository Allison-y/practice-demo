import { PdRouteRecordRaw } from '..';
import * as routeConfig from '../config';
import Layout from '@/layout/index.vue';

const dashboardRoute: PdRouteRecordRaw = {
  ...routeConfig.HOME,
  redirect: routeConfig.DASHBOARD.path,
  meta: { title: '首页', sort: 1, unfold: true },
  component: Layout,
  children: [
    {
      ...routeConfig.DASHBOARD,
      component: () => import('@/views/dashboard/index.vue'),
      meta: { title: '首页', icon: '' }
    }
  ]
};

export default dashboardRoute;
