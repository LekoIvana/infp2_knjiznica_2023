<template>
  <div id="home">
    <h1>🛈 Tu smo za Vas!</h1>
    <br>
    <p class="my-5">
      Ukoliko Vašu knjigu niste pronašli na našoj web knjižnici, slobodno je sami dodajte te ćemo je mi potvrditi.
      <br>
       Za više informacija obratite nam se na društvenim mrežama.
      <br>

      <br>
      <br>
    </p>

    <router-link to="/" class="mr-3 router-link">
      <v-btn class="blue"
      
      >
        <v-icon class="mr-2">mdi-information</v-icon>
        Pretraži</v-btn>
    </router-link>
    <br><br>
    <!-- mock modal -->
    <v-dialog
      v-model="dialog"
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="#48D1CC"
          dark
          v-bind="attrs"
          v-on="on"
          outlined
        >
          <v-icon class="mr-2">mdi-book-plus</v-icon>
          Dodaj željenu knjigu
        </v-btn>
      </template>
      <v-card>
        <v-card-text>
          <v-card-title>Dodaj željenu knjigu!</v-card-title>

          <v-container>
            <v-text-field
              label="Naslov"
              required
            ></v-text-field>
            
            <v-text-field
              label="Autor"
              required
            ></v-text-field>
            
            <v-text-field
              label="Izdavač"
              required
            ></v-text-field>
            
            <v-row>
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  :items="['Krimi','Horor','Biography','Fiction', 'Romance', 'Adventure', 'Drama', 'Autobiography']"
                  label="Žanr"
                  required
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  :items="['2023','2022','2021', '2020', '2019', '2018', '2017','2016','2015','2014','2013','2012']"
                  label="Godina izdanja"
                  required
                ></v-select>
              </v-col>
            </v-row>
          
            <small>Molimo provjerite unesene podatke!</small>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="white"
            text
            @click="dialog = false"
          >
            Odustani
          </v-btn>
          <v-btn
            color="#48D1CC"
            text
            @click="showAlert"
          >
            Dodaj
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <br><br>
    <!-- alert action -->
    <v-btn
      dark
      outlined
      color="white"
      class="ml-3"
      @click="snackbar = true"
    >
      <v-icon class="mr-2">mdi-reload</v-icon>
      Ponovno učitaj stranicu!
    </v-btn>
    <v-snackbar
      v-model="snackbar"
      :timeout="3000"
    >
      Stranica osvježena!Uživajte!

      <template v-slot:action="{ attrs }">
        <v-btn
          color="#48D1CC"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Zatvori
        </v-btn>
      </template>
    </v-snackbar>


     <div class="social-media-links">
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <v-icon class="mr-2">mdi-instagram</v-icon>
        <span class="instagram-link">Instagram</span>
      </a>
      <a href="https://www.facebook.com/groups/1697767866971483/" target="_blank" rel="noopener noreferrer">
        <v-icon class="mr-2">mdi-facebook</v-icon>
        <span class="facebook-link">Facebook</span>
      </a>
    </div>
  </div>



   
</template>

<script>


export default {
  name: 'IzbornikView',

  data(){
    return {
      dialog: false,
      snackbar: false,
    }
  },
  methods: {
    showAlert() {
      alert('Knjiga dodana!');
    },
  }
}
  
    
  

</script>

<style scoped>
.router-link {
  text-decoration: none;
}
.social-media-links {
  margin-top: 20px;
}

.social-media-links a {
  display: inline-flex;
  align-items: center;
  color: #000;
  text-decoration: none;
  margin-right: 10px;
}

.social-media-links a:hover {
  color: #48D1CC;
}

.instagram-link,
.facebook-link {
  color: #fff;
}

</style>






