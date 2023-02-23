


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
                                <h1 class="m-0">Cadastro de Clientes</h1>
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
                          <ion-item>
                                <ion-select interface="popover" placeholder="Tipo de cliente">
                                    <ion-select-option value="1">Pessoa física</ion-select-option>
                                    <ion-select-option value="2">Pessoa jurídica</ion-select-option>
                                </ion-select>
                          </ion-item>  
                        </div>
                        <div class="col-lg-6 col-12">
                          <ion-item>
                                <ion-select interface="popover" placeholder="Situação">
                                    <ion-select-option value="1">Pessoa física</ion-select-option>
                                    <ion-select-option value="2">Pessoa jurídica</ion-select-option>
                                </ion-select>
                          </ion-item>  
                        </div>
                    </div>
                </div>
        </div>
        
    </ion-content>
    
   </ion-page>
   

    
</template>

<script lang="ts" src="./ClientsRegisterPage.ts"></script>
<style scoped src="./ClientsRegisterPage.css"></style>