<template>
  <section class="phonecase">
    <div class="product-wrapper">

      <div class="close" @click="CloseModal">x</div>

      <div class="product">
        <div class="product-photo">
              <div class="photo_main">
                <img class="caseimage" src="../assets/case1wobg.png" alt="casesimage">
              </div>
        </div>
        <div class="info-container">
          
          <div class="info">
            <div class="controls" @click="ChangeHeart">
                  <i class="far fa-heart" aria-hidden="true" v-if="heart===true"></i>
                  <i class="fa fa-heart" aria-hidden="true" v-if="heart===false"></i>
            </div>

            <h1>{{phonecase.title}}</h1>
            
            <h4>$<span>{{phonecase.price}}</span></h4>
            <span>
              <i class="fas fa-tag"/> {{phonecase.tag}}
            </span>

            <br>
            <br>

            <h6>{{phonecase.desc}}</h6>
            <br>
            <b-button class="add-to-cart"><i class="fa fa-cart-arrow-down"></i> Add to cart</b-button>	
          </div>
        </div>
      </div>

  

    <div class="container">
    			
		<div class="row">
			<div class="col-sm-5">
				<div class="rating-block">
					<h4>Average user rating</h4>
					<h2 class="bold padding-bottom-7">4.3 <small>/ 5</small></h2>
					<button type="button" class="btn btn-warning btn-sm" aria-label="Left Align">
					  <i class="fas fa-star"></i>
					</button>
					<button type="button" class="btn btn-warning btn-sm" aria-label="Left Align">
					  <i class="fas fa-star"></i>
					</button>
					<button type="button" class="btn btn-warning btn-sm" aria-label="Left Align">
					  <i class="fas fa-star"></i>
					</button>
					<button type="button" class="btn btn-default btn-grey btn-sm" aria-label="Left Align">
					<i class="fas fa-star"></i>
					</button>
					<button type="button" class="btn btn-default btn-grey btn-sm" aria-label="Left Align">
					  <i class="fas fa-star"></i>
					</button>
					<hr>
					<h4>Tap the stars</h4>
						<button type="button" class="btn btn-default btn-grey btn-sm" aria-label="Left Align">
					<i class="fas fa-star"></i>
					</button>
						<button type="button" class="btn btn-default btn-grey btn-sm" aria-label="Left Align">
					<i class="fas fa-star"></i>
					</button>
						<button type="button" class="btn btn-default btn-grey btn-sm" aria-label="Left Align">
					<i class="fas fa-star"></i>
					</button>
						<button type="button" class="btn btn-default btn-grey btn-sm" aria-label="Left Align">
					<i class="fas fa-star"></i>
					</button>
						<button type="button" class="btn btn-default btn-grey btn-sm" aria-label="Left Align">
					<i class="fas fa-star"></i>
					</button>
					<p></p>
					 <textarea rows="4" cols="50">Write your reviews...</textarea>
					 <b-button class="submitbtn">Submit</b-button>
				</div>
			</div>
			<div class="col-sm-7">
				<div class="review-block">
					<div class="row">
						<div class="col-sm-3">
							<img src="http://dummyimage.com/60x60/666/ffffff&text=No+Image" class="img-rounded">
							<div class="review-block-name"><a href="#">Tim</a></div>
						
						</div>
						<div class="col-sm-9">
							<div class="review-block-rate">
								<button type="button" class="btn btn-warning btn-xs" aria-label="Left Align">
								  <i class="fas fa-star"></i>
								</button>
								<button type="button" class="btn btn-warning btn-xs" aria-label="Left Align">
								  <i class="fas fa-star"></i>
								</button>
								<button type="button" class="btn btn-warning btn-xs" aria-label="Left Align">
								  <i class="fas fa-star"></i>
								</button>
								<button type="button" class="btn btn-default btn-grey btn-xs" aria-label="Left Align">
								  <i class="fas fa-star"></i>
								</button>
								<button type="button" class="btn btn-default btn-grey btn-xs" aria-label="Left Align">
								  <i class="fas fa-star"></i>
								</button>
							</div>
							<div class="review-block-title">The best!</div>
							<div class="review-block-description">Beautiful!</div>
						</div>
					</div>
					<hr/>
					<div class="row">
						<div class="col-sm-3">
							<img src="http://dummyimage.com/60x60/666/ffffff&text=No+Image" class="img-rounded">
							<div class="review-block-name"><a href="#">Jay</a></div>
							
						</div>
						<div class="col-sm-9">
							<div class="review-block-rate">
								<button type="button" class="btn btn-warning btn-xs" aria-label="Left Align">
								  <i class="fas fa-star"></i>
								</button>
								<button type="button" class="btn btn-warning btn-xs" aria-label="Left Align">
								 <i class="fas fa-star"></i>
								</button>
								<button type="button" class="btn btn-warning btn-xs" aria-label="Left Align">
								  <i class="fas fa-star"></i>
								</button>
								<button type="button" class="btn btn-default btn-grey btn-xs" aria-label="Left Align">
								  <i class="fas fa-star"></i>
								</button>
								<button type="button" class="btn btn-default btn-grey btn-xs" aria-label="Left Align">
								  <i class="fas fa-star"></i>
								</button>
							</div>
							<div class="review-block-title">this was nice</div>
							<div class="review-block-description">this was nice</div>
						</div>
					</div>
					<hr/>
					<div class="row">
						<div class="col-sm-3">
							<img src="http://dummyimage.com/60x60/666/ffffff&text=No+Image" class="img-rounded">
							<div class="review-block-name"><a href="#">Lee</a></div>
							
						</div>
						<div class="col-sm-9">
							<div class="review-block-rate">
								<button type="button" class="btn btn-warning btn-xs" aria-label="Left Align">
								  <i class="fas fa-star"></i>
								</button>
								<button type="button" class="btn btn-warning btn-xs" aria-label="Left Align">
								  <i class="fas fa-star"></i>
								</button>
								<button type="button" class="btn btn-warning btn-xs" aria-label="Left Align">
								  <i class="fas fa-star"></i>
								</button>
								<button type="button" class="btn btn-default btn-grey btn-xs" aria-label="Left Align">
								  <i class="fas fa-star"></i>
								</button>
								<button type="button" class="btn btn-default btn-grey btn-xs" aria-label="Left Align">
								  <i class="fas fa-star"></i>
								</button>
							</div>
							<div class="review-block-title">Excellent!</div>
							<div class="review-block-description">I liked it!</div>
						</div>
					</div>
				</div>
			</div>
		</div>			
		
    </div> <!-- /container -->

    </div>
  </section>
</template>
<style scoped>
section {
  width: 100%;
  z-index: 1;
  height: 100vh;
  position: fixed;
  margin: 0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  background-color: #FFEEE8;
  padding:0 0em;
  top: 0;
}
.product-wrapper{
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
.product {
  width: 100%;
  height: 30em;
  margin: 10% 0;
}

h4 {
  color:#E91E63;
}

/* ----- Photo Section ----- */

.product-photo {
  width:40%;
  height: 100%;
  display: inline-block;
  /* padding: 2% 8%; */
  margin: 0;
  /* box-shadow: 4px 4px 22px -2px rgba(0, 0, 0, 0.3); */
  background-color: #f8b8b9;
}
.photo_main {
  width: 100%;
  height: 100%;
  padding: 10% 0;
}
.photo_main img {
  max-height: 100%;
  -webkit-filter: saturate(150%) contrast(120%) hue-rotate(10deg)
    drop-shadow(1px 20px 10px rgba(0, 0, 0, 0.3));
  filter: saturate(150%) contrast(120%) hue-rotate(10deg)
    drop-shadow(1px 20px 10px rgba(0, 0, 0, 0.3));
}

/* ----- Info Section ----- */

.info-container {
  width: 50%;
  height: 100%;
  vertical-align: top;
  display: inline-block;
  padding: 8% 5%;
  text-align: left;
  background-color: #ffffff;
  /* box-shadow: 0 4px 8px 0 rgba(114, 113, 113, 0.2) */
}
.close {
  position: absolute;
  top: 30px;
  left: 5%;
  text-align: right;
}
.controls {
  float: right;
}
.controls:hover {
  cursor: pointer;
}
.add-to-cart {
  color: #fff;
  border: none;
  background: #E91E63;
}
.add-to-cart:hover {
  border: none;
  background: rgb(241, 113, 156);
}

@media screen and (max-width: 768px) {
  /* .product-photo {
    width: 100%;
    display: inline-block;
  } */
  .product{
    width: 100%;
    height: 100%;
    margin: 0 0 10% 0;
  }
  .product-photo{
    width: 100%;
    height: 50%;
  }
  .info-container {
    width: 100%;
    height: 50%;
  } 
  .close {
    position: absolute;
    top: 20px;
    left: 30px;
  }
}

.btn-grey{
    background-color:#D8D8D8;
	color:#FFF;
}
.rating-block{
	background-color:#FAFAFA;
	border:1px solid #EFEFEF;
	padding:15px 15px 20px 15px;
	border-radius:3px;
}
.bold{
	font-weight:700;
}
.padding-bottom-7{
	padding-bottom:7px;
}

.review-block{
	background-color:#FAFAFA;
	border:1px solid #EFEFEF;
	padding:15px;
	border-radius:3px;
	margin-bottom:15px;
}
.review-block-name{
	font-size:12px;
	margin:10px 0;
}
.review-block-date{
	font-size:12px;
}
.review-block-rate{
	font-size:13px;
	margin-bottom:15px;
}
.review-block-title{
	font-size:15px;
	font-weight:700;
	margin-bottom:10px;
}
.review-block-description{
	font-size:13px;
  text-align: left;
}

.submitbtn {
	background-color:#E91E63;
	border-color: #E91E63;
}


</style>
<script>
export default {
  name:"phonecase",
	data(){
    return {
      heart: true,
    }
  },
  props: {
   phonecase: {
    type: Object,
    default() {
            return [];
        }
    }
  },
  methods: {
    ChangeHeart: function () {
      this.heart = !this.heart
    },

    CloseModal: function () {
      this.$emit('hide')
    }
  }
}
</script>
