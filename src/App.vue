<template>
  <v-app id="inspire">
    <!-- Logo and title start -->
    <v-navigation-drawer v-model="drawer" app color="#1E1E1E">
      <v-sheet>
        <v-list style="
            margin-top: -10px;
            margin-bottom: -10px;
            background-color: #1e1e1e;
          ">
          <v-list-item>
            <v-list-item-icon>
             <!-- <img src="https://i.etsystatic.com/27000690/r/il/dfacd4/2944739163/il_fullxfull.2944739163_qrgb.jpg" height="40px" width="40px" style="margin-right: -15px" /> -->
            </v-list-item-icon>

            <v-list-item-content class="font-weight-thin">
              <strong class="mr-1 font-weight-black MediumTurquoise--text title heading-1">📃 KNJIŽNICA</strong>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-sheet>
      <!-- Logo and title end -->

      <v-divider></v-divider>

      <!-- Navigation start -->
      <v-list rounded flat>
        <v-list-item v-for="[icon, text, route] in links" :key="icon" :to="route" link class="white--text">
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title id="li">{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      
      <v-footer max-width="99%" absolute color="#1E1E1E" class="mb-15">
        <v-col class="text-center white--text" cols="12">
          Made by <br />
          <strong>KD AP IL</strong><br>
          @2023
        </v-col>
      </v-footer> 
    </v-navigation-drawer>
    <!-- Navigation end -->

    



    <!-- Main section start -->
    <v-main>
      <v-container :class="{ 'py-15 px-15': $vuetify.breakpoint.lgAndUp, 'py-15 px-6': $vuetify.breakpoint.mdAndDown }">
        <!-- App bar section start -->
        <v-row class="d-lg-none">
          <v-col>
            <div>
              <v-app-bar dense color="#121212" fixed>

                <v-avatar size="36" style="margin: 10px;">
                 <!--  <v-img src="../logo.png" /> -->
                </v-avatar>

                <v-toolbar-title>{{ naslov }}</v-toolbar-title>
                <v-spacer></v-spacer>

                <v-btn icon href="/">
                  <v-icon >mdi-home</v-icon>
                </v-btn>

                <v-btn @click="drawer = !drawer" icon>
                  <v-app-bar-nav-icon></v-app-bar-nav-icon>
                </v-btn>
              </v-app-bar>
            </div>
          </v-col>
        </v-row>
        <!-- App bar section end -->
      
        <router-view />
        
      </v-container>
    </v-main>

    

  </v-app>
</template>

<script>




export default {
    
  
  data: () => ({
    cards: ["Today", "Yesterday"],
    drawer: true,
    naslov: "",
    links: [
      ["mdi-home", "Naslovnica", "/naslovnica"],
      ["mdi-shopping", "Izbornik", "/"],
      ["mdi-label", "Više opcija...", "/search"],
      ["mdi-account-circle", "Prijava", "/prijava"],
      ["mdi-currency-eur", "Kalkulator", "/kalkulator"],
    ],
    
  }),

  methods: {
  },

  updated() {
    this.naslov = document.title
  },


   

};


</script>

<style>
.v-list-item--active {
  background-color: #48D1CC;
  color: white;
}

.icon:hover{
  scale:200%
}
icon{ 
  color:white;
  margin-left:100%;
 }


.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-color: #1E1E1E;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-icons a {
  margin: 0 10px;
  color: #333;
  font-size: 20px;
}

.footer-icons a:hover {
  color: #888;
}
</style>












