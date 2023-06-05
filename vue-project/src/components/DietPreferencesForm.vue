<template>
    <form class="max-w-fit flex flex-col justify-center items-center" @submit.prevent="handleSubmit">
        <h1 class="text-3xl font-bold text-green-300">Ingresa tus preferencias alimentarias</h1>
        <br />
        <label for="mealTypes">Comidas diarias:</label>
        <select v-model="mealTypes" id="mealTypes" required multiple>
            <option v-for="option in mealTypesOptions" :value="option.value" :key="option.value">
                {{ option.label }}
            </option>
        </select>
        <label for="healthLabels">Dieta alimentaria (opcional):</label>
        <select v-model="healthLabels" id="healthLabels" multiple>
            <option v-for="option in healthLabelsOptions" :value="option.value" :key="option.value">
                {{ option.label }}
            </option>
        </select>
        <br />
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-3xl text-lg" type="submit">Seleccionar Recetas</button>
    </form>
</template>

<script>
    import { useUserInfoStore } from '../stores/userInfo'
    import { useMenuStore } from '../stores/menu'
    // import { useRouter } from 'vue-router'

    export default {
        data() {
            return {
                userInfoStore: useUserInfoStore(),
                menuStore: useMenuStore(),
                mealTypes: [],
                mealTypesOptions: [
                    { label: 'Desayuno', value: 'breakfast' },
                    { label: 'Brunch', value: 'brunch' },
                    { label: 'Almuerzo', value: 'lunch' },
                    { label: 'Colación', value: 'snack' },
                    { label: 'Once', value: 'teatime' },
                    { label: 'Cena', value: 'dinner' }
                ],
                healthLabels: [],
                healthLabelsOptions: [
                    { label: 'Sin productos lácteos', value: 'dairy-free' },
                    { label: 'Sin gluten', value: 'gluten-free' },
                    { label: 'Kosher', value: 'kosher' },
                    { label: 'Bajo en azúcar', value: 'low-sugar' },
                    { label: 'Pescetariana', value: 'pescatarian' },
                    { label: 'Vegetariana', value: 'vegetarian' },
                    { label: 'Vegana', value: 'vegan' }
                ],
            }
        },
        methods: {
            handleSubmit() {
                this.userInfoStore.typeOfMeal = null
                this.userInfoStore.diets = null
                this.userInfoStore.typeOfMeal = this.mealTypes
                this.userInfoStore.diets = this.healthLabels
                this.userInfoStore.mealSelection = this.mealTypes[0]
                this.userInfoStore.caloriesLeft = this.userInfoStore.calories
                this.menuStore.likedRecipes = []
                this.$router.push({path: "/recipes"})
            }
        }
    }
</script>

<style scoped>
    select {
        margin-bottom: 10px;
        padding: 0 10px;
        -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
        -moz-box-sizing: border-box;    /* Firefox, other Gecko */
        box-sizing: border-box;         /* Opera/IE 8+ */
        border-radius: 10px;
        display: block;
        width: 100%;
        color: black;
        height: auto;
        overflow-y: auto;
    }
    option {
        color: black;
    }
</style>