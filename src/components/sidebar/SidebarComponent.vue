<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link">

      <span class="brand-text font-weight-light">ÁGUIA SEG</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ion-item router-link="/painel" slot="header" color="dark">
          <i class="nav-icon fas fa-tachometer-alt mr-2 cursor"></i>
          <ion-label>Painel</ion-label>
        </ion-item>
        <ion-accordion-group :multiple="true">
          <ion-accordion value="second">
            <ion-item slot="header" color="dark">
              <i class=" nav-icon fas fa-table mr-2 "></i>
              <ion-label>Cadastros</ion-label>
            </ion-item>
            <div class="" slot="content" >
              <ion-item router-link="/clients" lines="none">
                <ion-label>Cadastros de Clientes</ion-label>
              </ion-item>
              <ion-item router-link="/houses" lines="none">
                <ion-label>Cadastros de Residências</ion-label>
              </ion-item>
              <ion-item router-link="/clients" lines="none">
                <ion-label>Cadastros de Colaboradores</ion-label>
              </ion-item>
            </div>
          </ion-accordion>
        </ion-accordion-group>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<style scoped src="./SidebarComponent.css"></style>