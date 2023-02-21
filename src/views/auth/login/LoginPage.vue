<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="warning">

      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div class="content">
        <img class="main-logo" src="@/assets/img/logo.png" alt="logo">
        <ion-item lines="full">
          <ion-label position="floating" color="warning">Login</ion-label>
          <ion-input placeholder="CPF"></ion-input>
        </ion-item>
        <ion-item lines="full">
          <ion-label position="floating" color="warning">Senha</ion-label>
          <ion-input placeholder=""></ion-input>
        </ion-item>

        <ion-button @click="login()" expand="block" color="warning">Entrar</ion-button>
        <ion-text color="dark">
          <small>Esqueci senha!</small>
        </ion-text>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" src="./LoginPage.ts"></script>

<style scoped src="./LoginPage.css"></style>
