<template>
  <div class="home">
    <div class="jumbotron jumbotron-banner">
        <h2><span class="pinkspan">JAJA</span></h2>
        <h1>Our design is a language, <br>not a style.</h1>
        <a class="btn-shop" href="#" role="button">Shop Our Products</a>
    </div>

    <div class="row">
      <div class="container">
      <div class="column">
        <a href="/allcase">
        <div class="card">
          <img src="../assets/thumb1.png" alt="thumb1"/>
          <p>Case 1</p>
          <hr>
        </div>
        </a>
      </div>

      <div class="column">
        <a href="/allcase">
        <div class="card">
          <img src="../assets/thumb2.png" alt="thumb1"/>
          <p>Case 2</p>
          <hr>
        </div>
        </a>
      </div>

      <div class="column">
        <a href="/allcase">
        <div class="card">
          <img src="../assets/thumb3.png" alt="thumb1"/>
          <p>Case 3</p>
          <hr>
        </div>
        </a>
      </div>
      </div>
    </div>

    <div class="jumbotron jumbotron-bottom">
      <div class="container-bottom">
        <h2>Several <span class="pinkspan">Unique Designs</span> for <br>you to choose</h2>
        <h3>Getting tired of the same cases?<br>It's time to dump them.</h3>
      </div>
    </div>

    <div class="card card-subscribe">
        <h5 class="card-header">Subscribe for new stuff</h5>
        <hr class="white">
        <div class="card-body">
          <p class="card-text">We won't send you any junk. Just update you with new products and events.</p>
        </div>
        <div class="input-group">
          <input class="form-sub" type="email" placeholder="xxx@xxx.com" name="email">
          <a class="btn-sub" href="#" role="button">Subscribe</a>
        </div>
    </div>

  </div>
</template>
<style scoped>

.home h2 {
  color:#000000;
  margin:0.2em;
}
.home h1 {
  margin-top: 0;
  font-size: 40pt;
}
.home h3 {
  font-size: 12pt;
}
.pinkspan{
  color:#ff6b6b;
}

.jumbotron-banner {
  background-image: url("../assets/bg1.png");
  background-size: cover;
  padding-top: 30%;
  padding-left: 5%;
  margin-bottom: 0;
  text-align: left;
}
.jumbotron-banner h1 {
  margin-bottom: 3%;
}
.btn-shop {
  padding: 20px;
  border-radius: 10em;
  font-size: 11pt;
  letter-spacing: 1.3px;
  color: #ffffff;
  background-color: #ff6b6b;
  cursor: pointer;
  text-decoration: none;
}

.row {
  margin: 0;
  padding: 0 0 7% 0;
  background-color: #f1f1f1;
}
.row .container{
  max-width: 100%;
  padding: 0;
}
.column {
  display: inline-block;
  width: 27%;
  margin: 7% 1% 0 0;
  padding: 0 10px;
}
.column a {
  text-decoration: none;
  color: #000000;
}
.row .card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  background-color: #ffffff;
  transition: 1s;
  align-items: center;
}
hr {
  width: 30px;
  border: 1px solid #ff6b6b;
  background-color: #ff6b6b;
}
.row .card:hover {
  transform:scale(1.1);
  transition: 1s;
}
.row .card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.jumbotron-bottom {
  background-image: url("../assets/feature.png");
  background-size: cover;
  height: 100%;
  padding-top: 30%;
  padding-bottom: 70%;
  padding-left: 5%;
  text-align: left;
}
.container-bottom {
  background-color: #ffffff;
  position: absolute;
  left: 0;
  padding: 5%;
}

.card-subscribe {
  width: 90%;
  background-color: #ff6b6b;
  border-radius: 0.5em;
  padding-bottom: 80px;
  margin: 2em auto;
  margin-top: -10em;
  align-items: center;
}
.card-header {
  color: #ffffff;
  background-color: rgba(0,0,0,0);
  border: none;
  font-size: 30pt;
  margin-top: 5%;
}
.white{
  width: 30px;
  border: 1px solid#ffffff;
}
.card-text {
  color: #ffffff;
  margin: 0;
  margin-bottom: 50px;
}
.btn-sub {
  padding: 15px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: -20px;
  border-radius: 10em;
  font-size: 10pt;
  letter-spacing: 1.3px;
  color: #ffffff;
  background-color: #579bf5;
  cursor: pointer;
  text-decoration: none;
}
.input-group{
  justify-content: center;
}
.form-sub {
  width: 40%;
  padding:15px;
  padding-left: 30px;
  padding-right: 20px;
  border:none;
  border-top-left-radius: 10em;
  border-bottom-left-radius: 10em;
  font-size: 9pt;
}

@media screen and (max-width: 600px) {
  .jumbotron-banner h1 {
    margin-bottom: 10%;
  }
  .jumbotron-banner {
    padding-bottom: 15%;
  }
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
  .jumbotron-bottom {
    margin-bottom: 0;
  }
  .container-bottom {
    width: 90%;
    padding: 5%;
  }
  .card-subscribe {
    width: 100%;
    margin: 0 auto;
    border-radius: 0;
  }
}
</style>
