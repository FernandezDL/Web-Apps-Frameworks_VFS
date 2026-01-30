<script setup lang="ts">
    import {onMounted, ref} from "vue";
    
    type LeaderBoardItem = {
        player: string;
        score: number;
    }
    
    const leaderBoardData = ref<LeaderBoardItem[]>([]);
    const errorMessage = ref("");
    
    const fetchLeaderBoard = async () => {
        try{
            const res = await fetch("http://localhost:3000/api/leaderboard-summary", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            })
            
            const data = (await res.json()) as LeaderBoardItem[];
            leaderBoardData.value = data;
            
            console.log(data);
        }catch(error: any){
            errorMessage.value = error?.message ?? "Unknown error";
        }
    }
    
    onMounted(() => {
        fetchLeaderBoard();
    })
</script>

<template>
    <div class="leaderBoard-summary">
        <table>
            <thead>
                <tr>
                    <th>Player</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in leaderBoardData" :key="index">
                    <td>{{item.player}}</td>
                    <td>{{item.score}}</td>
                </tr>
            </tbody>
        </table>
        <p v-if="errorMessage" class="error-message">{{errorMessage}}</p>
    </div>
</template>

<style scoped>
    .leaderBoard-summary {
        margin-top: 10px;
    }
    
    table{
        width: 300px;
        margin: 0 auto;
        border-collapse: collapse;
    }
    
    th, td{
        border: 1px solid #7c1a4b;
        padding: 5px 10px;
    }
    
    .error-message{
        color: #b51717;
    }
</style>