<template>
  <div>
    <form id="contact">
      <div class="container">
        <div class="head">
          <h2>収入内容</h2>
        </div>
        <select v-model="incomeGenru">
          <option value="未分類" selected>未分類</option>
          <option value="給与">給与</option>
          <option value="その他">その他</option></select
        ><br />
        <input v-model="incomeDate" type="date" name="date" /><br />
        <input
          v-model="income"
          type="text"
          name="cost"
          placeholder="金額"
        /><br />
        <input v-model="incomePayee" type="text" placeholder="受け取り先" />
        <textarea
          v-model="incomeMemo"
          type="text"
          name="memo"
          placeholder="Memo"
        ></textarea
        ><br />
        <div class="message">Message Sent</div>
        <button
          id="submit"
          class="income-register"
          type="submit"
          @click.prevent="resisterIncome"
        >
          登録
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const income = ref<number>()
    const incomeDate = ref<string>('')
    const incomeGenru = ref<string>('未分類')
    const incomePayee = ref<string>('')
    const incomeMemo = ref<string>('')

    const resisterIncome = () => {
      const incomeData = {
        income,
        incomeDate,
        incomeGenru,
        incomePayee,
        incomeMemo,
      }
      console.log(incomeData)
      console.log('あああ')
    }

    const cost = ref<number>()
    const paymentDate = ref<string>('')
    const paymentGenru = ref<string>('未分類')
    const paymentPayee = ref<string>('')
    const paymentMemo = ref<string>('')

    const resisterPayment = () => {
      const paymentData = {
        cost,
        paymentDate,
        paymentGenru,
        paymentPayee,
        paymentMemo,
      }
      console.log(paymentData)
    }

    const formflg = ref<boolean>(false)

    return {
      income,
      incomeDate,
      incomeGenru,
      incomePayee,
      incomeMemo,
      resisterIncome,
      formflg,
      cost,
      paymentDate,
      paymentGenru,
      paymentPayee,
      paymentMemo,
      resisterPayment,
    }
  },
})
</script>

<style scoped lang="scss">
div {
  .container {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
    background-color: #fafafa;
  }
  .head {
    -webkit-border-radius: 6px 6px 0px 0px;
    -moz-border-radius: 6px 6px 0px 0px;
    border-radius: 6px 6px 0px 0px;
    background-color: #2abca7;
    color: #fafafa;
  }
}

h2 {
  text-align: center;
  padding: 18px 0 18px 0;
  font-size: 1.4em;
  &.payment-title {
    background: #ff0000;
  }
}

input {
  margin-bottom: 10px;
}
textarea {
  height: 100px;
  margin-bottom: 10px;
}
input:first-of-type {
  margin-top: 15px;
}
select,
input,
textarea {
  font-size: 1em;
  padding: 15px 10px 10px;
  font-family: 'Source Sans Pro', arial, sans-serif;
  border: 1px solid #cecece;
  background: #d7d7d7;
  color: black;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  width: 80%;
  max-width: 600px;
}
::-webkit-input-placeholder {
  color: #fafafa;
}

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

label.error {
  font-family: 'Source Sans Pro', arial, sans-serif;
  font-size: 1em;
  display: block;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #d89c9c;
  width: 80%;
  margin: auto;
  color: #fafafa;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
}
/* media queries */
@media (max-width: 700px) {
  label.error {
    width: 90%;
  }
  input,
  textarea {
    width: 90%;
  }
  button {
    width: 90%;
  }
  body {
    padding-top: 10px;
  }
}
.message {
  font-family: 'Source Sans Pro', arial, sans-serif;
  font-size: 1.1em;
  display: none;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #2abca7;
  width: 80%;
  margin: auto;
  color: #fafafa;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
}
</style>
