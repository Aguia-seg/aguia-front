<template>
<AppLayout>
    <ion-header>
        <ion-toolbar>
            <ion-title>Nome</ion-title>
        </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
        <div class="container p-0 client-sheet mt-4 shadow">
            <ion-grid>
                <ion-row>
                    <ion-col class="first-col d-flex justify-content-center">Tipo:</ion-col>
                    <ion-col class="sec-col d-flex justify-content-center">Pessoa física</ion-col>
                </ion-row>
                <ion-row>
                    <ion-col class="first-col d-flex justify-content-center">Ativo:</ion-col>
                    <ion-col class="sec-col d-flex justify-content-center">True</ion-col>
                </ion-row>
                <ion-row>
                    <ion-col class="first-col d-flex justify-content-center">Telefone:</ion-col>
                    <ion-col class="sec-col d-flex justify-content-center">87999999999</ion-col>
                </ion-row>
                <ion-row>
                    <ion-col class="first-col d-flex justify-content-center">Celular:</ion-col>
                    <ion-col class="sec-col d-flex justify-content-center">87999999999</ion-col>
                </ion-row>
                <ion-row>
                    <ion-col class="d-flex justify-content-center">E-mail:</ion-col>
                    <ion-col class="last-col d-flex justify-content-center">Torres@tortas.com</ion-col>
                </ion-row>
            </ion-grid>
        </div>
        <div class="container-fluid mt-5">
            <ion-accordion-group>
                <ion-accordion value="first">
                    <ion-item slot="header" color="light">
                        <ion-label>First Accordion</ion-label>
                    </ion-item>
                    <div class="ion-padding" slot="content">
                        <ion-grid>
                            <ion-row>
                                <ion-col class="first-col d-flex justify-content-center">Cidade:</ion-col>
                                <ion-col class="sec-col d-flex justify-content-center">Petrolina</ion-col>
                            </ion-row>
                            <ion-row>
                                <ion-col class="first-col d-flex justify-content-center">Tipo:</ion-col>
                                <ion-col class="sec-col d-flex justify-content-center">Apartamento</ion-col>
                            </ion-row>
                            <ion-row>
                                <ion-col class="first-col d-flex justify-content-center">CEP:</ion-col>
                                <ion-col class="sec-col d-flex justify-content-center">99999999</ion-col>
                            </ion-row>
                            <ion-row>
                                <ion-col class="first-col d-flex justify-content-center">Rua:</ion-col>
                                <ion-col class="sec-col d-flex justify-content-center">Rua qualquer</ion-col>
                            </ion-row>
                            <ion-row>
                                <ion-col class="d-flex justify-content-center">Bairro:</ion-col>
                                <ion-col class="last-col d-flex justify-content-center">Bairro qualquer</ion-col>
                            </ion-row>
                            <ion-row>
                                <ion-col class="d-flex justify-content-center">Número:</ion-col>
                                <ion-col class="last-col d-flex justify-content-center">127</ion-col>
                            </ion-row>
                            <ion-row>
                                <ion-col class="d-flex justify-content-center">Bloco:</ion-col>
                                <ion-col class="last-col d-flex justify-content-center">3</ion-col>
                            </ion-row>
                        </ion-grid>
                    </div>
                </ion-accordion>
                <ion-accordion value="second">
                    <ion-item slot="header" color="light">
                        <ion-label>Second Accordion</ion-label>
                    </ion-item>
                    <div class="ion-padding" slot="content">
                        <ion-grid>
                            <ion-row>
                                <ion-col class="first-col d-flex justify-content-center">Cidade:</ion-col>
                                <ion-col class="sec-col d-flex justify-content-center">Petrolina</ion-col>
                            </ion-row>
                            <ion-row>
                                <ion-col class="first-col d-flex justify-content-center">Tipo:</ion-col>
                                <ion-col class="sec-col d-flex justify-content-center">Casa</ion-col>
                            </ion-row>
                            <ion-row>
                                <ion-col class="first-col d-flex justify-content-center">CEP:</ion-col>
                                <ion-col class="sec-col d-flex justify-content-center">99999999</ion-col>
                            </ion-row>
                            <ion-row>
                                <ion-col class="first-col d-flex justify-content-center">Rua:</ion-col>
                                <ion-col class="sec-col d-flex justify-content-center">Rua qualquer</ion-col>
                            </ion-row>
                            <ion-row>
                                <ion-col class="d-flex justify-content-center">Bairro:</ion-col>
                                <ion-col class="last-col d-flex justify-content-center">Bairro qualquer</ion-col>
                            </ion-row>
                            <ion-row>
                                <ion-col class="d-flex justify-content-center">Número:</ion-col>
                                <ion-col class="last-col d-flex justify-content-center">62</ion-col>
                            </ion-row>
                            <ion-row>
                                <ion-col class="d-flex justify-content-center">Bloco:</ion-col>
                                <ion-col class="last-col d-flex justify-content-center">1</ion-col>
                            </ion-row>
                        </ion-grid>
                    </div>
                </ion-accordion>
               
            </ion-accordion-group>
        </div>
        <div class="container client-sheet mt-5 shadow">
            <ion-grid>
                <ion-row>
                    <ion-col class="d-flex justify-content-center">
                        <h3>Total de débito</h3>
                    </ion-col>
                </ion-row>
            </ion-grid>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Valor do débito</th>
                        <th scope="col">N° do recibo</th>
                        <th scope="col">N° do boleto</th>
                        <th scope="col">data de vencimento</th>
                        <th scope="col">Receber</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>
                            <div class="d-flex align-items-center">
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