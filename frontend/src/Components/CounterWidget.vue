<script setup lang="ts">
    import {useCounterStore} from "@/stores/counter";
    
    const store = useCounterStore();
</script>

<template>
    <section class="counter">
        <h2>Counter:</h2>
        <p>Count: {{store.count}}</p>
        <p>Double: {{store.doubleCount}}</p>
        
        <button @click="store.increment">Increment</button>
    </section>
</template>

<style scoped>
    .counter {
        border: 1px solid #e186b4;
        border-radius: 4px;
    }
    
    button{
        border-radius: 8px;
        background: #a83971;
        color: white;
    }
    
    section{
        padding: 0 20px 20px 20px;
    }
</style>