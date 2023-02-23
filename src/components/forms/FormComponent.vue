<template>
<div class="row">
    <div class="col-lg-4 col-md-6 col-12">
        <ion-item>
            <ion-label position="floating">{{ input1 }}</ion-label>
            <ion-input :placeholder="input1"></ion-input>
        </ion-item>
    </div>
    <div class="col-lg-4 col-md-6 col-12">
        <ion-item>
            <ion-label position="floating">{{ input2 }}</ion-label>
            <ion-input :placeholder="input2"></ion-input>
        </ion-item>
    </div>
    <div class="col-lg-4 col-md-6 col-12">
        <ion-item>
            <ion-label position="floating">{{ input3 }}</ion-label>
            <ion-input :placeholder="input3"></ion-input>
        </ion-item>
    </div>
</div>
<div class="row">
    <div class="col-lg-4 col-md-6 col-12">
        <ion-item>
            <ion-label position="floating">{{ input4 }}</ion-label>
            <ion-input :placeholder="input4"></ion-input>
        </ion-item>
    </div>
    <div class="col-lg-4 col-md-6 col-12">
        <ion-item>
            <ion-label position="floating">{{ input5 }}</ion-label>
            <ion-input :placeholder="input5"></ion-input>
        </ion-item>
    </div>
</div>    

</template>

<script lang="ts">

 import { defineComponent } from 'vue';
 
 export default defineComponent({
    props: {
        input1: String,
        input2: String,
        input3: String,
        input4: String,
        input5: String,
    },
    name:'FormComponent'
 })
</script>

<style scoped>

ion-item{
    --border-width: 1px;
    --border-radius: 20px;
    --highlight-color-focused: #ffc409;
    --color-focused: #000000;
    --detail-font-color: #ffc409;
    --highlight-height: 8px;
    margin-bottom: 20px;
    margin-top: 20px;   
    }
</style>