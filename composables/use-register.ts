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
    }

    const cost = ref<number>()
    const paymentDate = ref<string>('')
    const paymentGenru = ref<string>('選択してください')
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
