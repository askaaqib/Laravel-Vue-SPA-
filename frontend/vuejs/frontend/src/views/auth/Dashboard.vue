<script setup lang="ts">
import axiosInstance from "@/lib/axios.ts";
import { onMounted, ref } from "vue";
import type { User } from "@/types";
import { useAuthStore } from "@/store/auth";

const auth = useAuthStore();

onMounted(async () => {
    if(!auth.isLoggedIn) auth.getUser();
});

</script>
<template>
    <h1 class="text-3xl text-slate-200 ">Dashboard</h1>
    <div class="flex justify-between items-center">
        <div>
            <p class="text-slate-200">Welcome, {{ auth.user?.name }}</p>
            <p class="text-slate-200">Email: {{ auth.user?.email }}</p>
        </div>
        <button @click="auth.logout" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Logout</button>
    </div>
</template>