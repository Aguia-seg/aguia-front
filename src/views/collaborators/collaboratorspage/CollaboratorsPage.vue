<template>
    <AppLayout>
        <ion-header>
            <ion-toolbar>
                <ion-title>Cadastros de Colaboradores</ion-title>

                <ion-buttons slot="secondary">
                    <ion-button shape="round" class="add-button mr-4" @click="formCollabs()">Adicionar</ion-button>
                    
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
                        <th scope="col">Tipo</th>
                        <th scope="col">Nome</th>
                        <th scope="col">CPF</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Whatsapp</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Cobrador</td>
                        <td>Torres Tortas</td>
                        <td>999.999.999-99</td>
                        <td>TorresTortas@fortnite.com</td>
                        <td>87999999999</td>
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
<script lang="ts" src="./CollaboratorsPage.ts"></script>
<style scoped src="./CollaboratorsPage.css"></style>