<template>
  <div>
    <h1>Nuxt.js(CompositionAPI)+TypeScriptでFirebaseと連携したい！</h1>
    <h2>↓googleでログイン↓</h2>
    <button @click="googleLogin">ログイン</button>
    <hr />
    <input v-model="memo.text" type="text" />
    <button @click="addMemo">追加</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'

export default defineComponent({
  setup(_, { root }) {
    /**
     * ログイン機能
     */
    const googleLogin = async () => {
      try {
        // @ts-ignore
        const provider = await new root.$fireModule.auth.GoogleAuthProvider()
        // @ts-ignore
        root.$fire.auth.signInWithRedirect(provider)
      } catch (e) {
        console.error(e)
      }
    }
    /**
     * メモ機能
     */
    const memo = reactive({
      text: null,
    })
    const addMemo = async () => {
      try {
        // @ts-ignore
        await root.$fire.firestore.collection('memos').add({
          text: memo.text,
        })
        memo.text = null
      } catch (e) {
        console.error(e)
      }
    }

    return { googleLogin, memo, addMemo }
  },
})
</script>

<style scoped lang="scss">
h1 {
  color: red;
}
</style>
