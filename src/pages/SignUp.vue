<template>
  <div class="main_div">
    <div class="flex_div">
      <h1>Signup</h1>
      <Form :validation-schema="schema" @submit="onSubmit">
        <div class="input_div">
          <label for="name">Enter your name</label><br />
          <Field
            name="name"
            id="name"
            type="name"
            placeholder="Name"
            class="input"
          />
          <br />
          <ErrorMessage class="error" name="name" />
        </div>
        <div class="input_div">
          <label for="email">Enter your email</label><br />
          <Field
            name="email"
            id="email"
            type="email"
            placeholder="Email"
            class="input"
          />
          <br />
          <ErrorMessage class="error" name="email" />
        </div>

        <div class="input_div">
          <label for="password">Enter your password</label><br />
          <Field
            name="password"
            id="password"
            type="password"
            placeholder=" Password"
            class="input"
          />
          <ErrorMessage class="error" name="password" />
        </div>
        <br />
        <div class="btn_div">
          <v-btn
            class="submit_btn"
            variant="outlined"
            elevated
            type="submit"
            style="
              background-color: #008cba;
              border: none;
              color: white;
              font-weight: bold;
              width: 100%;
            "
          >
            Submit
            <div class="loader">
              <v-progress-circular
                v-if="loading"
                indeterminate
                color="white"
              ></v-progress-circular>
            </div>
          </v-btn>
        </div>
      </Form>
      <div class="link_div">
        Already registered<router-link
          :style="{ textDecoration: 'none', fontWeight: 'bold' }"
          to="/"
          >Sign in</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import {auth} from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';
export default {
  name: "LogIn",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      loading: false,
      schema: yup.object({
        name: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().required().min(6),
      }),
    };
  },
  methods: {
   async onSubmit(values) {
    try{
        this.loading=true;
       await createUserWithEmailAndPassword(auth,values.email,values.password);
       this.$router.push("/");
    }catch(e){
        console.warn(e);
    }finally{
        this.loading=false;
    }
    },
  },
};
</script>

<style scoped>
.main_div {
  height: 100vh;
  width: 100vw;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: rgb(144, 172, 194); */
  background: rgb(178 205 226);
}
h1 {
  text-align: center;
  color: #477094;
}
.flex_div {
  min-width: 300px;
  width: 45%;
  border: 1.5px solid rgb(218, 217, 217);
  padding: 20px;
  border-radius: 10px;
  background: #fff;
}
.input {
  width: 100%;
  border: 1px solid rgb(223, 220, 220);
  height: 40px;
  padding: 0px 10px;
  border-radius: 5px;
  margin: 5px 0px;
}
.input_div {
  margin-top: 10px;
}
label {
  font-weight: 600;
}
.error {
  color: red;
  font-style: italic;
  font-size: 13px;
}
.link_div {
  display: flex;
  gap: 10px;
  float: right;
  margin-top: 10px;
}
.loader{
  position: absolute;
}
</style>