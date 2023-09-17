<template>
    <ion-page>
        <SidebarComponent></SidebarComponent>
        <NavbarComponent></NavbarComponent>
        <!-- <ion-content> -->
            <div class="content-wrapper">
                <slot></slot> 
            </div>
           
        <!-- </ion-content> -->
    </ion-page>
</template>
<style scoped src="./AppLayout.css"></style>
<script src="./AppLayout.ts"></script>