<template>
  <div>
    <h1>登録</h1>
    <button>支出</button>
    <button>収入</button>
    <h2>支出内容</h2>
    金額：<input v-model="cost" type="input" />
    <input v-model="date" type="date" />
    <select v-model="selectedGenru">
      <option>未分類</option>
      <option>食費</option>
      <option>家賃</option>
    </select>
    支払い先：<input v-model="payee" type="input" /> メモ：<textarea
      v-model="memo"
    ></textarea>
    <button @click="resisterExpense">保存</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const cost = ref<number>(0)
    const date = ref<number>(null)
    const selectedGenru = ref<string>('未分類')
    const payee = ref<string>('')
    const memo = ref<string>('')

    const resisterExpense = () => {
      const exprenseData = {
        cost,
        date,
        selectedGenru,
        payee,
        memo,
      }
      console.log(exprenseData)
    }

    return {
      date,
      cost,
      selectedGenru,
      payee,
      memo,
      resisterExpense,
    }
  },
})
</script>

<style lang="scss">
h1 {
  color: red;
}
</style>
