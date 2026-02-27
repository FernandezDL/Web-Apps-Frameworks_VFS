<script setup lang="ts">
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'

    const username = ref('')
    const password = ref('')
    const errorMessage = ref('')
    const router = useRouter()
    
    const loginUser = async () => {
        console.log("Attempting login with username:", username.value);
        try {
            const response = await fetch(`http://localhost:3000/api/login?username=${username.value}&password=${password.value}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (response.ok) {
                const data = await response.json();

                if(data.success) {
                    router.push('/leaderboard');
                    errorMessage.value = '';
                } else {
                    errorMessage.value = 'Invalid username or password';
                }
            } else {
                errorMessage.value = 'Invalid username or password';
            }
        } catch (error) {
            errorMessage.value = 'An error occurred. Please try again.'
        }
    }
</script>

<template>
    <form @submit.prevent="loginUser" class="login-form">
        <input type="text" id="username" v-model="username" required placeholder="Username"/>
        <input type="password" id="password" v-model="password" required placeholder="Password"/>

        <button class="LoginBttn" type="submit">Login</button>
    </form>

    <div v-if="errorMessage" class="error-message">
        {{ errorMessage }}
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

    .error-message {
        color: red;
        margin-top: 10px;
    }

</style>