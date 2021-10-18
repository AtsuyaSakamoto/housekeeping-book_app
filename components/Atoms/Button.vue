<template>
  <div>
    <button class="payment" @click="handleClick">{{ text }}</button>
  </div>
</template>

import { defineComponent } from '@vue/composition-api'
<script lang="ts">
export default {
  props: {
    text: {
      type: String,
      default: 'ボタン',
    },
  },
  setup(_: any, { emit }: { emit: any }) {
    const handleClick = () => {
      emit('my-event')
    }

    return { handleClick }
  },
}
</script>

<style scoped lang="scss">
button {
  margin-top: 15px;
  margin-bottom: 25px;
  background-color: #2abca7;
  padding: 12px 45px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  border-radius: 5px;
  border: 1px solid #2abca7;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  display: inline-block;
  cursor: pointer;
  width: 30%;
  color: #fff;
  &:hover {
    background: #19a08c;
  }
  &.income {
    width: 8%;
    margin-left: 30px;
  }
  &.payment {
    background: #ff0000;
    width: 8%;
    margin-left: 680px;
    &:hover {
      background: #cc0000;
    }
  }
  &.payment-register {
    background: #ff0000;
    &:hover {
      background: #cc0000;
    }
  }
}

/* media queries */
@media (max-width: 700px) {
  button {
    width: 90%;
  }
}
</style>
