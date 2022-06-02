<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 2</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-list>
      <div v-if="contactsList.length > 0">    
      <div v-for="(contact, index) in contactsList" :key="index">
      <ion-modal
        :is-open="false"
        :swipe-to-close="true"
        trigger="trigger-button"
      >
      <ion-content>Modal card</ion-content>
      </ion-modal>
      <ion-nav>
          <ion-accordion-group>
      <ion-accordion>
      <ion-item slot="header">
        <ion-icon :icon="person"></ion-icon>
        <ion-label>{{contact.name}} {{contact.surname}}</ion-label>
      </ion-item>
      <ion-list slot="content" style="padding:4px 0px;">
        <ion-button id="trigger-button">Editer</ion-button>
        <ion-button @click="deleteContact(index)" style="--background:blue;">Supprimer</ion-button>
        <ion-item>
          <ion-label>Nom : {{contact.name}}</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>prenom : {{contact.surname}}</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>telephone : {{contact.phoneNumber}}</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Address : {{contact.address}}</ion-label>
        </ion-item>
      </ion-list>
    </ion-accordion>
    </ion-accordion-group>
      </ion-nav>
      </div>
      </div>
      </ion-list>

      <ExploreContainer name="Tab 2 page" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { Contact } from '@/domains/contact.interface';

import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonIcon,actionSheetController, IonModal,IonButton} from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import contactQuery from '@/query/contact.query';
import { person } from 'ionicons/icons';
import contactCommand from '@/commands/contact.command';

export default defineComponent({
  name: 'Tab2Page',
  components: {IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonList, IonIcon, IonButton, IonModal},
  mounted(){
    this.getContacts();
  },
  data() {
    return{
      contactsList: [] as Array<Contact>,
      test: [] as Array<Contact>,
      contactInfo: {
      name: "",
      surname: "",
      address: "",
      company: "",
      phoneNumber: "",
      photo: "",
      mail: "",
      note: ""
} as Contact }},
  methods: {
    getContacts() {
    this.contactsList = contactQuery.getContacts();
    return 
    },
    deleteContact(contactIndex: number) {
      return contactCommand.deleteContact(contactIndex);
    }
    },
  setup() {
      const canDismiss = async () => {
        const actionSheet = await actionSheetController.create({
          header: 'Are you sure you want to discard your changes?',
          buttons: [
            {
              text: 'Discard Changes',
              role: 'destructive'
            },
            {
              text: 'Keep Editing',
              role: 'cancel'
            }
          ]
        });
        
        await actionSheet.present();
        
        const { role } = await actionSheet.onDidDismiss();
        
        if (role === 'destructive') {
          return true;
        }
        
        return false;
      };
      
      return { canDismiss, person }
    }
  
});
</script>