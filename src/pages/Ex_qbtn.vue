<template>
    <q-page padding>
        <q-btn label="SaveMe" color="primary" 
        text-color="black" icon="pets" unelevated> </q-btn>
        <q-btn outline label="NO BG" />
        <q-separator spaced size="16px" color="yelloe" />
        <q-btn round icon="share"></q-btn>
        <q-space></q-space>
        <q-btn rounded label="Confirm"> </q-btn>
        <q-separator spaced="16px" />
        <q-btn-group push />
            <q-btn push label="Yesterday" />
            <q-btn push label="Today" />
            <q-btn push label="Tomorrow" />
        <q-separator  spaced="16px"  />
        <q-btn :loading="isSaving" color="primary" 
        :label="isSaving ? 'Saving...':'Saved'"
        @click="save">
        <template v-slot:loading>
            <q-spinner-dots
                color="white"
                size="3rem"
                :thickness="5"
                class="on-left"
            />Saving...
        </template>
    </q-btn>
       

    </q-page>
</template>
<script setup>
import { ref } from 'vue';
const isSaving = ref(false)
const save = async() =>{
    isSaving.value = true
    try{
        await new Promise((resolve)=> setTimeout(resolve, 2000))
        console.log("Data Saved")
    } catch (error) {
        console.log("Error: ", error)
    } finally{
        isSaving.value = false
    }
}
</script>