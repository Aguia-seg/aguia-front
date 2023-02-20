<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="warning">
        <ion-title>AguiaSeg</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">AguiaSeg</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container" class="container mt-5">
        <img id="main-logo" src="@/assets/img/logo.png" alt="logo">
        <ion-item class="mt-5 mb-4 login-input" fill="outline">
          <ion-label position="floating">Login</ion-label>
          <ion-input placeholder="CPF"></ion-input>
        </ion-item>
        <ion-item class="mb-4 login-input" fill="outline">
          <ion-label position="floating">Senha</ion-label>
          <ion-input placeholder="Senha"></ion-input>
        </ion-item>
        <ion-button color="warning">Entrar</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" src="./LoginPage.ts"></script>

<style scoped src="./LoginPage.css"></style>
