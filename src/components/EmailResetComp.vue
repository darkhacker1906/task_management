<template>
  <div class="main_div">
    <div class="form_div">
      <h1>Reset Email</h1>
      <Form :validation-schema="schema" @submit="onSubmit">
        <div class="input_div">
          <label for="email">Please enter your email</label><br />
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
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
export default {
  name: "EmailResetComp",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      loading: false,
      modal: false,
      schema: yup.object({
        email: yup.string().email().required(),
      }),
    };
  },
  methods: {
    async onSubmit(values) {
      try {
        this.loading = true;
        await sendPasswordResetEmail(auth, values.email);
        this.modal = true;
        this.$swal.fire({
          position: "top-end",
          icon: "success",
          title: "Password reset link send to your email",
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (e) {
        console.warn(e);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.main_div {
  height: 100vh;
  width: 100vw;
  background: #b2cde2;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form_div {
  min-width: 300px;
  width: 45%;
  border: 1.5px solid rgb(218, 217, 217);
  padding: 20px;
  border-radius: 10px;
  background: #fff;
}

h1 {
  text-align: center;
  color: #477094;
  padding: 10px;
}
.input {
  width: 100%;
  border: 1px solid rgb(223, 220, 220);
  height: 40px;
  padding: 0px 10px;
  border-radius: 5px;
  margin: 5px 0px 10px 0px;
}
label {
  font-weight: 600;
}
.input_div {
  margin-bottom: 20px 0px;
}
.error {
  color: red;
  font-style: italic;
  font-size: 13px;
}
.loader {
  position: absolute;
}
</style>