<script>
import BodyDataForm from '../components/BodyDataForm.vue'
import DailyCalories from '../components/DailyCalories.vue'
import DietPreferencesForm from '../components/DietPreferencesForm.vue'
import { useUserInfoStore } from '../stores/userInfo'


export default {
    data() {
        return {
            caloryData: null,
            bodyData: null,
            userInfoStore: useUserInfoStore()
        }
    },
    components: {
        BodyDataForm,
        DailyCalories,
        DietPreferencesForm
    },
    methods: {
        handleBodyData(formData) {
            this.bodyData = formData
        }
    }
}
</script>

<template>
    <div class="flex justify-evenly pt-20">
        <BodyDataForm v-if="!userInfoStore.calories"/>
        <DailyCalories v-if="userInfoStore.calories"/>
        <DietPreferencesForm v-if="userInfoStore.calories"/>
    </div>
</template>
