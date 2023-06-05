<template>
<div class="flex flex-col items-center m-auto w-5/6">
    <h1 class="text-5xl pt-32 font-extrabold text-green-300">Menú del día</h1>
    <div v-for="group in likedRecipesByType" :key="group.mealType" class="pb-5 px-20">
        <h1 class="text-4xl font-bold text-green-500">{{ group.name }}</h1>
        <div v-for="recipe in group.recipes" :key="recipe.name" class="flex flex-col pb-5">
            <h3 class="text-3xl font-semibold text-lime-500">{{ recipe.name }}</h3>
            <div class="grid grid-cols-3 pt-5 max-h-min">
                <img :src="recipe.image" :alt="recipe.name">
                <div class="col-start-2 col-end-4 grid grid-cols-4 grid-rows-6">
                    <div class="col-span-2 row-start-1 row-end-6 grid">
                        <div class="flex">
                            <p class="text-green-400 text-lg">Calorías totales: </p>
                            <p class="text-slate-100 text-lg pl-1">{{ recipe.calories }} kcal</p>
                        </div>
                        <div class="flex" v-if="recipe.labels.length>0">
                            <p class="text-green-400 text-lg">Etiquetas: </p>
                            <p class="text-slate-100 text-lg pl-1" v-for="diet in recipe.labels" :key="diet">{{ diet }}</p>
                        </div>
                        <div class="flex">
                            <p class="text-green-400 text-lg">Tiempo de preparación: </p>
                            <p class="text-slate-100 text-lg pl-1">{{ recipe.time }} minutos</p>
                        </div>
                        <div class="flex">
                            <p class="text-green-400 text-lg">Cantidad de porciones: </p>
                            <p class="text-slate-100 text-lg pl-1">{{ recipe.servings }}</p>
                        </div>
                        <div class="flex">
                            <p class="text-green-400 text-lg">Calorías por porción: </p>
                            <p class="text-slate-100 text-lg pl-1">{{ recipe.calories/recipe.servings }} kcal</p>
                        </div>
                    </div>
                    <div class="row-start-1 row-end-6 col-span-2">
                        <div class="flex flex-col justify-between">
                            <p class="text-green-400 text-lg">Ingredientes:</p>
                            <p class="text-slate-100 text-sm" v-for="ingredient in recipe.ingredients" :key="ingredient">{{ ingredient }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </div>
    </div>
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
                likedRecipesByType: useMenuStore().getLikedRecipesByType
            }
        }
    };
</script>

<style>
    [v-cloak] {
        display: none;
    }
</style>