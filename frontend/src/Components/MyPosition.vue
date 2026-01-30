<script setup lang="ts">
    
</script>

<template>
    <div class="myPosition">
        <h3>My Position</h3>

        <div class="row">
            <p>#12</p>
            <p>1500 pts</p>
        </div>

        <div class="line"></div>

        <div class="row">
            <p>You need 40 points to move up to #11.</p>
        </div>
    </div>
</template>

<style scoped>
    .myPosition {
        width: 300px;

        padding: 10px;
        border: 2px solid #ccc;

        display: flex;
        flex-direction: column;

        justify-content: center;
        align-items: center;
    }

    .row {
        width: 100%;
        display: flex;
        justify-content: space-around;
        padding: 5px 0;
    }

    .line {
        width: 100%;
        height: 1px;
        background-color: #ccc;
        margin: 10px 0;
    }
    
</style>