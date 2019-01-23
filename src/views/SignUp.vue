<template>
  <div class="signup">
    <h2>Signup</h2>
    <form @submit.prevent="handleSubmit">
      <p>
        <label for="username">Username</label>
        <input id="username" type="text" name="username" placeholder="Username">
      </p>
      <p>
        <label for="email">Email</label>
        <input id="email" type="email" name="email" placeholder="Email">
      </p>
      <p>
        <label for="password">Password</label>
        <input type="password" name="password" placeholder="Password">
      </p>
      <p>
        <label for="repeatpw">Repeat Password</label>
        <input type="password" name="repeatpw" placeholder="Repeat Password">
      </p>
      <p>
        <input type="checkbox" id="checkbox" value="agree">
        <label for="agree">I agree to terms and policy</label>
      </p>
      <p>
        <input type="submit" value="Submit">
      </p>
    </form>
  </div>
</template>
