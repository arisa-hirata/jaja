<template>
  <section class="phonecase">
    <!-- <Edit v-if="isActive===true" @hide="isActive=false"/> -->
    <div class="product-wrapper">
      <div class="close" @click="CloseModal">x</div>

      <div class="product">
        <div class="product-photo">
          <div class="photo_main">
            <img class="caseimage" v-bind:src="phonecase.image" alt="casesimage">
          </div>
        </div>
        <div class="info-container">
          <div class="info">
            <div class="controls" @click="ChangeHeart">
              <i class="far fa-heart" aria-hidden="true" v-if="heart===true"></i>
              <i class="fa fa-heart" aria-hidden="true" v-if="heart===false"></i>
            </div>

            <router-link to="/edit">
              <button
                class="editbtn"
                @click="openEdit(phonecase)"
                v-if="this.phonecase.userid === currentUser"
              >
                <i class="far fa-edit"></i>
              </button>
            </router-link>

            <button class="editbtn" @click="Delete" v-if="this.phonecase.userid === currentUser">
              <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
            <h1>{{phonecase.title}}</h1>
            <p>
              <small>Designed by CEO</small>
            </p>
            <h4>
              $
              <span>{{phonecase.price}}</span>
            </h4>
            <span>
              <i class="fas fa-tag"/>
              {{phonecase.tag}}
            </span>

            <br>
            <br>

            <h6>{{phonecase.desc}}</h6>
            <br>
            <b-button class="add-to-cart" @click="addToCart(phonecase)">
              <i class="fa fa-cart-arrow-down"></i> Add to cart
            </b-button>
          </div>
        </div>
      </div>

      <!-- Review -->
      <div class="container">
        <div class="row">
          <div class="col-sm-5" ref="form">
            <div class="rating-block">
              <h4>Average user rating</h4>
              <h2 class="bold padding-bottom-7">
                4.3
                <small>/ 5</small>
              </h2>
              <star-rating style="width: 100%"></star-rating>
              <hr>
              <div id="rating">
                <h4>Tap the stars</h4>
                <star-rating
                  v-model="rate"
                  v-bind:increment="0.5"
                  v-bind:max-rating="5"
                  inactive-color="#d8d8d8"
                  active-color="#ffd055"
                  v-bind:star-size="30"
                />
              </div>
              <p></p>

              <textarea
                rows="4"
                cols="50"
                type="text"
                v-model="desc"
                class="reply--text"
                placeholder="Leave a comment..."
                style="width:95%"
                required
              />
              <button b-button class="submitbtn" @click="CreateReview">
                <i class="fa fa-paper-plane"></i> Send
              </button>
            </div>
          </div>
          <div class="col-sm-7">
            <div class="review-block">
              <div class="row" v-for="r in AllReviews">
                <div class="col-sm-3">
                  <!-- <div class="review-block-name">
                    <a href="#">Tim</a>
                  </div>-->
                </div>
                <star-rating
                  v-bind:star-size="30"
                  v-bind:increment="0.5"
                  :rating="r.rate"
                  read-only="true"
                />
                <button class="editbtn" @click="DeleteReview(r.id)">
                  <i class="fa fa-trash" aria-hidden="true"></i>
                </button>
                <div class="col-sm-9">
                  <div class="review-block-description">{{r.desc}}</div>
                  <hr>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /container -->
    </div>
  </section>
</template>


<script>
import Edit from "@/components/Edit.vue";
import StarRating from "vue-star-rating";
import firebase from "firebase";

export default {
  components: {
    StarRating,
    Edit
  },
  name: "phonecase",
  data() {
    return {
      selectedItem: {},
      isActive: false,
      heart: true,
      username: "",
      rate: "",
      desc: "",
      date: new Date(),
      AllReviews: []
    };
  },
  props: {
    phonecase: {
      type: Object,
      default() {
        return [];
      }
    },
    review: {
      type: Object,
      default() {
        return [];
      }
    },
    getPhonecase: {
      type: Function,
      default() {
        return null;
      }
    }
  },
  created() {
    const currentUser = firebase.auth().currentUser.m;
    console.log("laaaaaa", currentUser);
    console.log("hahaha!", this.phonecase.userid);

    firebase
      .firestore()
      .collection("Review")
      .where("productid", "==", this.phonecase.id)
      .get()
      .then(querySnapshot => {
        this.loading = false;
        querySnapshot.forEach(doc => {
          let data = {
            username: doc.data().username,
            rate: doc.data().rate,
            desc: doc.data().desc,
            id: doc.id
          };
          this.AllReviews.push(data);
        });
      });
  },

  methods: {
    ChangeHeart: function() {
      this.heart = !this.heart;
    },

    CloseModal: function() {
      this.$emit("hide");
    },
    openEdit(phonecase) {
      // this.isActive = !this.isActive;
      this.$store.commit("toEdit", phonecase);
    },
    CreateReview() {
      const colref = firebase.firestore().collection("Review");

      const saveData = {
        productid: this.phonecase.id,
        username: this.username,
        rate: this.rate,
        desc: this.desc,
        date: this.date
      };

      colref
        .add(saveData)
        .then(docRef => {
          console.log(docRef.id);
          saveData.id = docRef.id;
          this.AllReviews.push(saveData);
          console.log(firebase.auth().currentUser.m);
          console.log("hahaha!", this.phonecase.userid);
          console.log(this.currentUser);
        })
        .catch(function(error) {
          alert(error);
        });
    },
    Delete() {
      console.log(
        firebase
          .firestore()
          .collection("Product")
          .doc(this.phonecase.id)
      );
      firebase
        .firestore()
        .collection("Product")
        .doc(this.phonecase.id)
        .delete()
        .then(()=>{
          console.log("BYE");
          // this.phonecase.push(); //?<=????????? I want to remove right after clicked
          this.CloseModal();
          this.getPhonecase();
        })
        .catch(function(error) {
          console.error("Error removing document: ", error);
        });
    },
    DeleteReview(id) {
      console.log(id);
      console.log(
        firebase
          .firestore()
          .collection("Review")
          .doc(id)
      );
      firebase
        .firestore()
        .collection("Review")
        .doc(id)
        .delete()
        .then(function() {
          console.log("BYE");
        })
        .catch(function(error) {
          console.error("Error removing document: ", error);
        });
      // location.reload();
      this.$router.push("/allcase");
    },
    clear() {
      this.$refs.form.reset();
    },
    ShowReviews: function(r) {
      this.selectedItem = r;
      this.isActive = !this.isActive;
    },
    addToCart(phonecase) {
      this.$store.commit("addToCart", phonecase);
      this.$router.push("/cart");
    }
  }
};
</script>




<style scoped>
section {
  width: 100%;
  z-index: 1;
  height: 100vh;
  position: fixed;
  margin: 0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  background-color: #ffeee8;
  padding: 0 0em;
  top: 0;
}
.product-wrapper {
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
  color: #e91e63;
}

/* ----- Photo Section ----- */

.product-photo {
  width: 40%;
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
  min-height: 90%;
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
  background: #e91e63;
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
  .product {
    width: 100%;
    height: 100%;
    margin: 0 0 10% 0;
  }
  .product-photo {
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

.btn-grey {
  background-color: #d8d8d8;
  color: #fff;
}
.rating-block {
  background-color: #fafafa;
  border: 1px solid #efefef;
  padding: 15px 15px 20px 15px;
  border-radius: 3px;
}
.bold {
  font-weight: 700;
}
.padding-bottom-7 {
  padding-bottom: 7px;
}

.review-block {
  background-color: #fafafa;
  border: 1px solid #efefef;
  padding: 15px;
  border-radius: 3px;
  margin-bottom: 15px;
}
.review-block-name {
  font-size: 12px;
  margin: 10px 0;
}
.review-block-date {
  font-size: 12px;
}
.review-block-rate {
  font-size: 13px;
  margin-bottom: 15px;
}
.review-block-title {
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 10px;
}
.review-block-description {
  font-size: 13px;
  text-align: left;
}

.submitbtn {
  background-color: #e91e63;
  border-color: #e91e63;
}
.editbtn {
  background-color: #ffffff;
  color: #ff6b6b;
  border: solid 1px #ff6b6b;
  border-radius: 0.5em;
  cursor: pointer;
  width: 2em;
  opacity: 0.9;
  border-style: none;
  transition: 0.5s;
}
.editbtn:hover {
  color: #e91e63;
}
</style>
