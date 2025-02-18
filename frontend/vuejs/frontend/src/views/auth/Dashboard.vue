<script setup lang="ts">
import axiosInstance from "@/lib/axios.ts";
import { ref } from "vue";

const user = ref({
    name: "",
    email: "",
});

const getUser = async () => {
    try {
        const response = await axiosInstance.get("user");
        user.value = response.data;
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}

const logout = async () => {
    await axiosInstance.post("logout");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.href = "/login";
}

getUser();
</script>
<template>
    <h1 class="text-3xl text-slate-200 ">Dashboard</h1>
    <div class="flex justify-between items-center">
        <div>
            <p class="text-slate-200">Welcome, {{ user?.name }}</p>
            <p class="text-slate-200">Email: {{ user?.email }}</p>
        </div>
        <button @click="logout" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Logout</button>
    </div>
</template>