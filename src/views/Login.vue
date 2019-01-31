<template>
  <main>
      <form @submit.prevent="handleSubmit" class="login" action="/action_page.php" style="max-width:500px;margin:auto">
      <h6>Don't have an account?
          <a href>Signup</a> here
        </h6>
        <div class="input-container">
          <i class="fa fa-envelope icon">

          </i>
          <input class="input-field" type="text" placeholder="Email adress" name="usrnm" v-model="email">
        </div>

        <div class="input-container">
          <i class="fa fa-key icon">

          </i>
          <input class="input-field" type="password" placeholder="Password" name="psw"  v-model="password">
        </div>
        <div class="rem"><input type="checkbox" /> Remember me</div>
        <button @click="SignIn" type="submit" class="btn">Login</button>
        <div class="login-box">
          <a href="#" class="social-button" id="facebook-connect"> <span>Login with Facebook</span></a>
          <a href="#" class="social-button" id="google-connect"> <span>Login with Google</span></a>
          <a href="#" class="social-button" id="twitter-connect"> <span>Login with Twitter</span></a>
      </div>
      <button @click="SignIn" type="submit" class="btn">Login</button>
      <div class="login-box">
        <a href="#" class="social-button" id="facebook-connect">
          <span>Login with Facebook</span>
        </a>
        <a href="#" class="social-button" id="google-connect">
          <span>Login with Google</span>
        </a>
        <a href="#" class="social-button" id="twitter-connect">
          <span>Login with Twitter</span>
        </a>
      </div>
    </form>

    <div class="img-sec"></div>
  </main>
</template>
<style>
main {
  background-color: #FFF;
  width:auto;
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
.login {
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
  text-align: center;
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
.btn {
  background-color: #ffffff;
  color: #ff6b6b;
  padding: 15px 20px;
  border: solid 0.2em #ff6b6b;
  border-radius: 2em;
  cursor: pointer;
  width: 8rem;
  opacity: 0.9;
}

.btn:hover {
  opacity: 1;
}

.rem {
  float: left;
  padding: 15px;
}

.login-box {
  background: #fff;
  padding: 20px;
  margin-top: 5rem;
  max-width: 480px;
  text-align: center;
  letter-spacing: 1px;
  position: flex;
}

.login-box h2 {
  margin: 20px 0 20px;
  padding: 0;

  color: #4688f1;
}

.social-button {
  background-position: 25px 0px;
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  cursor: pointer;
  display: inline-block;
  height: 50px;
  line-height: 50px;
  text-align: left;
  text-decoration: none;

  vertical-align: middle;
  width: 90%;
  border-radius: 3px;
  margin: 10px auto;
  outline: rgb(255, 255, 255) none 0px;
  padding-left: 20%;
  transition: all 0.2s cubic-bezier(0.72, 0.01, 0.56, 1) 0s;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

#facebook-connect {
  background: rgb(255, 255, 255)
    url("https://eswarasai.com/projects/social-login/img/facebook.svg")
    no-repeat scroll 5px 0px / 30px 50px padding-box border-box;
  border: 1px solid rgb(60, 90, 154);
}

#facebook-connect:hover {
  border-color: rgb(60, 90, 154);
  background: rgb(60, 90, 154)
    url("https://eswarasai.com/projects/social-login/img/facebook-white.svg")
    no-repeat scroll 5px 0px / 30px 50px padding-box border-box;
  -webkit-transition: all 0.8s ease-out;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease-out;
}

#facebook-connect span {
  box-sizing: border-box;
  color: rgb(60, 90, 154);
  cursor: pointer;
  text-align: center;

  border: 0px none rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

#facebook-connect:hover span {
  color: #fff;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

#google-connect {
  background: rgb(255, 255, 255)
    url("https://eswarasai.com/projects/social-login/img/google-plus.png")
    no-repeat scroll 5px 0px / 50px 50px padding-box border-box;
  border: 1px solid rgb(220, 74, 61);
}

#google-connect:hover {
  border-color: rgb(220, 74, 61);
  background: rgb(220, 74, 61)
    url("https://eswarasai.com/projects/social-login/img/google-plus-white.png")
    no-repeat scroll 5px 0px / 50px 50px padding-box border-box;
  -webkit-transition: all 0.8s ease-out;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease-out;
}

#google-connect span {
  box-sizing: border-box;
  color: rgb(220, 74, 61);
  cursor: pointer;
  text-align: center;

  border: 0px none rgb(220, 74, 61);
  outline: rgb(255, 255, 255) none 0px;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

#google-connect:hover span {
  color: #fff;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

#twitter-connect {
  background: rgb(255, 255, 255)
    url("https://eswarasai.com/projects/social-login/img/twitter.png") no-repeat
    scroll 5px 1px / 45px 45px padding-box border-box;
  border: 1px solid rgb(85, 172, 238);
}

#twitter-connect:hover {
  border-color: rgb(85, 172, 238);
  background: rgb(85, 172, 238)
    url("https://eswarasai.com/projects/social-login/img/twitter-white.png")
    no-repeat scroll 5px 1px / 45px 45px padding-box border-box;
  -webkit-transition: all 0.8s ease-out;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease-out;
}

#twitter-connect span {
  box-sizing: border-box;
  color: rgb(85, 172, 238);
  cursor: pointer;
  text-align: center;

  border: 0px none rgb(220, 74, 61);
  outline: rgb(255, 255, 255) none 0px;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

#twitter-connect:hover span {
  color: #fff;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
</style>
<script>
import firebase from 'firebase'
export default {
  name: 'SignIn',
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    SignIn: function () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            alert('Login Success')
            this.$router.push('/')
          },
          err => {
            alert(err.message)
          }
        )
    }
  }
}
</script>
