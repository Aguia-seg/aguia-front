import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { IonicVue, IonPage, IonContent, IonButtons, IonBackButton, IonButton, IonHeader, IonItem, IonList, IonMenu, IonMenuToggle, IonToolbar, IonTitle, IonMenuButton, IonRow, IonCol, IonAccordionGroup, IonAccordion, IonIcon, IonGrid, IonLabel, IonText, IonInput } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

const app = createApp(App)
  .use(IonicVue)
  .use(router);

  app.component('ion-content', IonContent);
  app.component('ion-page', IonPage);
  app.component('ion-buttons', IonButtons);
  app.component('ion-back-button', IonBackButton);
  app.component('ion-button', IonButton);
  app.component('ion-header', IonHeader);
  app.component('ion-item', IonItem);
  app.component('ion-list', IonList);
  app.component('ion-menu', IonMenu);
  app.component('ion-menu-toggle', IonMenuToggle);
  app.component('ion-menu-button', IonMenuButton);
  app.component('ion-toolbar', IonToolbar);
  app.component('ion-title', IonTitle);
  app.component('ion-row', IonRow);
  app.component('ion-grid', IonGrid);
  app.component('ion-col', IonCol);
  app.component('ion-accordion-group', IonAccordionGroup);
  app.component('ion-accordion', IonAccordion);
  app.component('ion-label', IonLabel);
  app.component('ion-text', IonText);
  app.component('ion-icon', IonIcon);
  app.component('ion-input', IonInput);
  
  
router.isReady().then(() => {
  app.mount('#app');
});