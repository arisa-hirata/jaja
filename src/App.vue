<template>
  <div id="app">
    <b-navbar toggleable="md" id="nav">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="/">
        <img class="logo" src="@/assets/Logoword.png" alt="logo">
      </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item>
            <router-link to="/">Home</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/allcase">All Cases</router-link>
          </b-nav-item>
          <b-nav-item href="#">
            <router-link to="/products">Create</router-link>
          </b-nav-item>
          <b-nav-item href="#">
            <router-link to="/edit">Edit</router-link>
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <router-link class="login-btn" to="/cart">
            <i class="fas fa-shopping-cart"></i>
          </router-link>
          <router-link class="login-btn" to="/login">Login</router-link>
          <router-link class="signup-btn" to="/signup">Signup</router-link>
          <button type="button" @click="onSignOut" class="login-btn">Sign Out</button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import firebase from "firebase";

export default {
  name: "App",
  components: {
    "app-footer": Footer
  },
  methods: {
    onSignOut() {
      firebase.auth().signOut();
      this.$router.push("/");
    }
  }
};
</script>


<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 20px 50px;
  text-align: left;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  border-bottom: 3px solid#ffffff;
}
#nav a:hover {
  text-decoration: none;
}
#nav a.router-link-exact-active {
  color: #ff6b6b;
  border-bottom: 3px solid #ff6b6b;
  text-decoration: none;
  transition: 0.5s ease-in-out;
}

.logo {
  width: 150px;
}
.login-btn {
  float: right;
  padding: 4px 20px;
  border-radius: 10em;
  letter-spacing: 1.3px;
  color: #ff6b6b !important;
  background-color: #ffffff;
  border: 1px solid #ff6b6b;
  border-bottom: 3px solid#ff6b6b !important;
  cursor: pointer;
  text-decoration: none;
  margin-right: 10px;
}
.login-btn:hover {
  background-color: #fcf0f0;
}
.signup-btn {
  float: right;
  padding: 4px 20px;
  border-radius: 10em;
  letter-spacing: 1.3px;
  color: #ffffff !important;
  background-color: #ff6b6b;
  border-bottom: 3px solid#ff6b6b !important;
  cursor: pointer;
  text-decoration: none;
}
.signup-btn:hover {
  background-color: #fc8484;
}
.navbar .navbar-toggler {
  border: none;
}

@media screen and (max-width: 768px) {
  .logo {
    width: 100px;
  }
  .navbar-nav {
    padding-top: 18px;
  }
  .login-btn {
    width: 100px;
    margin: 10px 0;
  }
  .signup-btn {
    width: 100px;
    margin-bottom: 20px;
  }
}
</style>
