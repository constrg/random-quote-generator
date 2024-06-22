<script setup>
import {ref, onMounted} from 'vue'
import quotesList from '../quotesList.json'

const quotes = ref(quotesList)

const currentQuote = ref({quote: '', author: ''})

const getRandomNumber = () => {
    const randomIndex = Math.floor(Math.random() * quotes.value.length)
    currentQuote.value = quotes.value[randomIndex]
}

onMounted(getRandomNumber)

</script>
<template>
    <div class="min-h-screen flex align-center p-10">
       <div class="container  mx-auto text-center  flex justify-center flex-col gap-5 max-w-screen-md">
        <h1 class="text-4xl font-bold text-green">{RANDOM QUOTE GENERATOR}</h1>
        <blockquote>
            <p class="text-md">"{{ currentQuote.quote }}"</p>
            <cite class="text-gray">- {{ currentQuote.author }}</cite>
        </blockquote>
        <button @click="getRandomNumber" class="py-5 px-10 bg-green rounded-full mx-auto font-bold hover:bg-hover-green">Get Random Quote</button>
       </div>
    </div>
</template>