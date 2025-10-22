// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import ProductForMenOverviewsPage from '../views/ProductForMenOverview.vue';
import ProductForWomenOverviewsPage from '../views/ProductForWomenOverview.vue';
import ProductCheckoutPage from '../views/ProductCheckoutView.vue';
import ShopStorePage from '../views/ShopStoreView.vue';
import Signin from '../views/SigninView.vue';
import Signup from '../views/SignupView.vue';
import CompanyOverview from '@/views/CompanyOverview.vue';

const routes = [
  { path: '/women', component: ProductForWomenOverviewsPage },
  { path: '/men', component: ProductForMenOverviewsPage },
  { path: '/checkout', component: ProductCheckoutPage },
  { path: '/store-details', component: ShopStorePage },
  { path: '/signin', component: Signin },
  { path: '/signup', component: Signup },
  { path: '/company-overview', component: CompanyOverview },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
