<script setup>
import StoreNavigator from './components/StoreNavigator.vue';
</script>

<template>  
  <StoreNavigator />

  <main>
    <router-view></router-view>
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