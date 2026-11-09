<template>
  <q-layout view="hHr lpR fFf">

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      
    <q-item clickable v-ripple>
      <q-item-section avatar>
        <q-icon color="primary" name="bluetooth" />
      </q-item-section>

      <q-item-section>Dashboard </q-item-section>
    </q-item>

    <q-item clickable v-ripple>
      <q-item-section avatar>
        <q-avatar color="teal" text-color="white" icon="bluetooth" />
      </q-item-section>

      <q-item-section>Users </q-item-section>
    </q-item>

    <q-item clickable v-ripple>
      <q-item-section avatar>
        <q-avatar
          rounded
          color="purple"
          text-color="white"
          icon="bluetooth"
        />
      </q-item-section>

      <q-item-section> Products </q-item-section>
    </q-item>

    <q-item clickable v-ripple>
      <q-item-section avatar>
        <q-avatar color="primary" text-color="white"> R </q-avatar>
      </q-item-section>

      <q-item-section>Settings</q-item-section>
    </q-item>

    <q-separator />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="/logo/logo-mono-white.svg">
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
        <div v-if="store.user">
          <q-btn  size="sm" color="negative" icon="logout"  @click="onLogout" />
        </div>

      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth-store2';
import { useRoute } from 'vue-router';
import { useQuasar } from 'quasar';

const store = useAuthStore
const router = useRoute
const $q =useQuasar

const onLogout = () => {
      $q.dialog({
        titie:'Logout',
        massage:'Are you sure you want to logout?',
        cancel: true,
        persistent:true
      }).onOk(()=>{
        store.logout()
        $q.notify({
          type: 'positive',
          message:'Logout success'
        })
        router.replace({ name: 'login' })
      })
}
const rightDrawerOpen = ref(false)


</script>