<template>
<AppLayout>
    <ion-header>
        <ion-toolbar>
            <ion-title>Fluxo de caixa</ion-title>
        </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
        <div class="container-fluid">
            <div class="row">
                <div class="col-4 d-flex align-items-center">
                    <div class="d-flex flex-column">
                        <ion-label>Data inicial:</ion-label>
                        <ion-datetime-button datetime="date"></ion-datetime-button>
                    <ion-modal :keep-contents-mounted="true">
                        <ion-datetime presentation="date" id="date"></ion-datetime>
                    </ion-modal>
                    </div>
                </div>
                <div class="col-4 d-flex align-items-center">
                    <div class="d-flex flex-column">
                        <ion-label>Data final:</ion-label>
                        <ion-datetime-button datetime="datetime"></ion-datetime-button>
                    <ion-modal :keep-contents-mounted="true">
                        <ion-datetime id="datetime" presentation="date"></ion-datetime>
                    </ion-modal>
                    </div>
                </div>
            </div>
            
        </div>
    </ion-content>
</AppLayout>

</template>

<script lang="ts" src="./CashFlowPage.ts"></script>
<style scoped src="./CashFlowPage.css"></style>