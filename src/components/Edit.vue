<template>
  <section class="phonecase">
    <div class="close" @click="CloseModal">x</div>
    <div class="add-photo">
      <div class="photo_main">
        <img class="imgpreview" v-if="imageUrl" :src="imageUrl">
        <button class="addimage" @click="onPickFile">Upload Image</button>
        <input
          type="file"
          name="myFile"
          multiple
          style="display: none"
          ref="fileInput"
          accept="image/*"
          @change="onFilePicked"
          required
        >
      </div>
    </div>
    <div class="info-container">
      <form @submit.prevent="ChangeItem" class="info">
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
            name="comment"
            form="usrform"
            v-model="desc"
            placeholder="Enter description here..."
            required
          ></textarea>
        </h6>

        <br>

        <b-button class="addproduct" type="submit">
          <i class="fa fa-edit" aria-hidden="true"></i> Edit
        </b-button>
      </form>
    </div>
  </section>
</template>


<script>
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
      imageUrl: "",
      username: "",
      date: new Date()
    };
  },

  methods: {
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
        this.imageUrl = fileReader.result;
        console.log(this.imageUrl);
      });
      fileReader.readAsDataURL(files[0]);
      this.image = files[0];
      console.log(this.image);
    },

    ChangeItem() {
      console.log(
        firebase
          .firestore()
          .collection("Product")
          .doc()
      );

      // firebase
      //   .firestore()
      //   .collection("Product")
      //   .doc(this.phonecase.id)
      //   .set({
      //     title: this.title,
      //     tag: this.tag,
      //     price: this.price,
      //     desc: this.desc,
      //     date: this.date
      //   });
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
