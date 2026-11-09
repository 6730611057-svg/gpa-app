<template>
  <div>

    <div
      v-if="subjects.length === 0"
      class="text-grey q-mt-md"
    >
      รายชื่อวิชา (0)
    </div>

    <div v-else>

      <div
        v-for="item in subjects"
        :key="item.id"
        class="subject-item"
      >

        <div>
          <div class="text-weight-bold">
            {{ item.name }}
          </div>

          <div class="text-caption text-grey">
            {{ item.credit }} หน่วยกิต |
            {{ item.score }} คะแนน |
            เกรด {{ item.grade }}
          </div>
        </div>

        <q-btn
          flat
          round
          color="negative"
          icon="delete"
          @click="deleteSubject(item.id)"
        />

      </div>

    </div>

  </div>
</template>

<script setup>
defineProps({
  subjects: {
    type: Array,
    required: true
  }
})

const emit = defineEmits([
  'delete'
])

const deleteSubject = (id) => {
  emit('delete', id)
}
</script>

<style scoped>
.subject-item {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 12px;
  margin-top: 8px;

  border: 1px solid #e0e0e0;
  border-radius: 6px;
  background: #fff;
}
</style>