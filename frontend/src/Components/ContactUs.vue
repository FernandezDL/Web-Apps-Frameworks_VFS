<script setup lang="ts">
    
</script>

<template>
    <div class="contact-us">
        <form>
            <div class="field">
                <label for="name">Name</label>
                <input id="name" type="text" placeholder="Your name" />
            </div>

            <div class="field">
                <label for="email">Email</label>
                <input id="email" type="text" placeholder="Your email" />
            </div>

            <div class="field">
                <label for="message">Message</label>
                <textarea id="message" placeholder="Your message"></textarea>
            </div>

            <button type="submit" class="submit">Submit</button>
        </form>

        <!-- <p v-if="errorMessage" class="error-message">{{errorMessage}}</p> -->
    </div>
</template>

<style scoped>
    .contact-us {
        margin-top: 10px;
        border: none;
    }
    
    form{
        margin: 0 auto;
        width: 400px;
    }
    
    .field{
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }
    
    .submit{
        cursor: pointer;
        padding: 10px 15px;
        background-color: #a83971;
        border-radius: 10px;

        color: white;
        font-weight: bold;
    }

    .error-message{
        color: #b51717;
    }
</style>