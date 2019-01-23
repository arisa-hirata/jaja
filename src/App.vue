<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
<<<<<<< HEAD
      <router-link to="/about">About</router-link> |
      <router-link to="/signup">Signup</router-link> |
      <router-link to="/login">Login</router-link>
=======
      <router-link to="/products">Phonecases</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/signup">SignUp</router-link>
>>>>>>> 26abd34bf4358b62dd595eb0515ec81d6a2ac84e
    </div>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
