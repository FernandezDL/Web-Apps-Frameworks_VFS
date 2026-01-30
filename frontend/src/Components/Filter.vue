<script setup lang="ts">
    
</script>

<template>
    <div class="filter">
        <h3>Filter</h3>

        <form>
            <div class="field">
                <input id="name" type="text" placeholder="Search name" />
            </div>

            <button type="submit" class="submit">Submit</button>
        </form>
    </div>
</template>

<style scoped>
    .filter {
        width: 300px;

        padding: 10px;
        border: 2px solid #ccc;

        display: flex;
        flex-direction: column;

        justify-content: center;
        align-items: center;
    }

    form{
        margin: 0 auto;
        width: 100%;

        display: flex;

        justify-content:space-evenly;
        align-items: center;
        
    }
    
    .field{
        display: flex;
        flex-direction: column;
        /* padding: 10px; */
    }
    
    .submit{
        cursor: pointer;
        padding: 10px 20px ;
        background-color: #a83971;
        border-radius: 10px;

        color: white;
        font-weight: bold;
        font-size: 12px;
    }
    
</style>