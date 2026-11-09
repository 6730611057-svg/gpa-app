<template>
<div class="q-pa-md">
<q-btn color="primary" label="Load Data" icon="cloud_download" @click="loadData" />
</div>
</template>
<script setup>
import { useQuasar} from 'quasar'
const $q = useQuasar()
const loadData = () => {
    $q.loading.show()
//     $q.loading.show({
//         spinner: null,
//         message: `<div class="text-center">
//             <img src='https://media1.tenor.com/m/aGj-frNYMFEAAAAd/cat-cat-dance.gif'
//             style='width: 150px; height: 150px; border-radius: 8px;'>
//             <div class="q-mt-md text-h6">แมวกำลังโหลด...</div>
// </div>`,
// html: true,
// backgroundColor: 'dark',
// messageColor: 'white'
//     })
// // $q.loading.show({ message: 'Loading data...' ,
//     spinner: QSpinnerFacebook,
//     spinnerColor: 'yellow',
//     spinnerSize: 200,
//     backgroundColor: 'purple-2',
//     messageColor: 'blue'
// })
setTimeout(() => {
$q.loading.hide()
$q.notify({
type: 'positive',
message: 'Data loaded successfully!'
})
}, 3000)
}
</script>