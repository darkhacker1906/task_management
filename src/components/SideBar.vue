<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
        class="drawer"
      >
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
          title="John Leider"
          nav
        >
          <template v-slot:append>
            <v-btn
              icon="mdi-chevron-left"
              variant="text"
              @click.stop="rail = !rail"
            >
              <i class="fa-solid fa-angle-right"></i>
            </v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-home-city"
            title="Home"
            value="home"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-account"
            title="My Account"
            value="account"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-account-group-outline"
            title="Users"
            value="users"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-file-tree"
            class="home"
            title="Tasks"
            value="tasks"
            @click="handleTask"
          >
          </v-list-item>
           <v-list-item
            prepend-icon="mdi-logout"
            title="Logout"
            value="users"
            @click="handleLogout"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <!-- <v-main>
       
       </v-main> -->
    </v-layout>
  </v-card>
</template>

<script>
import { signOut, auth } from "../firebase";
export default {
  data() {
    return {
      drawer: true,
      rail: true,
    };
  },
  methods:{
    handleTask(){
      console.log("Hello");
    },
      async handleLogout() {
      try {
        console.log("Hello this is ");
        await signOut(auth);
        this.$router.push("/")
      } catch (e) {
        console.warn(e);
      }
    }
  }
};
</script>

<style scoped>
.drawer{
  background: #000;
  color:#fff;
}
</style>