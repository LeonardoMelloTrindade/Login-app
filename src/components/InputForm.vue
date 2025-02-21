<template>
  <div class="container">
    <div class="input">
      <input :type="type" v-model.trim="$v.input.$model"/>
      <i :class="icon"></i>
    </div>
    <div v-if="$v.input.$error">O campo precisa ser preenchido corretamente</div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { required } from 'vuelidate/lib/validators';

interface IProps {
  type: PropOptions<string>;
  icon: PropOptions<string>;
}

interface IData {
  input: string;
}

export default Vue.extend({
  name: 'InputForm',
  props: {
    type: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
  } as IProps,
  data(): IData {
    return {
      input: '',
    };
  },
  validations: {
    input: { 
      required
    },
  },

  watch: {
    input(value) {
      return value;
    }
  }
});

</script>

<style scoped>
  .container {
    margin-bottom: 24px;
  }

  .input {
    height: 32px;
    position: relative;
    right: 100px;
    bottom: 64px;
    display: flex;
    align-items: center;
  }

  .input input {
    position: absolute;
    height: 100%;
    padding-left: 32px;
    border-radius: 25px;
    font-size: 18px;
    background-color: transparent;
    border: 1px solid #F8F8F8;
    color: #F8F8F8;
  }

  .input i {
    position: absolute;
    left: 8px;
    color: #F8F8F8;
  }
</style>
