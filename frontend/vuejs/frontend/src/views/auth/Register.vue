<script setup lang="ts">
import { useAuthStore } from "@/store/auth";
const { register } = useAuthStore();

</script>
<template>
    <h1 class="text-3xl p-4 mx-auto">Register</h1>

    <div class="max-w-md mx-auto bg-slate-700 rounded-lg p-4">
        <FormKit
            type="form"
            submit-label="Register"
            @submit="register"
            class="max-w-sm mx-auto p-4 bg-white rounded-lg shadow-md dark:bg-gray-950"
        >
            <FormKit type="text" label="Name" name="name" />
            <FormKit type="email" label="email" name="email" />
            <FormKit type="password" label="Password" name="password" />
            <FormKit type="password" label="Password Confirmation" name="password_confirmation" />
        </FormKit>
    </div>

    <!-- <form @submit.prevent="register(form)"
        class="max-w-sm mx-auto p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div class="mb-5">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
            <input v-model="form.name" type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Name" required />
            <template v-if="errors.name?.length">
                <span
                    v-for="error in errors.name"
                    :key="error"
                    class="text-red-500 text-xs"
                >
                    {{ error }}
                </span>
            </template>
        </div>
        <div class="mb-5">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input v-model="form.email" type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
            <template v-if="errors.email?.length">
                <span
                    v-for="error in errors.email"
                    :key="error"
                    class="text-red-500 text-xs"
                >
                    {{ error }}
                </span>
            </template>
        </div>
        <div class="mb-5">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input v-model="form.password" type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            <template v-if="errors.password?.length">
                <span
                    v-for="error in errors.password"
                    :key="error"
                    class="text-red-500 text-xs"
                >
                    {{ error }}
                </span>
            </template>
        </div>
        <div class="mb-5">
            <label for="password_confirmation" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
            <input v-model="form.password_confirmation" type="password_confirmation" id="password_confirmation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Register
    </button>
    </form> -->

</template>