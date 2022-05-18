import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
// import HomeView from '../views/HomeView.vue'
import constRoutes from './constRoutes';

// 根据模块自动化导入路由
const moduleFiles = require.context('./modules', true, /.ts$/);

export const moduleRoutes = moduleFiles
  .keys()
  .map(key => moduleFiles(key).default)
  .sort((a, b) => a.sort - b.sort);

// RouteRecordRaw vue-router内置类型
export type PdRouteRecordRaw = RouteRecordRaw & {
  name: string | symbol;
  meta?: PdRouteMate;
  children?: PdRouteRecordRaw[];
};

// const routes: Array<RouteRecordRaw> = [
//   {
//     path: '/',
//     name: 'home',
//     component: HomeView
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//   }
// ]

// createRouter 创建一个可以被Vue应用程序使用的路由实例  配置RouterOptions
const router = createRouter({
  history: createWebHistory(),
  routes: constRoutes.concat(moduleRoutes),
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) return savedPosition;

    if (to.matched.every((record, i) => from.matched[i] !== record)) {
      return { left: 0, top: 0 };
    }

    return false;
  }
});
console.log({ router });
export default router;
