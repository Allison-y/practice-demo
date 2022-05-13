import { PdRouteRecordRaw } from "..";
import { DASHBOARD, HOME } from "../config";

const dashboardRoute: PdRouteRecordRaw = {
  ...HOME,
  redirect: DASHBOARD.path,
  meta: { title:'首页', sort:1, unfold:true },
  // component: Layout
  children: [
    {
      ...DASHBOARD,
      component: () => import('views/dashboard/index.vue'),
      meta:{ title:'首页', icon:'' }
    }
  ]  
}