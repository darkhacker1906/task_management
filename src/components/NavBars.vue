<template>
  <v-layout class="rounded rounded-md">
    <v-navigation-drawer>
      <v-list>
        <v-list-item title="Navigation drawer"></v-list-item>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :to="item.path"
            @click="navigateTo(item.path)">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar title="Application bar"></v-app-bar>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
     <router-view/>
     <h1>  rvbg rvg efrgvbrf rt5 tebh 3rhb rewgn rtftn</h1>
    </v-main>
  </v-layout>
</template>
<script>
export default {
  data: () => ({
    // drawer: false,
    group: null,
    items: [
      {
        title: 'Dashboard',
        path: '/home',
      },
      {
        title: 'About',
        path: '/about'
      },
      {
        title: 'Contact',
        path: '/contact'
      },
      {
        title: 'Contact',
        path: '/contact'
      },
    ],
  }),

  methods: {
    navigateTo(path) {
      this.drawer = false; 
      this.$router.push(path);
    },
  },
};
</script>
<style scoped>

</style>