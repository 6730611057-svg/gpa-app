<template>

  <q-card class="q-mt-lg">

    <q-card-section>

      <div>
        Grade Point รวม:
        {{ totalPoint.toFixed(1) }}
      </div>

      <div>
        จำนวนหน่วยกิต:
        {{ totalCredit }}
      </div>

      <div class="text-h6 q-mt-sm">
        เกรดเฉลี่ย:
        {{ gpa.toFixed(2) }}
      </div>

    </q-card-section>

  </q-card>

</template>


<script setup>

import { computed } from 'vue'


const props = defineProps({
  subjects: {
    type: Array,
    default: () => []
  }
})


const totalCredit = computed(() => {

  let total = 0

  props.subjects.forEach(item => {
    total = total + Number(item.credit)
  })

  return total

})


const totalPoint = computed(() => {

  let total = 0

  props.subjects.forEach(item => {
    total = total + Number(item.credit) * Number(item.point)
  })

  return total

})


const gpa = computed(() => {

  if (totalCredit.value === 0) {
    return 0
  }

  return totalPoint.value / totalCredit.value

})

</script>