<template>
  <section class="allcase">
    <ThePhonecase :getPhonecase="GetPhonecases()" v-if="isActive===true" :phonecase="selectedItem" @hide="isActive=false"/>

    <div class="wrapper">
      <div class="content">
        <!-- content here -->
        <div class="product-grid product-grid--flexbox">
          <div class="product-grid__wrapper">
            <!-- Product list start here -->
            <!-- Single product -->
            <div class="product-grid__product-wrapper" v-for="p in phoneCases">
              <div class="product-grid__product">
                <div class="product-grid__img-wrapper" @click="ShowPhonecase(p)">
                  <img v-bind:src="p.image" alt="image">
                </div>
                <span class="product-grid__title">{{p.title}}</span>
                <span class="product-grid__price">${{p.price}}</span>
                <div class="product-grid__extend-wrapper">
                  <div class="product-grid__extend">
                    <p class="product-grid__description">{{p.desc}}</p>
                    <span
                      class="product-grid__btn product-grid__add-to-cart"
                      to="/cart"
                      @click="addToCart(p)"
                    >
                      <i class="fa fa-cart-arrow-down"></i> Add to cart
                    </span>
                    <span class="product-grid__btn product-grid__view" @click="ShowPhonecase(p)">
                      <i class="fa fa-eye"></i> View more
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <!-- end Single product -->
          </div>
        </div>
      </div>

      <footer></footer>
    </div>
  </section>
</template>


<script>
import Phonecase from "@/components/Phonecase.vue";
import firebase from "firebase";

export default {
  name: "allcase",
  components: {
    ThePhonecase: Phonecase
  },
  data() {
    return {
      selectedItem: {},
      isActive: false,
      phoneCases: [],
      loading: true
    };
  },
  created() {
    this.GetPhonecases();
  },
  methods: {
    GetPhonecases:function(){
      var arr=[];
      firebase
      .firestore()
      .collection("Product")
      .orderBy("date")
      .get()
      .then(querySnapshot => {
        this.loading = false;
        querySnapshot.forEach(doc => {
          let data = {
            id: doc.id,
            userid: doc.data().userid,
            image: doc.data().image,
            title: doc.data().title,
            tag: doc.data().tag,
            price: doc.data().price,
            desc: doc.data().desc
          };
          arr.push(data);
        });
        this.phoneCases = arr;
      });
    },
    ShowPhonecase: function(p) {
      this.selectedItem = p;
      this.isActive = !this.isActive;
    },
    addToCart(p) {
      this.$store.commit("addToCart", p);
      this.$router.push("/cart");
    }
  }
};
</script>

<style scoped>
.wrapper {
  /* width: 40em; */
  /* margin: 4em auto; */
  margin: 1em 4em;
  background: #fff;
  padding: 4em;
  border-radius: 8px;
  border: 1px solid #f5f5f5;
  box-shadow: 0 4px 8px 0 rgba(136, 136, 136, 0.2),
    0 6px 20px 0 rgba(192, 192, 192, 0.19);
}
.wrapper > :first-child {
  margin-top: 0;
}
.wrapper > :last-child {
  margin-bottom: 0;
}

.desc {
  margin: 4em auto;
  font-size: 1.2em;
}

.todo {
  background: #f9f9f9;
  padding: 1em;
  border-radius: 4px;
  color: #ccc;
  font-style: italic;
  font-weight: lighter;
  font-size: 0.9em;
}
.todo ul {
  margin: 0.4em 0;
  padding: 0 1em;
}
.todo ul li {
  list-style-position: inside;
}

h1 {
  margin: 0;
}

footer {
  margin: 4em auto;
  text-align: center;
  font-size: 0.9em;
}

a {
  text-decoration: none;
  color: #2196f3;
}
a:hover {
  text-decoration: underline;
}

.emoticon-face {
  background: #ffeb3b;
  border-radius: 100%;
  width: 1.7em;
  height: 1.7em;
  transform: rotate(90deg);
  display: inline-block;
  vertical-align: middle;
  line-height: 1;
  margin: -0.4em 0.2em 0;
  text-align: center;
  border: 1px solid #fdd835;
  padding-left: 0.1em;
  -webkit-font-smoothing: antialiased;
}
.emoticon-face--no-rotation {
  transform: rotate(0deg);
}

code {
  padding: 0.2em 0.3em;
  background: #f5f5f5;
  margin: 0 0.2em;
  border-radius: 4px;
  font-size: 0.95em;
  font-family: "Source Code Pro";
}

.tac {
  text-align: center;
}

* {
  box-sizing: border-box;
}

body {
  color: #777;
  font-family: "Open Sans", Arial, sans-serif;
}

.product-grid {
  /* width: 60em; */
  margin: 2rem auto;
}
/* .product-grid.product-grid--flexbox .product-grid__wrapper {
  display: flex;
  flex-wrap: wrap;
} */
.product-grid.product-grid--flexbox .product-grid__title {
  height: auto;
}
.product-grid.product-grid--flexbox .product-grid__title:after {
  display: none;
}
.product-grid__wrapper {
  margin-left: -1rem;
  margin-right: -1rem;
}
.product-grid__product-wrapper {
  padding: 1rem;
  /* float: left; */
  display: inline-block;
  width: 33.33333%;
}
.product-grid__product {
  /* padding: 1rem; */
  padding: 1rem 0;
  position: relative;
  cursor: pointer;
  background: #fff;
  border-radius: 4px;
}
.product-grid__product:hover {
  box-shadow: 0px 0px 0px 1px #eee;
  z-index: 50;
}
.product-grid__product:hover .product-grid__extend {
  display: block;
}
.product-grid__img-wrapper {
  width: 100%;
  text-align: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  height: 150px;
}
.product-grid__img-wrapper img {
  max-height: 100%;
  min-height: 100%;
}
.product-grid__title {
  margin-top: 0.875rem;
  display: block;
  font-size: 1.125em;
  color: #222;
  height: 3em;
  overflow: hidden;
  position: relative;
}
.product-grid__title:after {
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 2.4em;
  height: 1.5em;
  background: linear-gradient(to right, rgba(255, 255, 255, 0), white 50%);
}
.product-grid__price {
  color: #e91e63;
  font-weight: bold;
  letter-spacing: 0.4px;
}
.product-grid__extend-wrapper {
  position: relative;
}
.product-grid__extend {
  display: none;
  width: 100%;
  position: absolute;
  padding: 0 1rem 1rem 1rem;
  /* margin: 0.4375rem -1rem 0; */
  margin: 0.4375rem 0 0 0;
  box-shadow: 0px 0px 0px 1px #eee;
  background: #fff;
  border-radius: 0 0 4px 4px;
}
.product-grid__extend:before {
  content: "";
  height: 0.875rem;
  width: 100%;
  position: relative;
  top: -0.4375rem;
  left: 0;
  background: #fff;
}
.product-grid__description {
  font-size: 0.875em;
  margin-top: 0.4375rem;
  margin-bottom: 0;
}
.product-grid__btn {
  display: inline-block;
  font-size: 0.875em;
  color: #777;
  background: #eee;
  padding: 0.5em 0.625em;
  margin-top: 0.875rem;
  margin-right: 0.625rem;
  cursor: pointer;
  border-radius: 4px;
}
.product-grid__btn i.fa {
  margin-right: 0.3125rem;
}
.product-grid__add-to-cart {
  color: #fff;
  background: #e91e63;
}
.product-grid__add-to-cart:hover {
  background: #ee4c83;
}
.product-grid__view {
  color: #777;
  background: #eee;
}
.product-grid__view:hover {
  background: white;
}

@media screen and (max-width: 768px) {
  .product-grid__product-wrapper {
    width: 100%;
    margin: 3em 0;
  }
  .product-grid__img-wrapper {
    height: 100%;
  }
  .wrapper {
    margin: 0;
    padding-top: 0;
  }
}
</style>
