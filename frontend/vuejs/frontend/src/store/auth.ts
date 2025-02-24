import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from 'axios'
import type { User } from '@/types'
import type { LoginForm, RegisterForm } from '@/types'
import axiosInstance from "@/lib/axios.ts";
import { AxiosError } from "axios";
import type { FormKitNode} from "@formkit/core";
import router from "@/router";

export const useAuthStore = defineStore('auth', () => {
    const user = ref<User | null>(null)
    const isLoggedIn = ref<boolean>(false);

    const register = async (payload: RegisterForm, node?: FormKitNode) => {
        await axiosInstance.get("/sanctum/csrf-cookie", {
            baseURL: "http://localhost:8000"
        });
    
        try {
            await axiosInstance.post("register",payload);
            await getUser();
            router.push({name: 'dashboard'});
        } catch (e)
        {
            console.log('error', e)
            if(e instanceof AxiosError &&  e.response?.status === 422) {
                node?.setErrors([], e.response.data.errors);
            }
        }
    }

    const login = async (payload: LoginForm, node?: FormKitNode) => {
        await axiosInstance.get("/sanctum/csrf-cookie", {
            baseURL: "http://localhost:8000"
        });
    
    
        try {
            await axiosInstance.post("login",payload);
            await getUser();
            router.push({name: 'dashboard'});
        } catch (e)
        {
            if(e instanceof AxiosError &&  e.response?.status === 422){
                node?.setErrors([], e.response.data.errors);
            }
        }
    }
    

    const getUser = async () => {
        try {
            const response = await axiosInstance.get("user");
            user.value = response.data;
            isLoggedIn.value = true;
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const logout = async () => {
        await axiosInstance.post("logout");
        isLoggedIn.value = false;
        user.value = null;
        router.push({name: 'login'});
    }

    return {
        user,
        isLoggedIn,
        login,
        register,
        getUser,
        logout,
    }
}, {
    persist: {
      storage: sessionStorage,
      pick: ['user', 'isLoggedIn'],
    },
})