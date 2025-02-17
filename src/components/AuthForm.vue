<template>
  <AuthFormWrapper>
    <template #header>
      <img class="img-logo" src="../assets/logo-grab.svg" alt="Logo da empresa">
    </template>
    <template>
      <div class="form">
        <InputForm type="text" />
        <InputForm type="password" />
      </div>
    </template>
  </AuthFormWrapper>
</template>

<script lang="ts">
import AuthFormWrapper from './container/AuthFormWrapper.vue';
import InputForm from './InputForm.vue';

export default {
  name: 'AuthForm',
  components: {
    AuthFormWrapper,
    InputForm,
  }
};

</script>

<style scoped>
  .img-logo {
    width: 32vh;
  }
  div {
    display: flex;
    flex-direction: column;
  }
</style>