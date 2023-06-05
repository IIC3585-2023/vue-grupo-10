<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useUserInfoStore } from '../stores/userInfo'

const userInfoStore = useUserInfoStore()
</script>

<template>
    <nav class="navbar">
        <ul>
            <li>
                <div><RouterLink to="/"><img src="../assets/logo_palta_sin_texto.png" alt="logo"/></RouterLink></div>
                <div id="logoName" class="text-4xl"><RouterLink to="/">CalorieFit</RouterLink></div>
            </li>
            <li>
                <div><RouterLink to="/">Home</RouterLink></div>
                <div><RouterLink to="/form">Form</RouterLink></div>
            </li>
        </ul>
    </nav>
</template>

<style scoped>

    a {
        text-decoration: none;
        color: #e8ece7;
    }

    body {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .navbar{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #4CAF50;
        color: #e8ece7;
        padding: 0 20px;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
    }

    ul {
        width: 100%;
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    li {
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 0 20px;
        font-size: 20px;
        width: 20vw;
    }
    .navbar img {
        display: block;
        max-width:200px;
        max-height:100px;
        width: auto;
        height: auto;
    }
    #logoName {
        font-family: 'Alfa Slab One';
    }
</style>