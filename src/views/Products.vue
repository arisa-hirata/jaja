<template>
  <section class="product">
    <div class="product__photo">
      <div class="photo-container">
        <div class="photo-main">
          <div class="controls">
            <i class="far fa-heart"></i>
          </div>
          <img class="caseimage" src="../assets/case1wobg.png" alt="casesimage">
        </div>
      </div>
    </div>
    <div class="product__info">
      <div class="title">
        <h1>Title Test</h1>
        <input type="text" placeholder="Enter title here..." v-model="title" required>
        <br>

        <button @click="onPickFile">Upload Image</button>
        <input
          type="file"
          name="myFile"
          multiple
          style="display: none"
          ref="fileInput"
          accept="image/*"
          @change="onFilePicked"
        >
        <br>

        <!-- <img src=> -->
        <br>
        <span>
          <i class="fas fa-tag">Tag:</i>
        </span>
        <input type="text" placeholder="Enter tag.." v-model="tag">
      </div>
      <div class="price">
        $
        <span>
          <input type="number" placeholder="Enter price here..." v-model="price">
        </span>
      </div>

      <div class="description">
        <h3>Description</h3>
        <textarea rows="4" cols="50" name="comment" form="usrform" v-model="desc">
        Enter description here...</textarea>
      </div>
      <button class="buy--btn" @click="CreateItem">Add Product</button>
    </div>
  </section>
</template>
<style>
* {
  box-sizing: border-box;
}

body {
  display: grid;
  grid-template-rows: 1fr;
  font-family: "Raleway", sans-serif;
  background-color: #ffeee7;
}

h3 {
  font-size: 0.7em;
  letter-spacing: 1.2px;
  color: #a6a6a6;
}

.detailpic {
  max-width: 100%;
  -webkit-filter: drop-shadow(1px 1px 3px #a6a6a6);
  filter: drop-shadow(1px 1px 3px #a6a6a6);
}

/* ----- Product Section ----- */
.product {
  display: grid;
  grid-template-columns: 0.7fr 1fr;
  margin: auto;
  padding: 8em;
  min-width: 400px;
  background-color: white;
  border-radius: 5px;
}

/* ----- Photo Section ----- */
.product__photo {
  position: relative;
}

.photo-container {
  position: absolute;
  left: -2.5em;
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  box-shadow: 4px 4px 22px -2px rgba(0, 0, 0, 0.3);
}

.photo-main {
  border-radius: 6px 6px 6px 6px;
  background-color: #f8b8b9;
  background: radial-gradient(rgb(255, 172, 174), #f8b8b9);
}
.photo-main .controls {
  display: flex;
  justify-content: space-between;
  padding: 0.8em;
  color: #fff;
}
.photo-main .controls i {
  cursor: pointer;
}
.photo-main img {
  position: relative;
  padding: 1em;
  max-width: 12em;
  -webkit-filter: saturate(150%) contrast(120%) hue-rotate(10deg)
    drop-shadow(1px 20px 10px rgba(0, 0, 0, 0.3));
  filter: saturate(150%) contrast(120%) hue-rotate(10deg)
    drop-shadow(1px 20px 10px rgba(0, 0, 0, 0.3));
}

/* ----- Informations Section ----- */
.product__info {
  padding: 0.8em 0;
}

.title h1 {
  margin-bottom: 0.1em;
  color: #4c4c4c;
  font-size: 1.5em;
  font-weight: 900;
}
.title span {
  font-size: 0.7em;
  color: #a6a6a6;
}

.price {
  margin: 1.5em 0;
  color: #ff3f40;
  font-size: 0.5rem;
}
.price span {
  padding-left: 0.15em;
  font-size: 2.9em;
}

.description {
  clear: left;
  margin: 2em 0;
}
.description h3 {
  margin-bottom: 1em;
}

.buy--btn {
  padding: 1.5em 3.1em;
  border: none;
  border-radius: 7px;
  font-size: 0.8em;
  font-weight: 700;
  letter-spacing: 1.3px;
  color: #fff;
  background-color: #ff3f40;
  box-shadow: 2px 2px 25px -7px #4c4c4c;
  cursor: pointer;
}
.buy--btn:active {
  -webkit-transform: scale(0.97);
  transform: scale(0.97);
}
</style>

<script>
import firebase from "firebase";

export default {
  name: "Product",
  data() {
    return {
      title: "",
      imageUrl: "",
      tag: "",
      price: "",
      desc: "",
      date: new Date(),
      time: new Date()
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
      if (!this.image) {
        return;
      }

      var storageRef = firebase.storage().ref();

      var mountainsRef = storageRef.child(`images/${this.filename}`);

      mountainsRef.put(this.imageFile).then(snapshot => {
        snapshot.ref.getDownloadURL().then(downloadURL => {
          this.imageUrl = downloadURL;
          firebase
            .firestore()
            .collection("Product")
            .add({ downloadURL });
        });
      });

      const colref = firebase.firestore().collection("Product");

      const saveData = {
        title: this.title,
        image: this.image,
        tag: this.tag,
        price: this.price,
        desc: this.desc
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
