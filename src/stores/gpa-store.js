import { defineStore } from 'pinia'
import { ref } from 'vue'
import { api } from '@/boot/axios'

export const useGpaStore = defineStore('gpa', () => {
  // ข้อมูลรายวิชา
  const subjects = ref([])

  // สถานะ Loading
  const loading = ref(false)

  // ข้อความ Error
  const errorMessage = ref('')

  // โหลดข้อมูลรายวิชาทั้งหมด
  async function fetchSubjects() {
    loading.value = true
    errorMessage.value = ''

    try {
      const response = await api.get('/subjects')

      subjects.value = response.data
    } catch (error) {
      console.error('Fetch Error:', error)

      if (error.response) {
        errorMessage.value = `เกิดข้อผิดพลาดจากเซิร์ฟเวอร์ (${error.response.status})`
      } else if (error.request) {
        errorMessage.value = 'ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้ กรุณาตรวจสอบ JSON Server'
      } else {
        errorMessage.value = error.message
      }
    } finally {
      loading.value = false
    }
  }

  // เพิ่มรายวิชา
  async function addSubject(subject) {
    errorMessage.value = ''

    try {
      const response = await api.post('/subjects', subject)

      subjects.value.push(response.data)

      return true
    } catch (error) {
      console.error('Add Error:', error)

      errorMessage.value = getErrorMessage(error)

      return false
    }
  }

  // แก้ไขรายวิชา
  async function updateSubject(id, subject) {
    errorMessage.value = ''

    try {
      const response = await api.put(`/subjects/${id}`, {
        ...subject,
        id,
      })

      const index = subjects.value.findIndex((item) => String(item.id) === String(id))

      if (index !== -1) {
        subjects.value[index] = response.data
      }

      return true
    } catch (error) {
      console.error('Update Error:', error)

      errorMessage.value = getErrorMessage(error)

      return false
    }
  }

  // ลบรายวิชา
  async function deleteSubject(id) {
    errorMessage.value = ''

    try {
      await api.delete(`/subjects/${id}`)

      subjects.value = subjects.value.filter((item) => String(item.id) !== String(id))

      return true
    } catch (error) {
      console.error('Delete Error:', error)

      errorMessage.value = getErrorMessage(error)

      return false
    }
  }

  // จัดการข้อความ Error
  function getErrorMessage(error) {
    if (error.response) {
      return `เกิดข้อผิดพลาดจากเซิร์ฟเวอร์ (${error.response.status})`
    }

    if (error.request) {
      return 'ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้'
    }

    return error.message
  }

  // ส่งข้อมูลให้หน้าเว็บใช้งาน
  return {
    subjects,
    loading,
    errorMessage,
    fetchSubjects,
    addSubject,
    updateSubject,
    deleteSubject,
  }
})
