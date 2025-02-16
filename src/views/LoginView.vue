<template>
  <AuthWrapper>
    <template #container-login>
      Componente Login
    </template>
    <template #container-img>
      <AuthImage />
    </template>
  </AuthWrapper>
</template>

<script lang="ts">
import AuthWrapper from '@/components/container/AuthWrapper.vue';
import AuthImage from '@/components/AuthImage.vue';


export default {
  name: 'LoginView',
  components: {
    AuthWrapper,
    AuthImage
  }
};
</script>
