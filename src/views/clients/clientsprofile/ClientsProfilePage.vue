
<template>
    <AppLayout>
        <ion-header>
            <ion-toolbar>
                <div class="d-flex justify-content-between">
                    <ion-title>{{ client.name }}</ion-title>
                    <div class="d-flex">
                        <ion-button color="danger">Deletar<ion-icon :icon="closeOutline"></ion-icon></ion-button>
                        <ion-button class="ml-2" color="warning">Editar<ion-icon
                                :icon="createOutline"></ion-icon></ion-button>
                    </div>
                </div>

            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <ion-grid>
                <ion-row>
                    <ion-col>
                        <div class="container p-0 client-sheet mt-4 shadow">
                            <ion-grid>
                                <ion-row>
                                    <ion-col class="first-col d-flex justify-content-center">Tipo:</ion-col>
                                    <ion-col class="sec-col d-flex justify-content-center">{{ format.type }}</ion-col>
                                </ion-row>
                                <ion-row>
                                    <ion-col class="first-col d-flex justify-content-center">CPF/CNPJ:</ion-col>
                                    <ion-col class="sec-col d-flex justify-content-center">{{ client.cpf_cnpj }}</ion-col>
                                </ion-row>
                                <ion-row>
                                    <ion-col class="first-col d-flex justify-content-center">Ativo:</ion-col>
                                    <ion-col class="sec-col d-flex justify-content-center">{{ format.active }}</ion-col>
                                </ion-row>
                                <ion-row>
                                    <ion-col class="first-col d-flex justify-content-center">Telefone:</ion-col>
                                    <ion-col class="sec-col d-flex justify-content-center">{{ client.phone }}</ion-col>
                                </ion-row>
                                <ion-row>
                                    <ion-col class="first-col d-flex justify-content-center">E-mail:</ion-col>
                                    <ion-col class="sec-col d-flex justify-content-center">{{ client.email }}</ion-col>
                                </ion-row>
                                <ion-row>
                                    <ion-col class=" d-flex justify-content-center">Veículo(s)</ion-col>
                                    <ion-col class="last-col d-flex justify-content-center">{{ client.veicle }}</ion-col>
                                </ion-row>

                            </ion-grid>
                        </div>
                    </ion-col>
                    <ion-col>
                        <div class="container p-0 client-sheet mt-4 shadow">
                            <ion-grid>
                                <ion-row>
                                    <ion-col class="first-col d-flex justify-content-center">Cidade:</ion-col>
                                    <ion-col class="sec-col d-flex justify-content-center">{{ client.city }}</ion-col>
                                </ion-row>
                                <ion-row>
                                    <ion-col class="first-col d-flex justify-content-center">CEP:</ion-col>
                                    <ion-col class="sec-col d-flex justify-content-center">{{ client.cep }}</ion-col>
                                </ion-row>
                                <ion-row>
                                    <ion-col class="first-col d-flex justify-content-center">Rua:</ion-col>
                                    <ion-col class="sec-col d-flex justify-content-center">{{ client.street }}</ion-col>
                                </ion-row>
                                <ion-row>
                                    <ion-col class="first-col d-flex justify-content-center">Bairro:</ion-col>
                                    <ion-col class="sec-col d-flex justify-content-center">{{ client.district }}</ion-col>
                                </ion-row>
                                <ion-row>
                                    <ion-col class="first-col d-flex justify-content-center">Número:</ion-col>
                                    <ion-col class="sec-col d-flex justify-content-center">{{ client.number }}</ion-col>
                                </ion-row>
                                <ion-row>
                                    <ion-col class="d-flex justify-content-center">Complemento:</ion-col>
                                    <ion-col class="last-col d-flex justify-content-center">{{ client.complement }}</ion-col>
                                </ion-row>
                            </ion-grid>
                        </div>
                    </ion-col>
                </ion-row>
            </ion-grid>
            <div class="container client-sheet mt-5 shadow">
                <ion-grid>
                    <ion-row>
                        <ion-col class="d-flex justify-content-center">
                            <h3>Contratos</h3>
                        </ion-col>
                    </ion-row>
                </ion-grid>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Ativo</th>
                            <th scope="col">ID</th>
                            <th scope="col">Plano</th>
                            <th scope="col">Valor</th>
                            <th scope="col">Data de Pagamento</th>
                            <th scope="col">Data de Vencimento</th>
                            <th scope="col">Renovar contrato</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="cli in client.contracts" :key="cli.id">
                            <td>
                                <i v-if="cli.plan.status == 1" class="fas fa-circle text-success"></i>
                                <i v-else-if="cli.plan.status == 0" class="fas fa-circle text-danger"></i>
                            </td>
                            <td scope="row">{{ cli.id }}</td>
                            <td>{{ cli.plan.description }}</td>
                            <td>R${{ cli.plan.value }}</td>
                            <td>{{ cli.payday }}</td>
                            <td>{{ cli.expiration }}</td>

                            <td>
                                <div class="d-flex align-items-center justify-content-center">
                                    <ion-button color="success" size="small"><ion-icon class="search-button"
                                            :icon="refreshOutline"></ion-icon></ion-button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="container client-sheet mt-5 shadow">
                <ion-grid>
                    <ion-row>
                        <ion-col class="d-flex justify-content-center">
                            <h3>Total de débitos</h3>
                        </ion-col>
                    </ion-row>
                </ion-grid>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">N° do boleto</th>
                            <th scope="col">Desconto %</th>
                            <th scope="col">data de vencimento</th>
                            <th scope="col">Valor</th>
                            <th scope="col">Situação</th>
                            <th scope="col">Receber</th>
                        </tr>
                    </thead>
                    <tbody v-for="contract in client.contracts" :key="contract.id" >
                        <tr v-for="invoice in contract.invoices"  :key="invoice.id">
                            <td>{{ invoice.id }}</td>
                            <td>{{ invoice.off }}</td>
                            <td>{{ invoice.expiration }}</td>
                            <td>R$ {{ invoice.value }}</td>
                            <td>{{ invoice.type }}</td>
                            <td>
                                <div class="d-flex align-items-center justify-content-center">
                                    <ion-button color="success"><ion-icon :icon="cashOutline"></ion-icon></ion-button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </ion-content>
    </AppLayout>
</template>

<script lang="ts" src="./ClientsProfilePage.ts"></script>

<style scoped src="./ClientsProfilePage.css"></style>