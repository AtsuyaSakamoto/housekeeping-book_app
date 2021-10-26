<template>
  <div>
    <div class="btn-position">
      <div class="payment-btn">
        <Button :text="paymentButton" @my-event="showPaymentRegister"></Button>
      </div>
      <div class="income-btn">
        <Button :text="incomeButton" @my-event="showIncomeRegister"></Button>
      </div>
    </div>

    <IncomeRegister v-show="formflg"></IncomeRegister>
    <PaymentRegister v-show="!formflg"></PaymentRegister>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import IncomeRegister from '../../components/Organisms/IncomeRegister.vue'
import PaymentRegister from '../../components/Organisms/PaymentRegister.vue'
import Button from '../../components/Atoms/Button.vue'

export default defineComponent({
  components: {
    IncomeRegister,
    PaymentRegister,
    Button,
  },
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
    const incomeButton = ref<string>('収入')
    const paymentButton = ref<string>('支出')

    const showIncomeRegister = () => {
      formflg.value = true
    }

    const showPaymentRegister = () => {
      formflg.value = false
    }

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
      incomeButton,
      paymentButton,
      showIncomeRegister,
      showPaymentRegister,
    }
  },
})
</script>

<style scoped lang="scss">
.btn-position {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.payment-btn {
  ::v-deep .btn-design {
    background-color: #ff0000;
    width: 90px;
    &:hover {
      background-color: #cc0000;
    }
  }
}

.income-btn {
  ::v-deep .btn-design {
    background-color: #2abca7;
    margin-left: 30px;
    width: 90px;
    &:hover {
      background-color: #19a08c;
    }
  }
}
</style>
