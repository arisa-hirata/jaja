<template>
  <section class="phonecase">
    <div class="product-photo">
          <div class="photo_main">
            <img class="caseimage" src="../assets/case1wobg.png" alt="casesimage">
          </div>
    </div>
    <div class="info-container">
      <div class="close" @click="CloseModal">x</div>
      
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
.close {
  float: none;
  text-align: right;
  margin-top: -15%;
  margin-bottom: 10%;
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
  .close {
    margin: 0;
    position: absolute;
    top: 30px;
  }
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
  methods:{
    ChangeHeart:function (){
      this.heart = !this.heart
    },

    CloseModal:function (){
      this.$emit('hide');
    }
  }
}
</script>
