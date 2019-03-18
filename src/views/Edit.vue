<template>
  <section class="phonecase">
    <router-link to="/allcase">
      <div class="close">x</div>
    </router-link>
    <div class="add-photo">
      <div class="photo_main">
        <b-modal v-model="showModal" title="Confirmation">
          <b-container>
            <p>Are you sure you want to make these changes?</p>
          </b-container>
          <div slot="modal-footer" class="w-100">
            <b-button size="sm" variant="primary" @click="showModal=false">Close</b-button>
            <b-button size="sm" variant="primary" @click.prevent="ChangeItem">Confirm</b-button>
          </div>
        </b-modal>
        <img class="imgpreview" v-if="image" :src="image">
        <img class="imgpreview" v-else :src="image">
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
        <!-- <form class="info" @submit.prevent="showModal=true"> -->
        <h1>
          <input type="text" v-model="title" required>
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

        <button
          class="addproduct btn btn-fail"
          type="submit"
          :disabled="errors.any()"
          @click.prevent="ChangeItem"
        >
          <i class="fa fa-plus" aria-hidden="true"></i> Edit
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
  name: "edit",
  components: {
    ThePhonecase: Phonecase
  },
  data() {
    return {
      title: "",
      tag: "",
      price: "",
      desc: "",
      image: "",
      username: "",
      date: new Date(),
      showModal: false
    };
  },
  created() {
    console.log(this.editing[0].id);
    this.title = this.editing[0].title;
    this.tag = this.editing[0].tag;
    this.price = this.editing[0].price;
    this.desc = this.editing[0].desc;
    this.image = this.editing[0].image;
  },
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          // eslint-disable-next-line
          alert("Form Submitted!");
          return;
        }

        // alert("Please fill the required field");
      });
    },
    CloseModal: function() {
      this.$emit("hide");
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
        this.image = fileReader.result;
        console.log(this.image);
      });
      fileReader.readAsDataURL(files[0]);
      this.imgUpload = files[0];
      console.log(this.imgUpload);
    },

    ChangeItem() {
      console.log(
        firebase
          .firestore()
          .collection("Product")
          .doc(this.editing[0].id)
      );

      firebase
        .firestore()
        .collection("Product")
        .doc(this.editing[0].id)
        .set({
          title: this.title,
          tag: this.tag,
          price: this.price,
          desc: this.desc,
          date: this.date,
          image: this.image
        })
        .then(function() {
          console.log("Document successfully written!");
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
      this.$router.push("/allcase");
    }
  },
  // mounted() {
  //   this.title = this.title
  // }
  computed: {
    editing() {
      return this.$store.state.editing;
    }
  }
};
</script>




<style scoped>
section {
  width: 100%;
  z-index: 999;
  height: 100vh;
  position: fixed;
  margin: 0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  background-color: #fff;
  padding: 0 0em;
  top: 0;
  left: 0;
}

h4 {
  color: #e91e63;
}

/* ----- Photo Section ----- */

.add-photo {
  width: 30%;
  height: 100%;
  display: inline-block;
  margin: 0;
  border-radius: 6px 0px 0px 6px;
}
.addimage {
  width: 100%;
  background-color: #ffffff;
  color: #ff6b6b;
  padding: 15px 20px;
  border: solid 0.2em #ff6b6b;
  border-radius: 2em;
  cursor: pointer;
  opacity: 0.9;
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
</style>
