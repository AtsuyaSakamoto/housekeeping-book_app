<template>
  <div>
    <div>
      <h2>収入</h2>
      <h2>支出</h2>
      <h2>収支</h2>
    </div>
    <button @click="resisterFinance">登録ページへ</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, useRouter } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const router = useRouter()
    const resisterFinance = () => {
      router.push('/finance/entry')
    }

    return {
      resisterFinance,
    }
  },
})
</script>

<style scoped lang="scss"></style>
