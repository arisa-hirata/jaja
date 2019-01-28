<template>
  <div class="home">
    <div class="jumbotron jumbotron-banner">
      <div class="container">
        <h2><span class="pinkspan">JAJA</span></h2>
        <h1>Our design is a language, <br>not a style.</h1>
        <p><a class="btn-shop" href="#" role="button">Shop Our Products</a></p>
      </div>
    </div>

    <div class="row">
      <div class="container-center">
      <div class="column">
        <a href="#">
        <div class="card">
          <img src="../assets/thumb1.png" alt="thumb1"/>
          <p>Case 1</p>
        </div>
        </a>
      </div>

      <div class="column">
        <a href="#">
        <div class="card">
          <img src="../assets/thumb2.png" alt="thumb1"/>
          <p>Case 2</p>
        </div>
        </a>
      </div>

      <div class="column">
        <a href="#">
        <div class="card">
          <img src="../assets/thumb3.png" alt="thumb1"/>
          <p>Case 3</p>
        </div>
        </a>
      </div>
      </div>
    </div>

    <div class="jumbotron jumbotron-bottom">
      <div class="container">
        <h2>Several <span class="pinkspan">Unique Designs</span> for <br>you to choose</h2>

        <h3>Getting tired of the same cases?<br>It's time to dump them.</h3>
      </div>
    </div>

    <div class="card card-subscribe">
        <h5 class="card-header">Subscribe for new stuff</h5>
        <hr color="#ffffff" width="20px">
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
<style>

.home {
  background-color: white;
}
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
  height: 100%;
  padding-top: 30%;
  padding-bottom: 5%;
  padding-left: 5%;
  text-align: left;
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
  padding: 5%;
  padding-left: 12%;
  padding-right: 12%;
  background-color: #f1f1f1;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
.container-center {
  justify-content: center;
  background-color: pink;
}
.column {
  float: left;
  width: 23%;
  height: 100%;
  padding: 0 10px;
}
.column a {
  text-decoration: none;
  color: #000000;
}
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
  background-color: #ffffff;
  transition: 1s;
}
.column .card:hover {
  transform:scale(1.1);
  transition: 1s;
}
.card img {
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
.jumbotron-bottom .container {
  background-color: #ffffff;
  position: absolute;
  left: 0;
  padding: 5%;
}

.card-subscribe {
  width: 90%;
  background-color: #ff6b6b;
  border-radius: 0.5em;
  padding-bottom: 50px;
  margin-top: -10%;
}
.card-header {
  color: #ffffff;
  font-size: 30pt;
  margin-top: 5%;
  margin-bottom: 0;
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

</style>
