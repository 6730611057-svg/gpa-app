<template>
<q-page padding >
  <form @reset="onReset" @submit.prevent="onSubmit">
    <div class="q-gutter-md"></div>
      <q-input type="text" label="Your username" v-model="Username"></q-input>
      <q-input type="email" label="Your email" v-model="email"
      @keyup.alt.enter="onReset"></q-input>
      <q-select v-model="role" :options="roleOptions" label="Role"></q-select>
      <q-btn color="primary" type="Submit" label="Submit" />
       <q-btn color="grey" type="reset" label="RESET" />
  </form>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useMeta} from 'quasar';
useMeta(
  { title: 'หน้าหลัก'}
)
const Username = ref('')
const email =ref('')
const role = ref(null)
const roleOptions = ['Student','Teacher','Staff']
const onReset = () => {
  Username.value = ""
  email.value =""
  role.value = null
}
const onSubmit = () => {
  if(!Username.value || !email.value){
    alert("Username or Email is empty")
    return
  }
  console.log("Form was Submitted: ",{
    Username: Username.value,
    email: email.value,
    role: role.value
  })
  alert("Data Saved")
}
//const items = ref([
 // { id: 1, name: 'ProductA' , price: 100},
 // { id: 2, name: 'ProductB' , price: 200}
//])
//const isVisible = ref(true)
//const isLogged  = ref(true)
//const score = ref(80)

//const msg = ref (1500)
//console.log(msg.value)
//Array
//const items = ref(['Apple', 'Banana', 1100, 25.5])
//items.value.push(100)
//console.log(items.value)
// object
//const product = ref({
//  id: 1,
 // name: "Notebook",
  //price : 15000
//})
//console.log(product.value)
// reactive
//const User = reactive({ name: "Jack", age: 20})
//console.log(User.name, User.age)
//const { name, age } = toRefs(User)
//console.log(name.value,age.value)
</script>

