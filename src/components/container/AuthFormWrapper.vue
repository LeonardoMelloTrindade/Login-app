<template>
  <main class="form-container">
    <header>
      <slot name="header"></slot>
    </header>
    <section>
      <slot name="form"></slot>
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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }

</style>