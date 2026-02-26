<script setup lang="ts">
    import LoginForm from "@/Components/LoginForm.vue";
</script>

<template>
    <div class="login-page">
        <h1>Welcome!</h1>
        
        <LoginForm/>
    </div>
</template>

<style scoped>
    .login-page {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 80vh;
    }
</style>