<script setup>
import HeaderStackedFlyoutMenu from './components/HeaderStackedFlyoutMenu.vue';
import ProductOverviews from './components/ProductOverviews.vue';
import StoreNavigator from './components/StoreNavigator.vue';

</script>

<template>
  <!-- This worked before -->
  <!-- <HeaderStackedFlyoutMenu /> -->
  
  <StoreNavigator />

  <main>
    <ProductOverviews />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

</style>
