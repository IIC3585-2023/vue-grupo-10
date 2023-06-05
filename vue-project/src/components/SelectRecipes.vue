<template>
    <div v-for="recipe in recipes" :key="recipe.label" class="flex flex-col pb-5">
        <h3 class="text-3xl bold text-green-500 pb-3">{{ recipe.recipe.label }}</h3>
        <div class="grid grid-cols-3 max-h-80">
            <img :src="recipe.recipe.image" :alt="recipe.recipe.label">
            <div class="col-start-2 col-end-4 grid grid-cols-4 grid-rows-6 max-h-80">
                <div class="col-span-2 row-start-1 row-end-6 grid">
                    <div class="flex">
                        <p class="text-green-400 text-lg">Calorías totales: </p>
                        <p class="text-slate-100 text-lg pl-1">{{ recipe.recipe.calories }} kcal</p>
                    </div>
                    <div class="flex" v-if="recipe.recipe.dietLabels.length>0">
                        <p class="text-green-400 text-lg">Etiquetas: </p>
                        <p class="text-slate-100 text-lg pl-1" v-for="diet in recipe.recipe.dietLabels" :key="diet">{{ diet }}</p>
                    </div>
                    <div class="flex">
                        <p class="text-green-400 text-lg">Tiempo de preparación: </p>
                        <p class="text-slate-100 text-lg pl-1">{{ recipe.recipe.totalTime }} minutos</p>
                    </div>
                    <div class="flex">
                        <p class="text-green-400 text-lg">Cantidad de porciones: </p>
                        <p class="text-slate-100 text-lg pl-1">{{ recipe.recipe.yield }}</p>
                    </div>
                    <div class="flex">
                        <p class="text-green-400 text-lg">Calorías por porción: </p>
                        <p class="text-slate-100 text-lg pl-1">{{ recipe.recipe.calories/recipe.recipe.yield }} kcal</p>
                    </div>
                </div>
                <div class="row-start-1 row-end-6 col-span-2 overflow-auto">
                    <div class="flex flex-col justify-between ">
                        <p class="text-green-400 text-lg">Ingredientes:</p>
                        <p class="text-slate-100 text-md" v-for="ingredient in recipe.recipe.ingredientLines" :key="ingredient">{{ ingredient }}</p>
                    </div>
                </div>
                <button v-if="userInfoStore.caloriesLeft - recipe.recipe.calories/recipe.recipe.yield > 0" @click="addRecipe(recipe.recipe)" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-3xl text-lg col-start-1">Agregar</button>
                <button v-else class="text-white font-bold py-2 px-4 rounded-3xl text-lg bg-gray-400 col-start-1" disabled>Agregar</button>
                <button v-if="hasBeenLiked(recipe.recipe)" @click="removeRecipe(recipe.recipe)" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-3xl text-lg col-start-3">Eliminar</button>
            </div>
        </div>
        <br />
    </div>
</template>

<script>
    import { useUserInfoStore } from '../stores/userInfo'
    import { useMenuStore } from '../stores/menu'

    export default {
        data() {
            return {
                userInfoStore: useUserInfoStore(),
                menuStore: useMenuStore(),
                recipes: []
            }
        },
        props: {
            mealType: String
        },
        mounted() {
            const url = import.meta.env.VITE_RECIPES_URL
            const app_id = import.meta.env.VITE_ID
            const app_key = import.meta.env.VITE_KEY
            const calories = this.userInfoStore.calories
            let req_url = url + `?type=any&app_id=${app_id}&app_key=${app_key}&mealType=${this.mealType}&calories=0-${calories}&random=true&time=1-`
            this.userInfoStore.diets.forEach((diet) => {
                req_url += `&health=${diet}`
            })
            const options = {
                method: 'GET'
            }
            fetch(req_url, options)
            .then(response => response.json())
            .then(data => {
                this.recipes = data.hits
                // console.log(data.hits)
            })
        },
        methods: {
            addRecipe(recipe) {
                this.userInfoStore.caloriesLeft -= recipe.calories/recipe.yield
                const meal = {
                    name: recipe.label,
                    ingredients: recipe.ingredientLines,
                    calories: recipe.calories,
                    typeOfMeal: this.mealType,
                    image: recipe.image,
                    time: recipe.totalTime,
                    labels: recipe.dietLabels,
                    servings: recipe.yield
                }
                this.menuStore.addLikedRecipe(meal)
            },
            hasBeenLiked(recipe) {
                return this.menuStore.likedRecipes.some(elem => elem.name === recipe.label)
            },
            removeRecipe(recipe) {
                this.userInfoStore.caloriesLeft += recipe.calories/recipe.yield
                const meal = {
                    name: recipe.label,
                    ingredients: recipe.ingredientLines,
                    calories: recipe.calories,
                    typeOfMeal: this.mealType,
                    image: recipe.image,
                    time: recipe.totalTime,
                    labels: recipe.dietLabels,
                    servings: recipe.yield
                }
                this.menuStore.removeLikedRecipe(meal)
            }
        }
    };
</script>

<style>
    [v-cloak] {
        display: none;
    }
</style>