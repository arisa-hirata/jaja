<template>
  <main>
    <div class="img-sec"></div>

    <form
      @submit.prevent="handleSubmit"
      class="signup"
      action="/action_page.php"
      style="max-width:500px;margin:auto"
    >
      <h6>
        Have an account?
        <a href><router-link to="/login">Login</router-link></a> here
      </h6>
      <div class="input-container">
        <i class="fa fa-user icon"></i>
        <input
          name="username"
          label="User Name"
          class="input-field"
          v-model="username"
          type="text"
          placeholder="Username"
          required
        >
      </div>

      <div class="input-container">
        <i class="fa fa-envelope icon"></i>
        <input
          name="email"
          label="Email"
          class="input-field"
          v-model="email"
          type="email"
          placeholder="Email"
          required
        >
      </div>

      <div class="input-container">
        <i class="fa fa-key icon"></i>
        <input
          name="password"
          label="Password"
          class="input-field"
          v-model="password"
          type="password"
          placeholder="Password"
          required
        >
      </div>
      <div class="input-container">
        <i class="fa fa-key icon"></i>
        <input
          name="confirmPassword"
          label="Confirm Password"
          id="confirmPassword"
          class="input-field"
          v-model="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          :rules="[comparePasswords]"
        >
      </div>
      <div class="terms">
        <input type="checkbox">I agree to the Terms and Conditions.
      </div>
      <button type="submit" class="btn">Signup</button>
    </form>
  </main>
</template>

<script>
import firebase from "firebase";

export default {
  name: "SignUp",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  computed: {
    comparePasswords() {
      return this.password !== this.confirmPassword
        ? "Passwords do not match"
        : "";
    },
    user() {
      return this.$store.getters.user;
    }
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/");
      }
    }
  },
  methods: {
    handleSubmit: function() {
      this.$store.dispatch("signUserUp", {
        username: this.username,
        email: this.email,
        password: this.password
      });
      // firebase
      //   .auth()
      //   .createUserWithEmailAndPassword(this.email, this.password)
      //   .then(email => {
      //     this.$router.push("/");
      //   })
      //   .catch(error => {
      //     alert(error.message);
      //   });
    }
  }
};
</script>




<style scoped>
main {
  width: auto;
  height: 80vh;
  margin: 5em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  box-shadow: 0 4px 8px 0 rgba(136, 136, 136, 0.2),
    0 6px 20px 0 rgba(192, 192, 192, 0.19);
}
.img-sec {
  width: 100%;
  background: #ffffff;
  background-image: url("../assets/bg1.png");
  background-size: cover;
  background-position: center;
  filter: none;
}

form {
  text-align: center;
}
.signup {
  width: 100%;
  padding: 0px 20px;
  box-sizing: border-box;
}
* {
  box-sizing: border-box;
}
h6 {
  color: rgb(128, 128, 128);
}
.input-container {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  width: 100%;
  margin-bottom: 15px;
}

.icon {
  padding: 10px;
  border: solid 0.5px rgb(209, 209, 209);
  border-top-left-radius: 0.5em;
  border-bottom-left-radius: 0.5em;
  min-width: 50px;
  text-align: center;
}

.input-field {
  width: 100%;
  padding: 10px;
  border-top-right-radius: 0.5em;
  border-bottom-right-radius: 0.5em;
}

.input-field:focus {
  border: 2px solid dodgerblue;
}

/* Set a style for the submit button */
.btn:hover,
.btn:focus {
  color: #fff;
  outline: 0;
}
.btn {
  background-color: #ff6b6b;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  border: 1.5px solid #ff6b6b;
  border-radius: 2rem;
  color: #ff6b6b;
  cursor: pointer;
  display: relative;
  align-self: center;
  font-size: 1rem;
  font-weight: 200;
  line-height: 1;

  text-decoration: none;
  text-align: center;
  width: 8rem;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
}

.btn:hover {
  box-shadow: 0 0 40px 40px #ff604e inset;
}

.terms {
  float: left;
  padding: 15px;
}
fa-user {
  color: #4a90e2;
}
</style>
