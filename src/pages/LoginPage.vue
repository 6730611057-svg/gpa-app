<template>

  <q-page class="login-page flex flex-center">

    <q-card class="login-box">

      <!-- TITLE -->
      <q-card-section class="text-center">

        <div class="text-h5 text-primary">
          GPA Pro
        </div>

        <div class="text-grey">
          Student GPA Calculator
        </div>

      </q-card-section>


      <!-- INPUT -->
      <q-card-section>

        <q-input
          v-model="username"
          label="Username"
          filled
          class="q-mb-md"
        />

        <q-input
          v-model="password"
          label="Password"
          type="password"
          filled
        />

        <!-- DEMO ACCOUNT -->
        <div class="demo-account">
          <div>Demo Account</div>
          <div>Username: student</div>
          <div>Password: 123456</div>
        </div>

      </q-card-section>


      <!-- LOGIN BUTTON -->
      <q-card-section>

        <q-btn
          label="LOGIN"
          color="primary"
          class="full-width"
          @click="login"
        />

      </q-card-section>

    </q-card>

  </q-page>

</template>


<script setup>

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'
import { Notify } from 'quasar'

const username = ref('')
const password = ref('')

const router = useRouter()
const authStore = useAuthStore()

function login() {

  const success = authStore.login(
    username.value,
    password.value
  )

  if (success) {

    router.push('/gpa')

  } else {

    Notify.create({
      type: 'negative',
      message: 'Username หรือ Password ไม่ถูกต้อง'
    })

  }

}

</script>

<style scoped>

.login-page {
  background: #dbeafe;
}

.login-box {
  width: 350px;
}

.demo-account {
  background-color: #e3f2fd;
  padding: 8px 10px;
  margin-top: 10px;
  margin-bottom: 12px;
  border-radius: 2px;
  font-size: 11px;
  color: #1976d2;
}

</style>