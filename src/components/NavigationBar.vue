<template>
  <div class="main_div">
    <div class="nav_div">
      <ul class="list_div">
        <li class="home_list">Home</li>
        <li class="sublist">
            <button @click="logoutClick">
          <i class="fa fa-sign-out" aria-hidden="true" ></i></button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { signOut, auth } from "../firebase";
export default {
  name: "NavigationBar",
  methods: {
    async logoutClick() {
      try {
        await signOut(auth);
        this.$router.push("/")
      } catch (e) {
        console.warn(e);
      }
    },
  },
};
</script>

<style scoped>
.main_div {
  /* background: rgb(243, 243, 243);*/
   background: #F4F3EF;
  /* width: 100%; */
  height: 100%;
  color: #fff;
}
.nav_div {
  padding: 14px 20px 14px 20px;
}
.list_div {
  display: flex;
  list-style: none;
  justify-content: space-between;
}
.sublist {
  width: 30px;
}
.home_list {
  display: flex;
  justify-content: center;
  width: 100%;
  font-weight: bold;
  font-size: 19px;
  color:black;
}

</style>