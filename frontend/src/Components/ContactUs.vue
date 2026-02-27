<script setup lang="ts">
    import { ref } from 'vue';
    
    const name = ref('');
    const email = ref('');
    const message = ref('');

    const submitContactForm = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/contact-us', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name.value,
                    email: email.value,
                    message: message.value
                })
            });

            if (response.ok) {
                alert("Thank you for contacting us! We will get back to you soon.");
            } else {
                alert("Error submitting contact form. Please try again.");
            }
        } catch (error) {
            alert("An error occurred while submitting the contact form.");
        }
    }
</script>

<template>
    <div class="contact-us">
        <form @submit.prevent="submitContactForm">
            <div class="field">
                <label for="name">Name</label>
                <input id="name" type="text" v-model="name" placeholder="Your name" />
            </div>

            <div class="field">
                <label for="email">Email</label>
                <input id="email" type="text" v-model="email" placeholder="Your email" />
            </div>

            <div class="field">
                <label for="message">Message</label>
                <textarea id="message" v-model="message" placeholder="Your message"></textarea>
            </div>

            <button type="submit" class="submit">Submit</button>
        </form>
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

    input {
        padding: 10px;
        font-size: 16px;

        border-radius: 5px;
    }

    textarea {
        height: 150px;
        padding: 10px;
        font-size: 16px;

        border-radius: 5px;
        resize: none;
    }
</style>