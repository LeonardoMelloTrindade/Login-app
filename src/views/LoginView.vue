<template>
  <AuthWrapper>
    <template #container-login>
      {{ srcImg }}
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

interface IData {
  srcImg: string;
}

export default Vue.extend({
  name: 'LoginView',
  components: {
    AuthWrapper,
    AuthImage
  },
  data(): IData {
    return {
      srcImg: require('../assets/interview.svg')
    };
  }

});
</script>
