
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
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Ativo</th>
                        <th scope="col">Telefone</th>
                        <th scope="col">Celular</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Maria Joana</td>
                        <td>Pessoa Fisica</td>
                        <td>True</td>
                        <td>74999999999</td>
                        <td>74366666666</td>
                        <td>Maria@bunita.com</td>
                        <td>
                            <div class="d-flex align-items-center">
                                <ion-button router-link="/clients/profile" size="small"><ion-icon class="search-button"
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