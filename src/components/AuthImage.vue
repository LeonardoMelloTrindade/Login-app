<template>
  <img :src="$props.srcImg" alt="Imagem de pequenas empresas e meu grande negócio">
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';


interface IProps {
  srcImg: PropOptions<string>;
}

export default Vue.extend({
  name: 'AuthImage',
  props: {
    srcImg: String,
  } as IProps,
});
</script>