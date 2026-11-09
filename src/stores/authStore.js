import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {

  const isLoggedIn = ref(false)
  const username = ref('')
  const uid = ref(0)

  const loginStatus = computed(() => {
    return isLoggedIn.value
      ? 'Logged In'
      : 'Logged Out'
  })

  const welcomeMessage = computed(() => {
    return isLoggedIn.value
      ? `Welcome ${username.value}`
      : 'Please Login'
  })

  const login = (name, password) => {
    if (name === 'student' && password === '123456') {
      isLoggedIn.value = true
      username.value = name
      uid.value = 101

      return true
    }

    return false
  }

  const logout = () => {
    isLoggedIn.value = false
    username.value = ''
    uid.value = 0
  }

  return {
    isLoggedIn,
    username,
    uid,
    loginStatus,
    welcomeMessage,
    login,
    logout
  }
},
{
  persist: true
})