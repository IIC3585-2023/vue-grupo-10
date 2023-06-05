import { defineStore } from 'pinia'

export interface State {
    calories: number | null
    caloriesLeft: number | null
    typeOfMeal: string[]
    diets: string[]
    allergies: string[]
    mealSelection: string | null
}

export const useUserInfoStore = defineStore('userInfo', {
state: (): State => {
    return {
        calories: null,
        caloriesLeft: null,
        typeOfMeal: [],
        diets: [],
        allergies: [],
        mealSelection: null
    }
},
getters: {
    getTabs: (state) => {
        const tabs = state.typeOfMeal.map((meal, index) => {
            return {
                id: index+1,
                title: meal,
            }
        }, [])
        return tabs
    }
}})