<script setup lang="ts">
import { useAuthStore } from "@/store/auth";

const { login } = useAuthStore();
</script>
<template>
    <h1 class="text-3xl p-4 mx-auto">Login</h1>
    <div class="max-w-md mx-auto bg-slate-700 rounded-lg p-4">
        <FormKit
            type="form"
            submit-label="Login"
            @submit="login"
            class="max-w-sm mx-auto p-4 bg-white rounded-lg shadow-md dark:bg-gray-950"
        >
            <FormKit type="email" label="Email" name="email" />
            <FormKit type="password" label="Password" name="password" />
        </FormKit>
    </div>
</template>