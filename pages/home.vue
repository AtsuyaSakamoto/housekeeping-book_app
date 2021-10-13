<template>
  <div>
    <button @click="resisterFinance">登録</button>
    <h1>{{ home }}</h1>
    <div>
      <h2>収入</h2>
      <h2>支出</h2>
      <h2>収支</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useRouter } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const home: string = 'ホーム'
    const router = useRouter()
    const resisterFinance = () => {
      router.push('/finance/entry')
    }

    return {
      home,
      resisterFinance,
    }
  },
})
</script>

<style lang="scss">
h1 {
  color: red;
}
</style>
