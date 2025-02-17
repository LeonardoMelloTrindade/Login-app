<template>
  <AuthWrapper>
    <template #container-login>
      <AuthForm />
    </template>
    <template #container-img>
      <AuthImage :srcImg="srcImg"/>
    </template>
  </AuthWrapper>
</template>

<script lang="ts">
import Vue from 'vue';
import AuthWrapper from '@/components/container/AuthWrapper.vue';
import AuthImage from '@/components/AuthImage.vue';
import AuthForm from '@/components/AuthForm.vue';

interface IData {
  srcImg: string;
}

export default Vue.extend({
  name: 'LoginView',
  components: {
    AuthWrapper,
    AuthImage,
    AuthForm,
  },
  data(): IData {
    return {
      srcImg: require('../assets/interview.svg')
    };
  }

});
</script>
