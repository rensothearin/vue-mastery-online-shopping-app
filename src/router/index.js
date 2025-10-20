// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import ProductForMenOverviewsPage from '../components/ProductForMenOverviewsPage.vue';
import ProductForWomenOverviewsPage from '../components/ProductForWomenOverviewsPage.vue';
import ProductCheckoutPage from '../components/ProductCheckoutPage.vue';
import ShopStorePage from '../components/ShopStorePage.vue';

const routes = [
  { path: '/women', component: ProductForWomenOverviewsPage },
  { path: '/men', component: ProductForMenOverviewsPage },
  { path: '/checkout', component: ProductCheckoutPage },
  { path: '/store-details', component: ShopStorePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
