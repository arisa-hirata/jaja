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
