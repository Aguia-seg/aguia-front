
<template>
    <AppLayout>
        <ion-header>
            <ion-toolbar>
                <ion-title>Cadastros de clientes</ion-title>

                <ion-buttons slot="secondary">
                    <ion-button shape="round" class="add-button mr-4" @click="formClient()">Adicionar</ion-button>
                    
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
            <ion-spinner color="success" v-if="spinner"></ion-spinner>
            <table class="table" v-if="!spinner">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">CPF_CNPJ</th>
                        <th scope="col">Ativo</th>
                        <th scope="col">Celular</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="client in clients" :key="client.id">
                        <th scope="row">{{ client.id }}</th>
                        <td>{{ client.name }}</td>
                        <td>{{ client.type }}</td>
                        <td>{{ client.cpf_cnpj }}</td>
                        <td>
                            <i v-if="client.active == 1" class="fas fa-circle text-success"></i>
                            <i v-else-if="client.active == 0" class="fas fa-circle text-danger"></i>
                        </td>
                        <td>{{ client.phone }}</td>
                        <td>{{ client.email }}</td>
                        <td>
                            <div class="d-flex align-items-center">
                                <ion-button :router-link="{name: 'ClientProfile', params:{ id: client.id}}" size="small"><ion-icon class="search-button"
                                        :icon="searchOutline"></ion-icon></ion-button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </AppLayout>
</template>

<script lang="ts" src="./ClientsPage.ts"></script>
<style scoped src="./ClientsPage.css"></style>