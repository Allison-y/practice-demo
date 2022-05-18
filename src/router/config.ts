export const LOGIN = { path: '/login', name: 'Login' };
export const NOT_FOUNT_PAGE = { path: '/:pathMatch(.*)*', name: 'NotFoundPage' };
export const NOT_FOUNT = { path: '/notFound', name: 'NotFound' };

export const HOME = { path: '/', name: 'Home' };
export const DASHBOARD = { path: HOME.path + 'dashboard', name: 'Dashboard' };
