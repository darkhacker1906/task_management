<template>
<div class="top_div">
<side-bar/>
<navigation-bar/>
<div class="main_div">
  <router-view>
    <home-pages/>
  </router-view>
</div>
</div>
</template>
<script>
import HomePages from '../components/HomePages.vue';
import  NavigationBar from '../components/NavigationBar.vue'
import SideBar from '../components/SideBar.vue';
export default {
  name: "HomePage",
  components:{
    NavigationBar,
    SideBar,
    HomePages,
  },
  data() {
    return {
      drawer: true,
      rail: true,
    };
  },
};
</script>

<style scoped>
.drawer{
   background: rgb(96, 144, 181);
   color: #fff;
}
.top_div{
  background: #F4F3EF;
  height: 100vh;
  width: 100vw;
}
h1{
  text-align: center;
}
</style>
