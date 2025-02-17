<template>
  <AuthFormWrapper>
    <template #header>
      <img class="img-logo" src="../assets/logo-grab.svg" alt="Logo da empresa">
    </template>
    <template #form>


    </template>
  </AuthFormWrapper>
</template>

<script lang="ts">
import AuthFormWrapper from './container/AuthFormWrapper.vue';

export default {
  name: 'AuthForm',
  components: {
    AuthFormWrapper,
  }
};

</script>

<style scoped>
  .img-logo {
    width: 32vh;
  }
</style>