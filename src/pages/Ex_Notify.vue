<template>
    <div class="q-pa-md">
        <q-btn label="Save" @click="saveNote"></q-btn>
    </div>
</template>
<script setup>
import { useQuasar } from 'quasar';
const $q = useQuasar()
const saveNote = () => {
    $q.notify({
        type: 'warning',
        message: 'Save completed',
        position: 'top-right',
        timeout: 2000,
        icon: 'print'
    })
}
</script>
