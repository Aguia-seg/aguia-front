<template>
    <div>
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
                        <th scope="col" style="text-align: center;">Situação</th>
                        <th scope="col" style="text-align: center;">Ações</th>
                        
                       
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
                           <span v-if="house.badgets.id == 5">
                            <ion-badge class="white-badge">{{ house.badgets.description }}</ion-badge></span> 
                           <span v-if="house.badgets.id == 2">
                            <ion-badge class="yellow-badge">{{ house.badgets.description }}</ion-badge></span> 
                           <span v-if="house.badgets.id == 3">
                            <ion-badge class="blue-badge">{{ house.badgets.description }}</ion-badge></span> 
                           <span v-if="house.badgets.id == 4">
                            <ion-badge class="green-badge">{{ house.badgets.description }}</ion-badge></span> 
                           <span v-if="house.badgets.id == 6">
                            <ion-badge class="white-and-red-badge">{{ house.badgets.description }}</ion-badge></span> 
                           <span v-if="house.badgets.id == 1">
                            <ion-badge class="red-badge">{{ house.badgets.description }}</ion-badge></span> 
                           <span v-if="house.badgets.id == 7">
                            <ion-badge class="red-badge">{{ house.badgets.description }}</ion-badge></span> 
                           </td>
                           <td>
                            <ion-button color="success" size="small" title="Cadastrar Serviço"><ion-icon class="search-button"
                                :icon="addOutline"></ion-icon></ion-button>
                           </td>
                    </tr>
                </tbody>
            </table>
    </div>
</template>

<script lang="ts" src="./HousesComponent.ts"></script>