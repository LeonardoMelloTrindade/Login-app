<template>
  <LoginContainer>
    <template #container-login>
      Componente Login
    </template>
    <template #container-img>
      Componente img
    </template>
  </LoginContainer>
</template>

<script lang="ts">
import LoginContainer from '@/components/container/LoginContainer.vue';

export default {
  name: 'LoginView',
  components: {
    LoginContainer
  }
};
</script>
