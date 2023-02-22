<template>
    <div class="container-fluid bg-light">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">{{ col1 }}</th>
                                <th scope="col">{{ col2 }}</th>
                                <th scope="col">{{ col3 }}</th>
                                <th scope="col">{{ col4 }}</th>
                                <th scope="col">{{ col5 }}</th>
                                <th scope="col">{{ col6 }}</th>
                                <th scope="col">{{ col7 }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td><div class="d-flex align-items-center">
                                    <ion-button class="delete-button mr-2"><ion-icon :icon="closeOutline"></ion-icon></ion-button>
                                    <ion-button class="edit-button mr-2"><ion-icon :icon="createOutline"></ion-icon></ion-button>
                                    <ion-button><ion-icon class="search-button" :icon="searchOutline"></ion-icon></ion-button>
                                </div></td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td><div class="d-flex align-items-center">
                                    <ion-button class="delete-button mr-2"><ion-icon :icon="closeOutline"></ion-icon></ion-button>
                                    <ion-button class="edit-button mr-2"><ion-icon :icon="createOutline"></ion-icon></ion-button>
                                    <ion-button><ion-icon class="search-button" :icon="searchOutline"></ion-icon></ion-button>
                                </div></td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td><div class="d-flex align-items-center">
                                    <ion-button class="delete-button mr-2"><ion-icon :icon="closeOutline"></ion-icon></ion-button>
                                    <ion-button class="edit-button mr-2"><ion-icon :icon="createOutline"></ion-icon></ion-button>
                                    <ion-button><ion-icon class="search-button" :icon="searchOutline"></ion-icon></ion-button>
                                </div></td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td><div class="d-flex align-items-center">
                                    <ion-button class="delete-button mr-2"><ion-icon :icon="closeOutline"></ion-icon></ion-button>
                                    <ion-button class="edit-button mr-2"><ion-icon :icon="createOutline"></ion-icon></ion-button>
                                    <ion-button><ion-icon class="search-button" :icon="searchOutline"></ion-icon></ion-button>
                                </div></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { searchOutline, closeOutline, createOutline } from 'ionicons/icons'
export default defineComponent({
    props: {
        col1: String,
        col2: String,
        col3: String,
        col4: String,
        col5: String,
        col6: String,
        col7: String,
    },
    name: 'TableComponent',
    setup(){
        return{
            searchOutline,
            closeOutline,
            createOutline,
        }
    }
    
})
</script>

<style scoped>

</style>