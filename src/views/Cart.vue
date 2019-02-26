<template>
  <main class="page">
    <section class="shopping-cart dark">
      <div class="container">
        <div class="block-heading">
          <h2>CheckOut</h2>
        </div>
        <div class="content">
          <div class="row">
            <div class="col-md-7 col-lg-7">
              <div class="items">

                <div class="product" v-for="c in cart">
                  <div class="row">
                    <div class="col-md-3">
                      <img class="img-fluid mx-auto d-block image" v-bind:src="c.image">
                    </div>
                    <div class="col-md-8">
                      <div class="info">
                        <div class="row">
                          <div class="col-md-5 product-name">
                            <div class="product-name">
                              <a href="#">{{c.title}}</a>
                              <div class="product-info">
                                <span class="value">iPhone 7</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4 quantity">
                            <label for="quantity">Quantity:</label>
                            <input
                              id="quantity"
                              type="number"
                              value="1"
                              class="form-control quantity-input"
                            >
                          </div>
                          <div class="col-md-3 price">
                            <span>${{c.price}}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>

            <div class="col-md-5 col-lg-5">
              <div class="summary">
                <h3>Summary</h3>
                <div class="row">
                  <div class="form-group col-sm-7">
                    <label for="card-holder">Cardholder Name</label>
                    <input
                      id="card-holder"
                      type="text"
                      class="form-control"
                      placeholder="Cardholder Name"
                      aria-label="Card Holder"
                      aria-describedby="basic-addon1"
                    >
                  </div>
                  <div class="form-group col-sm-5">
                    <label for>Expiration Date</label>
                    <div class="input-group expiration-date">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="MM"
                        aria-label="MM"
                        aria-describedby="basic-addon1"
                      >
                      <span class="date-separator">/</span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="YY"
                        aria-label="YY"
                        aria-describedby="basic-addon1"
                      >
                    </div>
                  </div>
                  <div class="form-group col-sm-8">
                    <label for="card-number">Card Number</label>
                    <input
                      id="card-number"
                      type="text"
                      class="form-control"
                      placeholder="Card Number"
                      aria-label="Card Holder"
                      aria-describedby="basic-addon1"
                    >
                  </div>
                  <div class="form-group col-sm-4">
                    <label for="cvc">CVC</label>
                    <input
                      id="cvc"
                      type="text"
                      class="form-control"
                      placeholder="CVC"
                      aria-label="Card Holder"
                      aria-describedby="basic-addon1"
                    >
                  </div>
                  <div class="form-group col-sm-6">
                    <label for="first-name">First Name</label>
                    <input
                      id="firstname"
                      type="text"
                      class="form-control"
                      placeholder="First Name"
                      aria-label="First name"
                      aria-describedby="basic-addon1"
                    >
                  </div>
                  <div class="form-group col-sm-6">
                    <label for="last-name">Last Name</label>
                    <input
                      id="lastname"
                      type="text"
                      class="form-control"
                      placeholder="Last Name"
                      aria-label="Last name"
                      aria-describedby="basic-addon1"
                    >
                  </div>
                  <div class="form-group col-sm-12">
                    <label for="address">Shipping Address</label>
                    <input
                      id="address"
                      type="text"
                      class="form-control"
                      placeholder="Shipping Address"
                      aria-label="shipping address"
                      aria-describedby="basic-addon1"
                    >
                  </div>
                  <div class="form-group col-sm-6">
                    <label for="city">Country</label>
                    <input
                      id="country"
                      type="text"
                      class="form-control"
                      placeholder="Country"
                      aria-label="country"
                      aria-describedby="basic-addon1"
                    >
                  </div>
                  <div class="form-group col-sm-6">
                    <label for="province">Province</label>
                    <input
                      id="province"
                      type="text"
                      class="form-control"
                      placeholder="Province"
                      aria-label="province"
                      aria-describedby="basic-addon1"
                    >
                  </div>
                  <div class="form-group col-sm-6">
                    <label for="city">City</label>
                    <input
                      id="city"
                      type="text"
                      class="form-control"
                      placeholder="City"
                      aria-label="city"
                      aria-describedby="basic-addon1"
                    >
                  </div>
                  <div class="form-group col-sm-6">
                    <label for="city">Zip/Postal Code</label>
                    <input
                      id="Zip"
                      type="text"
                      class="form-control"
                      placeholder="Zip/Postal Code"
                      aria-label="Zip/Postal Code"
                      aria-describedby="basic-addon1"
                    >
                  </div>
                  
                </div>
                <div class="summary-item">
                  <span class="text">Subtotal</span>
                  <span class="price">$74.97</span>
                </div>
                <div class="summary-item">
                  <span class="text">Discount</span>
                  <span class="price">$0</span>
                </div>
                <div class="summary-item">
                  <span class="text">Shipping</span>
                  <span class="price">$0</span>
                </div>
                <div class="summary-item">
                  <span class="text">Total</span>
                  <span class="price">$74.97</span>
                </div>
                <button type="button" class="btn btn-primary btn-lg btn-block">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
  export default {
    name: "allcase",
    computed: {
      cart(){
        return this.$store.state.cart;
      }
    }
  };
</script>
<style>
.summary .btn {
  background-color: #ff6b6b;
  border-color: #ff6b6b;
}
.summary .btn-primary:hover,
.summary .btn-primary:focus,
.summary .btn-primary:active,
.summary .btn-primary.active,
.open > .dropdown-toggle.btn-primary {
  color: #fff;
  background-color: #ff4f4f;
  border-color: #ff4f4f;
}
.product-name a {
  color: #ff6b6b;
}
.shopping-cart {
  padding-bottom: 50px;
  font-family: "Montserrat", sans-serif;
}

.shopping-cart.dark {
  background-color: #f6f6f6;
}

.shopping-cart .content {
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.075);
  background-color: white;
}

.shopping-cart .block-heading {
  padding-top: 50px;
  margin-bottom: 40px;
  text-align: center;
}

.shopping-cart .block-heading p {
  text-align: center;
  max-width: 420px;
  margin: auto;
  opacity: 0.7;
}

.shopping-cart .dark .block-heading p {
  opacity: 0.8;
}

.shopping-cart .block-heading h1,
.shopping-cart .block-heading h2,
.shopping-cart .block-heading h3 {
  margin-bottom: 1.2rem;
  color: #ff6b6b;
}

.shopping-cart .items {
  margin: auto;
}

.shopping-cart .items .product {
  margin-bottom: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
}
.product img {
  max-height: 95px;
}

.shopping-cart .items .product .info {
  padding-top: 0px;
  text-align: center;
}

.shopping-cart .items .product .info .product-name {
  font-weight: 600;
}

.shopping-cart .items .product .info .product-name .product-info {
  font-size: 14px;
  margin-top: 15px;
}

.shopping-cart .items .product .info .product-name .product-info .value {
  font-weight: 400;
}

.shopping-cart .items .product .info .quantity .quantity-input {
  margin: auto;
  width: 80px;
}

.shopping-cart .items .product .info .price {
  margin-top: 15px;
  font-weight: bold;
  font-size: 22px;
}

.shopping-cart .summary {
  text-align: left;
  border-top: 2px solid #ff6b6b;
  background-color: #f7fbff;
  height: 100%;
  padding: 30px;
}

.shopping-cart .summary h3 {
  text-align: center;
  font-size: 1.3em;
  font-weight: 600;
  padding-top: 20px;
  padding-bottom: 20px;
}

.shopping-cart .summary .summary-item:not(:last-of-type) {
  padding-bottom: 10px;
  padding-top: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.shopping-cart .summary .text {
  font-size: 1em;
  font-weight: 600;
}

.shopping-cart .summary .price {
  font-size: 1em;
  float: right;
}

.shopping-cart .summary button {
  margin-top: 20px;
}

@media (min-width: 768px) {
  .shopping-cart .items .product .info {
    padding-top: 25px;
    text-align: left;
  }

  .shopping-cart .items .product .info .price {
    font-weight: bold;
    font-size: 22px;
    top: 17px;
  }

  .shopping-cart .items .product .info .quantity {
    text-align: center;
  }
  .shopping-cart .items .product .info .quantity .quantity-input {
    padding: 4px 10px;
    text-align: center;
  }
}
</style>
