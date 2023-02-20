<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Blank</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container" class="container">
        <img id="main-logo" src="@/assets/img/logo.png" alt="logo">
        <ion-item fill="outline">
          <ion-label position="floating">Login</ion-label>
          <ion-input placeholder="CPF"></ion-input>
        </ion-item>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" src="./LoginPage.ts"></script>

<style scoped src="./LoginPage.css"></style>
