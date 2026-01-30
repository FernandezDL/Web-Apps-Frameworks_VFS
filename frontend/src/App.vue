<script setup lang="ts">
    import Footer from './Components/Footer.vue';
</script>

<template>
    <div id="app">
        <header>
            <nav>
                <router-link to="/">Home</router-link>
                <router-link to="/about">About</router-link>
                <router-link to="/leaderboard">Leaderboard</router-link>
                <router-link to="/contact-us">Contact Us</router-link>
            </nav>
        </header>
        
        <main>
            <router-view/>
        </main>

        <Footer/>
    </div>
</template>

<style scoped>
    nav{
        display: flex;
        flex-direction: row;
        gap: 10px;
        
        margin-bottom: 20px;
    }

    main{
        min-height: 80vh;
    }
</style>
