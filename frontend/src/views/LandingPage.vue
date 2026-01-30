<script setup lang="ts">
    import CounterWidget from "@/Components/CounterWidget.vue";
    import LeaderBoardSummary from "@/Components/LeaderBoardSummary.vue";
</script>

<template>
    <div class="landing-page">
        <h1>Cool game :D</h1>
        <p>Best game ever! B)</p>
        
        <div class="mainGame">
            <p>The super duper fun game will be here, it's just being developed!</p>
        </div>

<!--        Widgets-->
        <CounterWidget />
    </div>
</template>

<style scoped>
    .landing-page {
        text-align: center;
        border-bottom: #f3aa79 dashed 3px;
        
        padding-bottom: 30px;
    }

    .mainGame{
        margin: 20px;
        padding: 50px;
        border: #a83971 solid 2px;
        border-radius: 15px;
    }
</style>