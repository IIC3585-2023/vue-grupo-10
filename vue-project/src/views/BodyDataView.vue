<script>
import BodyDataForm from '../components/BodyDataForm.vue'
import DailyCalories from '../components/DailyCalories.vue'
export default {
    data() {
        return {
            caloryData: null,
            bodyData: null
        }
    },
    components: {
        BodyDataForm,
        DailyCalories
    },
    methods: {
        handleCaloryData(responseData) {
            this.caloryData = responseData
        },
        handleBodyData(formData) {
            this.bodyData = formData
        }
    }
}
</script>

<template>
  <div class="flex p-20 justify-evenly">
    <BodyDataForm @caloryDataSubmitted="handleCaloryData" @bodyDataSubmitted="handleBodyData"/>
    <DailyCalories :caloryData="caloryData" :bodyData="bodyData"/>
  </div>
</template>
