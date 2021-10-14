<template>
  <div>
    <h1>{{ text }}</h1>
    <h2>テストページ</h2>
    <h3>テストの詳細</h3>
    <h4>SCSSの導入</h4>
    <button @click="login">ログイン</button>
    <button>登録</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, useRouter } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const text = 'Hello, World!'
    const router = useRouter()
    const login = () => {
      router.push('/home')
    }

    return {
      text,
      login,
    }
  },
})
</script>

<style scoped lang="scss">
h1 {
  color: red;
}
</style>
