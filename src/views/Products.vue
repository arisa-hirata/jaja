<template>
  <section class="phonecase">
    <div class="add-photo">
      <div class="photo_main">
        <b-modal v-model="showModal" title="Confirmation">
          <b-container>
            <p>Are you sure you want to create this item?</p>
          </b-container>
          <div slot="modal-footer" class="w-100">
            <b-button size="sm" variant="primary" @click="showModal=false">Close</b-button>
            <b-button size="sm" variant="primary" @click.prevent="CreateItem">Confirm</b-button>
          </div>
        </b-modal>
        <img class="imgpreview" v-if="imageUrl" :src="imageUrl">
        <button class="addimage" @click="onPickFile">Upload Image</button>
        <p v-if="errors.has('image')">{{ errors.first('image') }}</p>
        <input
          type="file"
          name="image"
          multiple
          style="display: none"
          ref="fileInput"
          accept="image/*"
          @change="onFilePicked"
          v-validate="'required|image'"
        >
      </div>
    </div>
    <div class="info-container">
      <form @submit.prevent="validateBeforeSubmit" class="info">
        <!-- <form @submit.prevent="showModal=true" class="info"> -->
        <h1>
          <input type="text" placeholder="Enter title here..." v-model="title" required>
        </h1>

        <h4>
          $
          <span>
            <input type="number" placeholder="0.00" v-model="price" required>
          </span>
        </h4>
        <span>
          <i class="fas fa-tag"/>
          <input type="text" placeholder="Enter tag.." v-model="tag" required>
        </span>

        <br>
        <br>

        <h6>
          <textarea
            rows="4"
            cols="50"
            name="description"
            form="usrform"
            v-model="desc"
            placeholder="Enter description here..."
            v-validate="'required|max:150'"
            :class="{'input': true, 'is-danger': errors.has('desc') }"
          ></textarea>
          <br>
          <span
            v-show="errors.has('description')"
            class="help is-danger"
          >{{ errors.first('description') }}</span>
        </h6>

        <br>

<<<<<<< HEAD
        <button class="addproduct btn btn-fail" type="submit" :disabled="errors.any()">
          <i class="fa fa-plus" aria-hidden="true"></i> Add Product
=======
        <button class="addproduct btn btn-fail"  :disabled="errors.any()" >
          <i class="fa fa-plus" aria-hidden="true"></i> Add Product 
>>>>>>> a2c20d9c0445c11cec703c600595353f93f78eee
        </button>
      </form>
    </div>
  </section>
</template>


<script>
import VeeValidate from "vee-validate";
import Phonecase from "@/components/Phonecase.vue";
import firebase from "firebase";
export default {
  name: "Product",
  components: {
    ThePhonecase: Phonecase
  },
  data() {
    return {
      userid: "",
      username: "",
      title: "",
      tag: "",
      price: "",
      desc: "",
      imageUrl: "",
      date: new Date(),
      showModal: false
    };
  },
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          // eslint-disable-next-line
<<<<<<< HEAD
          alert("Form Submitted!");
          return;
=======
          // alert('Form Submitted!');
          // return;
          this.showModal=true;
>>>>>>> a2c20d9c0445c11cec703c600595353f93f78eee
        }

        alert("Please fill the required field");
      });
    },
    onPickFile() {
      this.$refs.fileInput.click();
    },

    onFilePicked(event) {
      const files = event.target.files;
      this.filename = files[0].name;
      console.log(this.filename);
      if (this.filename.lastIndexOf(".") <= 0) {
        return alert("Please add a valid file!");
      }
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.imageUrl = fileReader.result;
        console.log(this.imageUrl);
      });
      fileReader.readAsDataURL(files[0]);
      this.image = files[0];
      console.log(this.image);
    },

    CreateItem() {
      console.log(firebase.auth().currentUser.m);
      // if (user !== null) {
      var storageRef = firebase.storage().ref();

      var mountainsRef = storageRef.child(`images/${this.filename}`);

      mountainsRef.put(this.image).then(snapshot => {
        snapshot.ref.getDownloadURL().then(downloadURL => {
          const colref = firebase.firestore().collection("Product");

          const saveData = {
            userid: firebase.auth().currentUser.m,
            // username: this.$store.state.user,
            title: this.title,
            image: downloadURL,
            tag: this.tag,
            price: this.price,
            desc: this.desc,
            date: this.date
          };

          colref
            .add(saveData)
            .then(function(docRef) {
              console.log(docRef.id);
              // $router.push("/allcase"); <= ??
              //Jump to other page
            })
            .catch(function(error) {
              alert(error);
            });
        });
      });
      this.$router.push("/allcase");
      this.showModal = false;
      // location.reload();
      // else {
      //   this.$router.push("/login");
      // }
    }
  }
};
</script>




<style scoped>
section {
  position: relative;
  width: 100vw;
  height: 100vh;
  margin: 4em auto;
  z-index: 1;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

h4 {
  color: #e91e63;
}

/* ----- Photo Section ----- */

.add-photo {
  width: 30%;
  display: inline-block;
  margin: 0;
  box-shadow: 4px 4px 22px -2px rgba(0, 0, 0, 0.3);
  border-radius: 6px 0px 0px 6px;
  background-color: #f8b8b9;
  border-radius: 2em;
}
.addimage {
  width: 100%;
  background-color: #ffffff;
  color: #ff6b6b;
  padding: 15px 20px;
  border: solid 0.2em #ff6b6b;
  border-radius: 2em;
  cursor: pointer;
}
.imgpreview {
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
.addproduct {
  color: #fff;
  border: none;
  background: #e91e63;
}
.addproduct:hover {
  border: none;
  background: rgb(241, 113, 156);
}

@media screen and (max-width: 600px) {
  section {
    position: absolute;
  }
  .add-photo {
    width: 100%;
    display: block;
  }
  .info-container {
    margin: 0;
    width: 100%;
  }
}
input {
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid rgb(255, 157, 157);
}
textarea {
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid rgb(255, 157, 157);
}
</style>
