<script setup lang="ts">

</script>

<template>
    <div class="login-form">
        <input type="text" placeholder="Username"/>
        <input type="password" placeholder="Password"/>

        <button class="LoginBttn">Login</button>
    </div> 
</template>

<style scoped>
    .LoginBttn {
        width: 300px;

        margin-top: 50px;
        padding: 15px;
        font-size: 20px;
        cursor: pointer;

        background-color: #FF8FAB;

        border-radius: 10px;
        border: none;
    }

    .LoginBttn:hover {
        background-color: #FB6F92;

        color: white;
    }

    .login-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;

        margin-top: 20px;
    }

    input {
        width: 300px;
        padding: 10px;
        font-size: 16px;

        border-radius: 5px;
    }

</style>