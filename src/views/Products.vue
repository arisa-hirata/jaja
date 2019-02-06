<template>
  <section class="phonecase">
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
        >
      </div>
    </div>
    <div class="info-container">
      <div class="info">
        <h1>
          <input type="text" placeholder="Enter title here..." v-model="title">
        </h1>

        <h4>
          $
          <span>
            <input type="number" placeholder="0.00" v-model="price">
          </span>
        </h4>
        <span>
          <i class="fas fa-tag"/>
          <input type="text" placeholder="Enter tag.." v-model="tag">
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
          ></textarea>
        </h6>

        <br>

        <b-button class="addproduct" @click="CreateItem">
          <i class="fa fa-plus" aria-hidden="true"></i> Add Product
        </b-button>
      </div>
    </div>
  </section>
</template>
<style scoped>
section {
  width: 100%;
  margin: 4em auto;
  position: fixed;
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
}
.addimage {
  width: 100%;
  background-color: #ffffff;
  padding: 10% 10%;
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
<script>
import Phonecase from "@/components/Phonecase.vue";
import firebase from "firebase";
export default {
  name: "Product",
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
      date: new Date()
    };
  },
  methods: {
    onPickFile() {
      this.$refs.fileInput.click();
    },

    onFilePicked(event) {
      const files = event.target.files;
      let filename = files[0].name;
      console.log(filename);
      if (filename.lastIndexOf(".") <= 0) {
        return alert("Please add va valid file!");
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
      // var storageRef = firebase.storage().ref();

      // var mountainsRef = storageRef.child(`images/${this.filename}`);

      // mountainsRef.put(this.imageFile).then(snapshot => {
      //   snapshot.ref.getDownloadURL().then(downloadURL => {
      //     this.imageUrl = downloadURL;
      //     firebase
      //       .firestore()
      //       .collection("Product")
      //       .add({ downloadURL });
      //   });
      // });

      const colref = firebase.firestore().collection("Product");

      const saveData = {
        title: this.title,
        // image: this.image,
        tag: this.tag,
        price: this.price,
        desc: this.desc,
        date: this.date
      };

      colref
        .add(saveData)
        .then(function(docRef) {
          console.log(docRef.id);
        })
        .catch(function(error) {
          console.error(error);
        });
      // this.$router.push("/allcase");
    }
  }
};
</script>
