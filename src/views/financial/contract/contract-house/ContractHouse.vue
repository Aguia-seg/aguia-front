
<template>
    <AppLayout>
        <ion-header>
            <ion-toolbar>
                <div class="d-flex justify-content-between">
                    <ion-title>{{ client.name }}</ion-title>
                    <div class="d-flex">
                        <ion-button class="ml-2" :router-link="{name:'ClientProfile', params:{id: client.id}}" color="warning">Voltar</ion-button>
                    </div>
                </div>

            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <ion-spinner color="success" v-if="spinner"></ion-spinner>
            <div class="all-content" v-if="!spinner">

                <div class="container client-sheet mt-5 shadow">
                    <ion-grid>
                        <ion-row>
                            <ion-col class="d-flex justify-content-start" size="8">
                                <h3>Contratos</h3>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Ativo</th>
                                <th scope="col">Data de contração</th>
                                <th scope="col">ID</th>
                                <th scope="col">Plano</th>
                                <th scope="col">Valor</th>
                                <th scope="col">Dia de Pagamento</th>
                                <th scope="col">Data de Vencimento</th>
                                <th scope="col">Ações</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="cli in client.contracts" :key="cli.id">
                                <td>
                                    <i v-if="cli.plan.status == 1" class="fas fa-circle text-success"></i>
                                    <i v-else-if="cli.plan.status == 0" class="fas fa-circle text-danger"></i>
                                </td>
                                <td>{{ cli.created_at }}</td>
                                <td scope="row">{{ cli.id }}</td>
                                <td>{{ cli.plan.description }}</td>
                                <td>R${{ cli.plan.value }}</td>
                                <td>{{ cli.payday }}</td>
                                <td>{{ cli.expiration }}</td>

                                <td class="d-flex">
                                    <div class="d-flex flex-column align-items-center justify-content-center mr-2">
                                        <ion-button color="success"
                                            :router-link="{ name: 'ContractCompaonentTest', params: { id: cli.id } }"
                                            size="small"><ion-icon class="search-button"
                                                :icon="pencilOutline"></ion-icon></ion-button>
                                        <p style="font-size: 10px;">Gerar contrato</p>
                                    </div>

                                    <div class="d-flex flex-column align-items-center justify-content-center">
                                        <ion-button color="success" size="small"><ion-icon class="search-button"
                                                :icon="refreshOutline"></ion-icon></ion-button>
                                        <p style="font-size: 10px;">Renovar contrato</p>
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
                                <th scope="col">Dias</th>
                                <th scope="col">Desconto %</th>
                                <th scope="col">Acréscimo</th>
                                <th scope="col">data de vencimento</th>
                                <th scope="col">Valor</th>
                                <th scope="col">Situação</th>
                                <th scope="col">Receber</th>
                            </tr>
                        </thead>
                        <tbody v-for="contract in client.contracts" :key="contract.id">
                            <tr v-for="invoice in contract.invoices" :key="invoice.id">
                                <td>{{ invoice.id }}</td>
                                <td>{{ invoice.days }}</td>
                                <td>{{ invoice.off }}</td>
                                <td>{{ invoice.addition }}</td>
                                <td>{{ invoice.expiration }}</td>
                                <td>R$ {{ invoice.value }}</td>
                                <td>{{ invoice.type }}</td>
                                <td>
                                    <div class="d-flex align-items-center justify-content-center">
                                        <ion-button color="success"
                                            @click="modalPayment(), getInvoice(invoice.id)"><ion-icon
                                                :icon="cashOutline"></ion-icon></ion-button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </ion-content>
    </AppLayout>
</template>

<script lang="ts" src="./ContractHouse.ts"></script>

<style scoped src="./ContractHouse.css"></style>