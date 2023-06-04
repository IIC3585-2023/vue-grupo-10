<template>
    <div v-if="caloryData">
        <h2 class="text-3xl font-bold text-green-300">Consumo diario de calorías recomendado</h2>
        <br />
        <p v-if="maintainWeight(bodyData.fitnessLevel)">{{ caloryData }}</p>
        <p v-else>{{ caloryData.calory }}</p>
    </div>
</template>

<script>
    export default {
        props: {
            caloryData: {
                type: Object
            },
            bodyData: {
                type: Object
            }
        },
        methods: {
            maintainWeight(fitnessLevel) {
                return fitnessLevel == "maintain weight"
            }
        }
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