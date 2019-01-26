<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="handleSubmit">
      <p>
        <label for="email">Email</label>
        <input id="email" type="text" name="email" placeholder="Your email address" v-model="email">
      </p>
      <p>
        <label for="password">Password</label>
        <input type="password" name="password" placeholder="Your Password" v-model="password">
      </p>
      <p>
        <button @click="SignIn">Login</button>
      </p>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "SignIn",
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    SignIn: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            alert("Login Success");
            this.$router.push("/");
          },
          err => {
            alert(err.message);
          }
        );
    }
  }
};
</script>
