<template>
    <AppLayout>
        <ion-header>
            <ion-toolbar>
                <ion-title>Cadastros de residências</ion-title>

                <ion-buttons slot="secondary">
                    <ion-button shape="round" color="primary" class="mr-4" @click="formHouses()">Abrir filtro</ion-button>
                    <ion-button v-show="displayClearFilter" shape="round" color="danger" @click="disableClearFilter()" >limpar filtro</ion-button>  
                </ion-buttons>
            </ion-toolbar>
        
        </ion-header>
        <ion-spinner color="success" v-if="spinner"></ion-spinner>
        <div class="container-fluid " v-if="!spinner">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Cidade</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">CEP</th>
                        <th scope="col">Rua</th>
                        <th scope="col">Bairro</th>
                        <th scope="col">Número</th>
                        <th scope="col">Ações</th>
                        
                       
                    </tr>
                </thead>
                <tbody >
                    <tr v-for="house in houses" :key="house.id">
                        <th scope="row">{{ house.id }}</th>
                        <td>{{ house.city }}</td>
                        <td>{{ house.type }}</td>
                        <td>{{ house.cep }}</td>
                        <td>{{ house.street }}</td>
                        <td>{{ house.district }}</td>
                        <td>{{ house.number }}</td>

                    
                        <td>
                            <div class="d-flex align-items-center">
                                <ion-button class="delete-button mr-2" size="small"><ion-icon
                                        :icon="closeOutline"></ion-icon></ion-button>
                                <ion-button class="edit-button mr-2" size="small"><ion-icon
                                        :icon="createOutline"></ion-icon></ion-button>
                                <ion-button size="small"><ion-icon class="search-button"
                                        :icon="searchOutline"></ion-icon></ion-button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </AppLayout>
</template>

<script lang="ts" src="./HousesPage.ts"></script>
<style scoped src="./HousesPage.css"></style>