<template>
    <div class="max-w-fit flex flex-col justify-center items-center">
        <h2 class="text-3xl font-bold text-green-300">Consumo diario de</h2>
        <h2 class="text-3xl font-bold text-green-300">calorías recomendado</h2>
        <br />
        <div v-if="userInfoStore.calories">
            <h1 class="text-2xl font-bold">{{ userInfoStore.calories }} kcal</h1>
        </div>
        <div v-else>
            <h1 class="text-3xl font-bold">N/A</h1>
        </div>
        <br />
        <button @click="restoreCalories" class="inline-flex items-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-3xl text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="pr-1 w-5 h-5">
                <path fill-rule="evenodd" d="M7.793 2.232a.75.75 0 01-.025 1.06L3.622 7.25h10.003a5.375 5.375 0 010 10.75H10.75a.75.75 0 010-1.5h2.875a3.875 3.875 0 000-7.75H3.622l4.146 3.957a.75.75 0 01-1.036 1.085l-5.5-5.25a.75.75 0 010-1.085l5.5-5.25a.75.75 0 011.06.025z" clip-rule="evenodd" />
            </svg>
            Volver
        </button>
    </div>
</template>

<script>
    import { useUserInfoStore } from '../stores/userInfo'

    export default {
        data() {
            return {
                userInfoStore: useUserInfoStore()
            }
        },
        methods: {
            restoreCalories() {
                this.userInfoStore.calories = null
            }
        }
        // props: {
        //     caloryData: {
        //         type: [Object, Number]
        //     },
        //     bodyData: {
        //         type: Object
        //     }
        // },
    }
</script>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    input {
        display: block;
        width: 100%;
    }
    select {
        display: block;
        width: 100%;
    }
</style>