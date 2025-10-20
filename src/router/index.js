// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import ProductOverviewsPage from '../components/ProductOverviewsPage.vue';
import ProductCheckoutPage from '../components/ProductCheckoutPage.vue';
import ShopStorePage from '../components/ShopStorePage.vue';

const routes = [
  { path: '/', component: ProductOverviewsPage },
  { path: '/checkout', component: ProductCheckoutPage },
  { path: '/store-details', component: ShopStorePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
