<script setup>
import HelloWorld from './components/__HelloWorld.vue';
import HeaderStackedFlyoutMenu from './components/HeaderStackedFlyoutMenu.vue';
import ProductOverviews from './components/ProductOverviews.vue';

</script>

<template>
  <HeaderStackedFlyoutMenu />

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

/* Old code coming with init */
/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
