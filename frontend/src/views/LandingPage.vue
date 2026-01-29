<script setup lang="ts">
    import CounterWidget from "@/Components/CounterWidget.vue";
    import LeaderBoardSummary from "@/Components/LeaderBoardSummary.vue";
</script>

<template>
    <div class="landing-page">
        <h1>Cool game :D</h1>
        <p>Best game ever! B)</p>
        
<!--        Widgets-->
        <CounterWidget />
        <LeaderBoardSummary/>
    </div>
</template>

<style scoped>
    .landing-page {
        text-align: center;
        border-bottom: #f3aa79 dashed 3px;
        
        padding-bottom: 30px;
    }
</style>