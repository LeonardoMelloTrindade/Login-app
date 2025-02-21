<template>
  <AuthFormWrapper>
    <template #header>
      <img class="img-logo" src="../assets/logo-grab.svg" alt="Logo da empresa">
    </template>
    <template>
      <div class="form">
        <InputForm type="text" :icon="iconEmail"/>
        <InputForm type="password" :icon="iconPassword"/>
        <button>
          Entrar
        </button>
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
  },
  data() {
    return {
      iconEmail: 'fa-solid fa-at',
      iconPassword: 'fa-solid fa-lock'
    };
  }
};

</script>

<style scoped>
  .img-logo {
    width: 32vh;
  }

  .form {
    display: flex;
    flex-direction: column;
  }
</style>