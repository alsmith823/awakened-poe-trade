import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "price-check" */ './price-check/PriceCheckWindow.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import(/* webpackChunkName: "settings" */ './settings/SettingsWindow.vue'),
      children: [
        {
          path: 'hotkeys',
          name: 'settings.hotkeys',
          component: () => import(/* webpackChunkName: "settings" */ './settings/hotkeys.vue')
        },
        {
          path: 'general',
          name: 'settings.general',
          component: () => import(/* webpackChunkName: "settings" */ './settings/general.vue')
        },
        {
          path: 'debug',
          name: 'settings.debug',
          component: () => import(/* webpackChunkName: "settings" */ './settings/debug.vue')
        }
      ]
    }
  ]
})
