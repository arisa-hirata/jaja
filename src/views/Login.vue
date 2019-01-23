<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="handleSubmit">
      <p>
        <label for="username">Username</label>
        <input id="username" type="text" name="username" placeholder="Username">
      </p>
      
      <p>
        <label for="password">Password</label>
        <input type="password" name="password" placeholder="Password">
      </p>
      <p>
        <Button>Login</Button>
      </p>
    </form>
  </div>
</template>