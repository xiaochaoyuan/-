import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    // redirect: '/dashboard/dashboardList',
    name:'Dashboard',
    meta: { title: '档案管理', icon: 'dashboard' },
    children: [
      {
      path: 'dashboardList',
      name: 'dashboardList',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '档案列表', icon: 'dashboard' }
    },
    {
      path: 'addList',
      name: 'addList',
      hidden: true,
      component: () => import('@/views/dashboard/addList'),
      meta: { title: '档案添加', icon: 'dashboard' }
    },
    {
      path: 'statistics',
      name: 'statistics',
      hidden: false,
      component: () => import('@/views/dashboard/statistics'),
      meta: { title: '档案统计', icon: 'dashboard' }
    },
    {
      path: 'detail',
      name: 'Detail',
      hidden: true,
      component: () => import('@/views/dashboard/detail'),
      meta: { title: '档案详情', icon: 'dashboard' }
    }
    ]
  },
  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: '系统设置', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '权限管理', }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '账号管理', }
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: '地址管理',
      icon: 'nested'
    },
    children: [
      {
        path: 'addressList',
        component: () => import('@/views/nested/index'), // Parent router-view
        name: 'addressList',
        meta: { title: '地址列表' },
      },
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: '地址添加' },
        hidden:true
      },

      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: '二级地址' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
