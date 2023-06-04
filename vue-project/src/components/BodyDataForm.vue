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
            <option value="level_4">Ejercicio diario or ejercicio intenso 3-4 veces por semana</option>
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
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-3xl text-lg" type="submit">Calcular</button>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                age: null,
                gender: null,
                height: null,
                weight: null,
                activityLevel: null,
                fitnessPlan: null,
            }
        },
        methods: {
            async handleSubmit() {
                const formData = {
                    age: this.age,
                    gender: this.gender,
                    height: this.height,
                    weight: this.weight,
                    activityLevel: this.activityLevel,
                    fitnessLevel: this.fitnessLevel
                }
                this.fetchData(formData)
                this.$emit('bodyDataSubmitted', formData)
            },
            fetchData(formData) {
                const url = `https://fitness-calculator.p.rapidapi.com/dailycalorie?age=${formData.age}&gender=${formData.gender}&height=${formData.height}&weight=${formData.weight}&activitylevel=${formData.activityLevel}`
                const options = {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': '4c91e7a456mshc4728eff1caa968p1ca6b3jsndaaf871c9e2f',
                        'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
                    }
                }
                fetch(url, options)
                .then(response => response.json())
                .then(data => {
                    const filteredData = data.data.goals[this.fitnessPlan]
                    this.$emit('caloryDataSubmitted', filteredData)
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