<template>
    <div>
        <ProductCard v-for="p in products" :key="p.id"
            :product="p" @add-to-cart="handleAddToCart">
            <template #card-header>Product No. {{ p.id }}</template>
        </ProductCard>
    </div>
</template>
<script setup>
import ProductCard from '@/components/ProductCard.vue';
import { ref } from 'vue';
const products = ref([
    {id: 1, name: 'ProductA' , price: 150, image: '/images/monmon.jpg'},
    {id: 2, name: 'ProductB' , price: 300, image: '/images/monmon.jpg'},
    {id: 3, name: 'ProductC' , price: 500, image: ''},
])
const handleAddToCart = (product) =>{
    console.log("Add: " , product.name, product.price, "Baht")
}
</script>