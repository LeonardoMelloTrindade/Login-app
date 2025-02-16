<template>
  <main class="container">
    <section class="container-login">
      <slot name="container-login"></slot>
    </section>
    <section class="container-img">
      <slot name="container-img"></slot>
    </section>
  </main>
</template>

<script lang="ts">

export default {
  name: 'AuthWrapper',
};
</script>

<style scoped>
  .container {
    display: grid;
    grid-template-columns: 35% 55%;
    height: 99.8vh;
  }

  .container-img {
    display: flex;
    align-items: center;
    justify-content: center;
  }


</style>