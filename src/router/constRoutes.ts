import { PdRouteRecordRaw } from '.'
import { LOGIN } from './config'

const constRoutes: PdRouteRecordRaw[] = [
  {
    ...LOGIN,
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录'
    }
  }
]

export default constRoutes
