import { defineStore } from 'pinia'

export interface State {
    likedRecipes: Meal[]
}

export const useMenuStore = defineStore('menu', {
state: (): State => {
    return {
        likedRecipes: []
    }
},
actions: {
    addLikedRecipe(recipe: Meal) {
        this.likedRecipes.push(recipe)
    },
    removeLikedRecipe(recipe: Meal) {
        const index = this.likedRecipes.findIndex((likedRecipe) => likedRecipe.name === recipe.name);
        this.likedRecipes.splice(index, 1)
    }
},
getters: {
    getLikedRecipesByType: (state) => {
        const nameDict: { [key:string]: string } = {
            "breakfast": "Desayuno",
            "lunch": "Almuerzo",
            "dinner": "Cena",
            "snack": "Colación",
            "brunch": "Brunch",
            "teatime": "Once"
        }
        const likedTypes = state.likedRecipes.map((recipe) => recipe.typeOfMeal)
        const uniqueTypes = [...new Set(likedTypes)]
        const likedRecipesByType = uniqueTypes.map((mealType) => {
            return {
                mealType: mealType,
                name: nameDict[mealType],
                recipes: state.likedRecipes.filter((recipe) => recipe.typeOfMeal === mealType)
            }
        })
        return likedRecipesByType;
    }
}})

export interface Meal {
    name: string
    ingredients: string[]
    calories: number
    typeOfMeal: string
    image: string
    time: number
    labels: string[]
    servings: number
}