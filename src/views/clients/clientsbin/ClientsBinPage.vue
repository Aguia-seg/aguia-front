<template>
    <AppLayout>
        <ion-header>
            <ion-toolbar>
                <ion-title>Lixeira de clientes</ion-title>

                <ion-buttons slot="secondary">
                    <ion-button shape="round" class="add-button mr-4" @click="goBack()">Voltar</ion-button>

                </ion-buttons>
            </ion-toolbar>

        </ion-header>
        <div class="container-fluid d-flex justify-content-center">
            <ion-item v-if="!spinner" class="search">
                <ion-input v-model="form.search" placeholder="Pesquisar por nome ou CPF/CNPJ"><ion-icon :icon="searchOutline"></ion-icon></ion-input>

            </ion-item>
            <ion-buttons slot="secondary" >
                <ion-button  shape="round" class="edit-button" @click="searchClient(form)" v-if="!spinner">buscar</ion-button>

            </ion-buttons>

        </div>
        <div class="container-fluid ">
            <ion-spinner color="success" v-if="spinner"></ion-spinner>
            <table class="table" v-if="!spinner">
                <thead>
                    <tr>
                        <th scope="col">Ativo</th>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">CPF_CNPJ</th>
                        <th scope="col">Celular</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody v-if="clients != null">
                    <tr v-for="client in clients" :key="client.id">
                        <td>
                            <i v-if="client.active == 1" class="fas fa-circle text-success"></i>
                            <i v-else-if="client.active == 0" class="fas fa-circle text-danger"></i>
                        </td>
                        <th scope="row">{{ client.id }}</th>
                        <td>{{ client.name }}</td>
                        <td>{{ client.type }}</td>
                        <td>{{ client.cpf_cnpj }}</td>

                        <td>{{ client.phone }}</td>
                        <td>{{ client.email }}</td>
                        <td>
                            <div class="d-flex align-items-center">
                                <ion-button color="danger" size="small" @click="doForceDelete(client.id)">
                                    <ion-icon class="search-button"
                                        :icon="closeOutline"></ion-icon></ion-button>
                                
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </AppLayout>
</template>

<script lang="ts" src="./ClientsBinPage.ts"></script>
<style scoped src="./ClientsBinPage.css"></style>