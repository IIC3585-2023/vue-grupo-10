<template>
    <div class="flex items-center justify-around pt-20">
        <div>
            <div class="grid max-w-2xl">
                <h4 class="text-2xl font-bold text-green-300 text-justify">CalorieFit es una plataforma en línea que te ayuda a alcanzar tus objetivos de peso y mantener un estilo de vida saludable.</h4>
                <br>
                <h4 class="text-2xl font-bold text-green-500 text-justify">Obtén una estimación precisa de tus necesidades calóricas diarias y descubre recetas deliciosas y nutritivas que se adapten a tus preferencias y requerimientos.</h4>
                <br>
                <h4 class="text-2xl font-bold text-lime-500 text-justify">¡Comienza tu viaje hacia una alimentación equilibrada y disfruta de una vida saludable con CalorieFit!</h4>
                <br>
            </div>
            <RouterLink to="/form">
                <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-3xl text-lg">
                    Calcula tu consumo diario de calorías
                </button>
            </RouterLink>
        </div>
        <img class="rounded-2xl" src="../assets/logo_palta.png" alt="logo"/>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<!-- <script setup lang="ts">
import NavBar from '../components/NavBar.vue'
</script> -->

<style>
  /* img {
    border-radius: 25px;
  } */
</style>