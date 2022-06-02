<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 4</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-card>
    <ion-card-header>
      <ion-card-title><b>Création de contact</b></ion-card-title>
    </ion-card-header>
    <input v-model="contactform.name" placeholder="Nom"/>
    <input v-model="contactform.surname" placeholder="Prénom"/>
    <input v-model="contactform.photo" placeholder="Photo"/>
    <input v-model="contactform.company" placeholder="Entreprise"/> 
    <input v-model="contactform.phoneNumber" placeholder="Téléphone"/> 
    <input v-model="contactform.address" placeholder="Adresse"/>
    <input v-model="contactform.note" placeholder="Note"/>
    <ion-button v-on:click="createContact()"><ion-title>click Button</ion-title></ion-button>  
      </ion-card>  
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { Contact } from '@/domains/contact.interface';
import { defineComponent } from 'vue';
import { IonBackButton, IonButton, IonButtons} from '@ionic/vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput } from '@ionic/vue';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonItem, IonLabel } from '@ionic/vue';
import { pin, walk, warning, wifi, wine } from 'ionicons/icons';
import contactCommand from '@/commands/contact.command';

export default  defineComponent({
  name: 'Tab1Page',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage , IonCard, IonCardHeader, IonCardTitle, IonItem, IonButton, IonInput},
  data() {return{
    contactform: {
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
      createContact() {
        const contact: Contact = this.contactform;
        return contactCommand.createContact(contact);
      }
    }
});
</script>
