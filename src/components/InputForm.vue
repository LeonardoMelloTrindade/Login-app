<template>
    <input :type="$props.type">
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';

interface IProps {
  type: PropOptions<string>;
}

export default Vue.extend({
  name: 'InputForm',
  props: {
    type: String,
  } as IProps,
});
</script>

<style scoped>
  input {
    margin-bottom: 24px;
    border-radius: 25px;
    height: 36px;
    width: 256px;
    font-size: 18px;
    background-color: transparent;
    border: 1px solid #F8F8F8;
  }

</style>