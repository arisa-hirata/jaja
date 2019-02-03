<template>
  <section class="phonecase">
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

        <h1>Phonecase Title</h1>
        
        <h4>$<span>24.99</span></h4>
        <span>
          <i class="fas fa-tag"/> Tag
        </span>

        <br>
        <br>

        <h6>This phone case is designed by Juno Guo. It represents something great.</h6>
        <br>
        <b-button class="add-to-cart"><i class="fa fa-cart-arrow-down"></i> Add to cart</b-button>	
      </div>
    </div>
  </section>
</template>
<style scoped>
section {
  width: 100%;
  position: fixed;
  z-index: 1;
  margin: 0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

h4 {
  color:#E91E63;
}

/* ----- Photo Section ----- */

.product-photo {
  width: 30%;
  display: inline-block;
  margin: 0;
  box-shadow: 4px 4px 22px -2px rgba(0, 0, 0, 0.3);
  border-radius: 6px 0px 0px 6px;
  background-color: #f8b8b9;
}
.photo_main img {
  width: 50%;
  padding: 10% 0;
  -webkit-filter: saturate(150%) contrast(120%) hue-rotate(10deg)
    drop-shadow(1px 20px 10px rgba(0, 0, 0, 0.3));
  filter: saturate(150%) contrast(120%) hue-rotate(10deg)
    drop-shadow(1px 20px 10px rgba(0, 0, 0, 0.3));
}

/* ----- Info Section ----- */

.info-container {
  width: 60%;
  vertical-align: top;
  margin-top: -10px;
  display: inline-block;
  padding: 10% 5%;
  text-align: left;
  background-color: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(114, 113, 113, 0.2),
    0 6px 20px 0 rgba(141, 140, 140, 0.19);
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

@media screen and (max-width: 600px) {
  section {
    position: absolute;
  }
  .product-photo {
    width: 100%;
    display: block;
  }
  .info-container {
    margin: 0;
    width: 100%;
  }
}
</style>
<script>
import Phonecase from "@/components/Phonecase.vue";
export default {
	name:"allcase",
  components:{
    ThePhonecase:Phonecase
	},
	data(){
    return {
      heart: true
    }
  },
  methods:{
    ChangeHeart:function (){
      this.heart = !this.heart
    }
  }
}
</script>
