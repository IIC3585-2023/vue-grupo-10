<template>
    <form class="max-w-fit flex flex-col justify-center items-center" @submit.prevent="handleSubmit">
        <h1 class="text-3xl font-bold text-green-300">Ingresa tus datos</h1>
        <br />
        <label for="age">Edad:</label>
        <input v-model="age" type="number" id="age" required min="0" max="80"/>
        <label for="age">Género:</label>
        <select v-model="gender" id="gender" required>
            <option value="male">Masculino</option>
            <option value="female">Femenino</option>
            <option value="other">Otro</option>
        </select>
        <label for="weight">Peso (en kg):</label>
        <input v-model="weight" type="number" id="weight" required min="40" max="160">
        <label for="height">Altura (en cm):</label>
        <input v-model="height" type="number" id="height" required min="130" max="230"/>
        <label for="activityLevel">Nivel de Actividad:</label>
        <select v-model="activityLevel" id="activityLevel" required>
            <option value="level_1">Sedentario: Poco o nada de ejercicio</option>
            <option value="level_2">Ejercicio 1-3 veces por semana</option>
            <option value="level_3">Ejercicio 4-5 veces por semana</option>
            <option value="level_4">Ejercicio diario o ejercicio intenso 3-4 veces por semana</option>
            <option value="level_5">Ejercicio intenso 6-7 veces por semana</option>
            <option value="level_6">Ejercicio diario muy intenso, o trabajo físico</option>
        </select>
        <label for="fitnessPlan">¿Cuál es tu objetivo?</label>
        <select v-model="fitnessPlan" id="activityLevel" required>
            <option value="maintain weight">Mantener peso</option>
            <option value="Mild weight loss">Pérdida de peso leve</option>
            <option value="Weight loss">Pérdida de peso</option>
            <option value="Extreme weight loss">Pérdida de peso extrema</option>
            <option value="Mild weight gain">Aumento de peso leve</option>
            <option value="Weight gain">Aumento de peso</option>
            <option value="Extreme weight gain">Aumento de peso extremo</option>
        </select>
        <br />
        <button class="inline-flex items-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-3xl text-lg" type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="pr-1 w-5 h-5">
                <path fill-rule="evenodd" d="M10 1c-1.716 0-3.408.106-5.07.31C3.806 1.45 3 2.414 3 3.517V16.75A2.25 2.25 0 005.25 19h9.5A2.25 2.25 0 0017 16.75V3.517c0-1.103-.806-2.068-1.93-2.207A41.403 41.403 0 0010 1zM5.99 8.75A.75.75 0 016.74 8h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75v-.01zm.75 1.417a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75v-.01a.75.75 0 00-.75-.75h-.01zm-.75 2.916a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75v-.01zm.75 1.417a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75v-.01a.75.75 0 00-.75-.75h-.01zm1.417-5.75a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75v-.01zm.75 1.417a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75v-.01a.75.75 0 00-.75-.75h-.01zm-.75 2.916a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75v-.01zm.75 1.417a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75v-.01a.75.75 0 00-.75-.75h-.01zm1.42-5.75a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75v-.01zm.75 1.417a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75v-.01a.75.75 0 00-.75-.75h-.01zm-.75 2.916a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75v-.01zm.75 1.417a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75v-.01a.75.75 0 00-.75-.75h-.01zM12.5 8.75a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75v-.01zm.75 1.417a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75v-.01a.75.75 0 00-.75-.75h-.01zm0 2.166a.75.75 0 01.75.75v2.167a.75.75 0 11-1.5 0v-2.167a.75.75 0 01.75-.75zM6.75 4a.75.75 0 00-.75.75v.5c0 .414.336.75.75.75h6.5a.75.75 0 00.75-.75v-.5a.75.75 0 00-.75-.75h-6.5z" clip-rule="evenodd" />
            </svg>
            Calcular
        </button>
    </form>
</template>

<script>
    import { useUserInfoStore } from '../stores/userInfo'
    export default {
        data() {
            return {
                age: null,
                gender: null,
                height: null,
                weight: null,
                activityLevel: null,
                fitnessPlan: null,
                userInfoStore: useUserInfoStore()
            }
        },
        methods: {
            handleSubmit() {
                const formData = {
                    age: this.age,
                    gender: this.gender,
                    height: this.height,
                    weight: this.weight,
                    activityLevel: this.activityLevel,
                    fitnessPlan: this.fitnessPlan
                }
                this.fetchData(formData)
                // this.$emit('bodyDataSubmitted', formData)
            },
            fetchData(formData) {
                const url = import.meta.env.VITE_CALORIES_URL
                const req_url = url + `?age=${formData.age}&gender=${formData.gender}&height=${formData.height}&weight=${formData.weight}&activitylevel=${formData.activityLevel}`
                const options = {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': import.meta.env.VITE_X_RAPID_KEY,
                        'X-RapidAPI-Host': import.meta.env.VITE_X_RAPIDAPI_HOST
                    }
                }
                fetch(req_url, options)
                .then(response => response.json())
                .then(data => {
                    const filteredData = data.data.goals[this.fitnessPlan]
                    if (typeof filteredData == "number") {
                        this.userInfoStore.calories = filteredData
                        this.userInfoStore.caloriesLeft = filteredData
                    } else {
                        this.userInfoStore.calories = filteredData.calory
                        this.userInfoStore.caloriesLeft = filteredData.calory
                    }
                })
                .catch(err => {
                    console.error(err);
                });
            }
        },
    }
</script>

<style scoped>
    input, select {
        margin-bottom: 10px;
        width: 250px;
        padding: 0 10px;
        -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
        -moz-box-sizing: border-box;    /* Firefox, other Gecko */
        box-sizing: border-box;         /* Opera/IE 8+ */
        border-radius: 10px;
    }
    input {
        display: block;
        width: 100%;
        color: black;
        height: 25px;
    }
    select {
        display: block;
        width: 100%;
        color: black;
        height: 25px;
    }
    option {
        color: black;
    }
</style>