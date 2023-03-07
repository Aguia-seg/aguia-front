<template>
    <AppLayout>
        <ion-header>
            <ion-toolbar>
                <ion-title>Cadastros de residências</ion-title>

                <ion-buttons slot="secondary">
                    <ion-button shape="round" class="add-button mr-4" @click="formHouses()">Pesquisar</ion-button>
                    
                </ion-buttons>
            </ion-toolbar>
        
        </ion-header>
    <!-- <div class="row">
            <div class="col-lg-6 col-12">
                <div class="d-flex align-items-center">
                    <ion-button shape="round" class="add-button mr-4">Adicionar</ion-button>
                    <ion-item>
                        <ion-input placeholder="Pesquisar"><ion-icon :icon="searchOutline"></ion-icon></ion-input>
                    </ion-item>
                </div>
            </div>
                        </div> -->
        <div class="container-fluid ">
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
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Petrolina</td>
                        <td>Apartamento</td>
                        <td>9999-99</td>
                        <td>Rua genérica</td>
                        <td>Bairro qualquer</td>
                        <td>27</td>

                    
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