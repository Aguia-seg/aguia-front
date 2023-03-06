<template>
    <AppLayout>
        <ion-header>
            <ion-toolbar>
                <ion-title>Consulta de Mensalidade</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content></ion-content>
    </AppLayout>
    <div class="container-fluid d-flex justify-content-center">
            <ion-item class="search">
                <ion-input v-model="form.search" placeholder="Pesquisar"><ion-icon :icon="searchOutline"></ion-icon></ion-input>

            </ion-item>
            <ion-buttons slot="secondary" >
                <ion-button  shape="round" class="edit-button">buscar</ion-button>
            </ion-buttons>

        </div>
        <div class="container-fluid ">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID do cliente</th>
                        <th scope="col">Nome do cliente</th>
                        <th scope="col">Desconto %</th>
                        <th scope="col">Data de vencimento</th>
                        <th scope="col">Valor</th>
                        <th scope="col">Situação</th>
                        <th scope="col">Receber</th>
                    </tr>
                </thead>
            </table>
        </div>    
</template>

<script lang="ts" src="./MonthlyPaymentPage.ts"></script>
<style scoped src="./MonthlyPaymentPage.css"></style>