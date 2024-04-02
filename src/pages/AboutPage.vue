<template>
<!-- <main> -->
  <!-- <component :is=$route.meta.layout > -->
    <!-- <router-view/> -->
  <!-- </component> -->
    <!-- <navigation-bar/> -->
<!-- </main> -->
<!-- <side-bar> -->
<!-- <h1>This is my about aage</h1> -->
<component :is="layout">
    <h1>This is my home page</h1>
    </component>
<!-- </side-bar> -->
</template>

<script>
import SideBar from '../components/SideBar.vue'
export default {
  components: { SideBar },
}
</script>

<style>

</style>