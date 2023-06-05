<template>
    <div class="">
        <div class="flex items-center justify-between fixed calorybar px-10 pb-5 pt-28 my-5 box-border w-full">
            <div>
                <button
                    v-for="tab in tabs"
                    :key="tab.id"
                    @click="handleClick(tab)"
                    :class="{
                    'bg-green-500 text-white': activeTab === tab.id,
                    'bg-gray-200 text-gray-700': activeTab !== tab.id,
                    'rounded-l-md': tab.id === 1,
                    'rounded-r-md': tab.id === tabs.length,
                    'rounded-none': tab.id !== 1 && tab.id !== tabs.length
                    }"
                    class="py-2 px-4 text-sm font-medium focus:outline-none"
                >
                    {{ capitalize(tab.title) }}
                </button>
            </div>
            <div class="text-lg text-white">Calorías totales por día: {{ userInfoStore.calories }} kcal</div>
            <div class="text-lg text-white">Calorías restantes: {{ userInfoStore.caloriesLeft }} kcal</div>
            <div class="tooltip rounded-md bg-gray-200 text-gray-700 py-2 px-4 text-sm font-medium focus:outline-none" @mouseover="showMenu = menuStore.likedRecipes.length > 0" @mouseleave="showMenu = false">
                Menú del día hasta ahora
                <div v-show="showMenu" class="tooltiptext">
                    <div v-for="recipe in menuStore.likedRecipes" :key="recipe.name" class="px-1">{{ recipe.name }}</div>
                    <button @click="deleteAll()" class="rounded-md bg-red-500 text-white my-2 py-1 px-4 text-sm font-medium focus:outline-none">Eliminar todas</button>
                </div>
            </div>
            <div v-if="missingRecipes()" class="tooltip rounded-md bg-red-500 text-white py-2 px-4 text-sm font-medium focus:outline-none" @mouseover="showMissing = true" @mouseleave="showMissing = false">
                Terminar Menú
                <div v-show="showMissing" class="tooltiptext-finish">
                    Te falta agregar una receta para:
                    <div v-for="mealType in missingTypes" :key="mealType">{{ mealType }}</div>
                </div>
            </div>
            <button v-else class="rounded-md bg-green-500 text-white py-2 px-4 text-sm font-medium focus:outline-none" @click="handleFinish()">
                Terminar Menú
            </button>
        </div>

        <div class="mt-4 px-20 pt-52">
            <div v-for="tab in tabs" :key="tab.id" v-show="activeTab === tab.id" class="grid">
                <SelectRecipes :mealType="tab.title"/>
            </div>
        </div>
    </div>
</template>

<script>
import SelectRecipes from '../components/SelectRecipes.vue'
import { useUserInfoStore } from '../stores/userInfo'
import { useMenuStore } from '../stores/menu'

export default {
    data() {
        return {
            userInfoStore: useUserInfoStore(),
            menuStore: useMenuStore(),
            activeTab: 1,
            tabs: useUserInfoStore().getTabs,
            showMenu: false,
            showMissing: false,
            missingTypes: []
        };
    },
    components: {
        SelectRecipes
    },
    methods: {
        handleClick(tab) {
            this.activeTab = tab.id
            useUserInfoStore().mealSelection = tab.title
        },
        capitalize(word) {
            return word.charAt(0).toUpperCase() + word.slice(1)
        },
        missingRecipes() {
            this.missingTypes = []
            let hasMissingRecipes = false
            this.userInfoStore.typeOfMeal.forEach((type) => {
                let typeIsMissing = false
                if (this.menuStore.likedRecipes.filter(elem => elem.typeOfMeal === type).length == 0) {
                    typeIsMissing = true
                }
                if (typeIsMissing) {
                    this.missingTypes.push(this.capitalize(type))
                    hasMissingRecipes = true
                }
            })

            return hasMissingRecipes
        },
        deleteAll() {
            this.userInfoStore.caloriesLeft = this.userInfoStore.calories
            this.menuStore.likedRecipes = []
        },
        handleFinish() {
            this.$router.push({path: "/menu"})
        }
    },
    mounted() {
        this.activeTab = 1
    }
};
</script>

<style>
    .calorybar {
        background-color: #263126;
    }
    .tooltip {
        position: relative;
        display: inline-block;
        z-index: 1;
    }
    .tooltip .tooltiptext {
        width: 200%;
        background-color: black;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px 0;

        position: absolute;
        z-index: -1;
        top: 100%;
        right: 0;
        transform: translateX(-50%);
        left: 50%;
    }
    .tooltip .tooltiptext-finish {
        width: 200%;
        background-color: black;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px 0;

        position: absolute;
        z-index: -1;
        top: 100%;
        right: 0;
        /* transform: translateX(-50%);
        left: 50%; */
    }
</style>
