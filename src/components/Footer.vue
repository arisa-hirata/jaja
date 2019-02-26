<template>
  <footer>
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-lg-4 footer-about wow fadeInUp">
            <img
              class="logo-footer"
              src="../assets/Logoword.png"
              alt="logo-footer"
              data-at2x="../assets/Logoword.png"
            >
            
          </div>
          <div class="col-md-4 col-lg-4 offset-lg-1 footer-contact wow fadeInDown">
            <h3>Contact</h3>
            <p>
              <i class="fas fa-map-marker-alt"></i> 3700 Willingdon Ave, Burnaby, BC, Canada, V5G 3H2
            </p>
            <p>
              <i class="fas fa-phone"></i> Phone: +1 643 789 123
            </p>
            <p>
              <i class="fas fa-envelope"></i> Email:
              contact@jaja.com
            </p>
            
          </div>
          <div class="col-md-4 col-lg-3 footer-social wow fadeInUp">
            <h3>Follow us</h3>
            <p>
              <a href="#">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-google-plus-g"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <div class="row">
          <div class="col-md-5 footer-copyright">
            <p>&copy; Copyright 2019
              <a href="https://jaja.com">JAJA</a>
            </p>
          </div>
          <div class="col-md-7 footer-menu">
            <nav class="navbar navbar-dark navbar-expand-md">
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                     <router-link to="/">Home</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/allcase">All Cases</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/products">Create</router-link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<style>
.footer-top {
  padding: 60px 0;
  background: #2f313d;
  text-align: left;
  color: #6E7493;
}
.footer-top h3 {
  padding-bottom: 10px;
  color: #fff;
}

.footer-about {
  max-width: 74px;
  margin-top: 0;
  margin-bottom: 18px;
}
.logo-footer{
    max-width: 350px;
}
.footer-about p a {
  color: #6E7493;
  border-bottom: 1px dashed #6E7493;
}
.footer-about p a:hover,
.footer-about p a:focus {
  color: #fff;
  border-color: #6E7493;
}

.footer-contact p {
  word-wrap: break-word;
}
.footer-contact i {
  padding-right: 10px;
  font-size: 18px;
  color: #6E7493;
}
.footer-contact p a {
  color: #aaa;
  border-bottom: 1px dashed #6E7493;
}
.footer-contact p a:hover,
.footer-contact p a:focus {
  color: #6E7493;
  border-color: #6E7493;
}

.footer-social a {
  display: inline-block;
  margin-right: 20px;
  margin-bottom: 8px;
  color: #6E7493;
  border: 0;
}
.footer-social a:hover,
.footer-social a:focus {
  color: #6E7493;
  border: 0;
}
.footer-social i {
  font-size: 24px;
  vertical-align: middle;
}

.footer-bottom {
  padding: 15px 0;
  background: #2f313d;
  text-align: left;
  color: #6E7493;
}

.footer-copyright p {
  margin: 0;
  padding: 0.5rem 0;
}
.footer-copyright a {
  color: #6E7493;
  border: 0;
}
.footer-copyright a:hover,
.footer-copyright a:focus {
  color: #6E7493;
  border: 0;
}
.nav-item{
    margin: 1em;
}
.nav-item a{
    color:#6E7493;
}
.nav-item a.router-link-exact-active {
  color: #ff6b6b;
  border-bottom: 3px solid #ff6b6b;
  text-decoration: none;
  transition: 0.5s ease-in-out;
}
</style>
    
<script>
export default {
  name: "Footer",
  data() {
    return {
      
    };
  }
};
</script>