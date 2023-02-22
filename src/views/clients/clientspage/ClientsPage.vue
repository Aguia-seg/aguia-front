
<template>
<ion-page>
    <SidebarComponent></SidebarComponent>
    <NavbarComponent></NavbarComponent>

    <ion-content>
        <div class="content-wrapper">
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">Consulta de Clientes</h1>
                        </div><!-- /.col -->
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                               <li class="breadcrumb-item"><a href="#">Home</a></li>
                            </ol>
                        </div><!-- /.col -->
                    </div><!-- /.row -->
                </div><!-- /.container-fluid -->
            </div>
            <div class="container mt-5">
                <div class="row">
                    <div class="col-lg-6 col-12">
                        <div class="d-flex align-items-center">
                            <ion-button shape="round" class="mr-4">Adicionar</ion-button>
                            <ion-item>
                                <ion-input placeholder="Pesquisar"><ion-icon :icon="searchOutline"></ion-icon></ion-input>
                            </ion-item>
                        </div>
                    </div>
                </div>
            </div>    
        </div> 
           
    </ion-content>
</ion-page>

</template>

<script lang="ts" src="./ClientsPage.ts"></script>
<style scoped src="./ClientsPage.css"></style>