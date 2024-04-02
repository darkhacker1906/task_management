<template>
  <div>
    <v-layout>
      <v-app-bar color="primary" prominent>
        <v-app-bar-nav-icon
          variant="text"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>

        <v-toolbar-title>My files</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-btn icon="mdi-magnify" variant="text"></v-btn>

        <v-btn icon="mdi-filter" variant="text"></v-btn>

        <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" location="left" temporary>
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            @click="navigateTo(item.path)"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <router-view></router-view>
      </v-main>
    </v-layout>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
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

<style scoped></style>
