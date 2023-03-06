<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <div class="row">
      <div class="col text-center pt-2">
        <span class="brand-text font-weight-light text-light">ÁGUIA SEG</span>
      </div>
      <div class="col text-right">
         <a class="nav-link" data-widget="pushmenu" href="#" role="button">
          <i class="fas fa-arrow-left text-light"></i></a>
      </div>
    </div>




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
            <div class="" slot="content">
              <ion-item router-link="/clients" lines="none">
                <ion-label>Cadastros de Clientes</ion-label>
              </ion-item>
              <ion-item router-link="/collaborators" lines="none">
                <ion-label>Cadastros de Colaboradores</ion-label>
              </ion-item>
            </div>
          </ion-accordion>

          <ion-accordion-group :multiple="true">
          <ion-accordion value="second">
            <ion-item slot="header" color="dark">
              <i class=" nav-icon fas fa-cogs mr-2 "></i>
              <ion-label>Consultas</ion-label>
            </ion-item>
            <div class="" slot="content">
              <ion-item router-link="/houses" lines="none">
                <ion-label>Consulta de residências</ion-label>
              </ion-item>
            </div>
          </ion-accordion>
        </ion-accordion-group>
        </ion-accordion-group>
        <ion-accordion-group :multiple="true">
          <ion-accordion value="second">
            <ion-item slot="header" color="dark">
              <i class=" nav-icon fas fa-hand-holding-usd mr-2 "></i>
              <ion-label>Finaceiro</ion-label>
            </ion-item>
            <div class="" slot="content">
              <ion-item  lines="none">
                <ion-label>Fluxo de Caixa</ion-label>
              </ion-item>
              
              <ion-item router-link="/monthlypayment" lines="none">
                <ion-label> Mensalidades</ion-label>
              </ion-item>
              <ion-item router-link="/plans" lines="none">
                <ion-label> Planos</ion-label>
              </ion-item>
            </div>
          </ion-accordion>
        </ion-accordion-group>
        <ion-accordion-group :multiple="true">
          <ion-accordion value="second">
            <ion-item slot="header" color="dark">
              <i class=" nav-icon fas fa-cogs mr-2 "></i>
              <ion-label>Configurações</ion-label>
            </ion-item>
            <div class="" slot="content">
              <ion-item  lines="none">
                <ion-label>Teste</ion-label>
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