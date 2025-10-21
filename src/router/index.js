// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import ProductForMenOverviewsPage from '../views/ProductForMenOverviewsPage.vue';
import ProductForWomenOverviewsPage from '../views/ProductForWomenOverviewsPage.vue';
import ProductCheckoutPage from '../views/ProductCheckoutPage.vue';
import ShopStorePage from '../views/ShopStorePage.vue';
import Signin from '../views/Signin.vue';
import Signup from '../views/Signup.vue';
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
