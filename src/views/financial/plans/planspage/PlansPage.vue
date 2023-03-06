<template>
<AppLayout>
    <ion-header>
            <ion-toolbar>
                <ion-title>Cadastros de Planos</ion-title>
                <ion-buttons slot="secondary">
                    <ion-button shape="round" @click="formPlans()" class="add-button mr-4" >Adicionar</ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <div class="container-fluid ">
            <ion-spinner color="success" v-if="spinner"></ion-spinner>
            <table  class="table" v-if="!spinner">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Valor</th>
                        <th scope="col">Status</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="plan in plans" :key="plan.id">
                        <th scope="row"> {{ plan.id }}</th>
                        <td>{{ plan.description }}</td>
                        <td> {{ plan.value }}</td>
                        <td> {{ plan.status }}</td>
                        <td>
                            <div class="d-flex align-items-center">
                                <ion-button color="danger" size="small"><ion-icon
                                        :icon="closeOutline"></ion-icon></ion-button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>         
</AppLayout>
</template>

<script lang="ts" src="./PlansPage.ts">
import AppLayout from '@/layout/AppLayout';
</script>
<style scoped src="./PlansPage.css"></style>
