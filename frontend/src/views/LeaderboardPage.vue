<script setup lang="ts">
    import LeaderBoardSummary from "@/Components/LeaderBoardSummary.vue";
    import MyPosition from "@/Components/MyPosition.vue";
    import Filter from "@/Components/Filter.vue";
</script>

<template>
    <div class="leaderboard">
<!--        Widgets-->
        <Filter/>
     
        <h2>Leaderboard</h2>
    
        <div class="secondContainer">
            <LeaderBoardSummary/>
            <MyPosition/>
        </div>
    </div>
</template>

<style scoped>
    .leaderboard {
        text-align: center;
        padding-bottom: 30px;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        gap: 20px;
    }

    .secondContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 50px;
    }
</style>