<template>
  <main class="form-container">
    <header>
      <slot name="header"></slot>
    </header>
    <section>
      <slot></slot>
    </section>
  </main>
</template>

<script lang="ts">

export default {
  name: 'AuthFormWrapper',
};

</script>

<style scoped>
  .form-container {
    height: 99.8vh;
    background-color: #4E5BEE;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 144px 0;
  }

</style>