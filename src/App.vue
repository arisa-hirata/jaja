<template>
  <div id="app">
    <div id="nav">
      <a href="/">
        <img class="logo" src="@/assets/logo.png" alt="logo"/>
      </a> 
      <router-link to="/">Home</router-link> 
      <router-link to="/allcase">All Cases</router-link> 
      <router-link to="/products">Create</router-link> 
      <router-link class="signup-btn" to="/signup">Signup</router-link>
      <router-link class="login-btn" to="/login">Login</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px 70px;
  text-align: left;
}
#nav a {
  font-size: 14pt;
  font-weight: bold;
  color: #2c3e50;
  margin-right: 40px;
  vertical-align: bottom;
}
#nav a:hover {
  text-decoration: none;
  border-bottom: 3px solid#ffffff;
}
#nav a.router-link-exact-active {
  color: #ff6b6b;
  border-bottom: 3px solid#ff6b6b;
  text-decoration: none;
  transition: 0.5s ease-in-out;
}

.logo {
  width: 11%;
  margin: 0;
  margin-right: 5%;
}
.login-btn {
  float: right;
  padding: 10px 50px;
  border-radius: 10em;
  font-size: 11pt;
  letter-spacing: 1.3px;
  color: #ff6b6b !important;
  background-color: #ffffff;
  border: 1px solid #ff6b6b;
  cursor: pointer;
  text-decoration: none;
}
.signup-btn {
  float: right;
  padding: 10px 50px;
  border-radius: 10em;
  font-size: 11pt;
  letter-spacing: 1.3px;
  color: #ffffff !important;
  background-color: #ff6b6b;
  cursor: pointer;
  text-decoration: none;
}
</style>
