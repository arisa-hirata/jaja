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
              <div class="cell example example5" id="example-5">
                <form>
                  <div id="example5-paymentRequest">
                    <!--Stripe paymentRequestButton Element inserted here-->
                  </div>
                  <fieldset>
                  
                    <legend
                      class="payment-request-available"
                      data-tid="elements_examples.form.enter_card_manually"
                    >Or enter card details</legend>
                    <div class="row">
                      <div class="field">
                        <label for="example5-name" data-tid="elements_examples.form.name_label">Name</label>
                        <input
                          id="example5-name"
                          data-tid="elements_examples.form.name_placeholder"
                          class="input"
                          type="text"
                          placeholder="Joe Smith"
                          required
                          autocomplete="name"
                        >
                      </div>
                    </div>
                    <div class="row">
                      <div class="field">
                        <label
                          for="example5-email"
                          data-tid="elements_examples.form.email_label"
                        >Email</label>
                        <input
                          id="example5-email"
                          data-tid="elements_examples.form.email_placeholder"
                          class="input"
                          type="text"
                          placeholder="info@jaja.com"
                          required
                          autocomplete="email"
                        >
                      </div>
                      <div class="field">
                        <label
                          for="example5-phone"
                          data-tid="elements_examples.form.phone_label"
                        >Phone</label>
                        <input
                          id="example5-phone"
                          data-tid="elements_examples.form.phone_placeholder"
                          class="input"
                          type="text"
                          placeholder="(604) 434-5734"
                          required
                          autocomplete="tel"
                        >
                      </div>
                    </div>
                    <div data-locale-reversible>
                      <div class="row">
                        <div class="field">
                          <label
                            for="example5-address"
                            data-tid="elements_examples.form.address_label"
                          >Address</label>
                          <input
                            id="example5-address"
                            data-tid="elements_examples.form.address_placeholder"
                            class="input"
                            type="text"
                            placeholder="555 Seymour St"
                            required
                            autocomplete="address-line1"
                          >
                        </div>
                      </div>
                      <div class="row" data-locale-reversible>
                        <div class="field">
                          <label
                            for="example5-city"
                            data-tid="elements_examples.form.city_label"
                          >City</label>
                          <input
                            id="example5-city"
                            data-tid="elements_examples.form.city_placeholder"
                            class="input"
                            type="text"
                            placeholder="Vancouver"
                            required
                            autocomplete="address-level2"
                          >
                        </div>
                        <div class="field">
                          <label
                            for="example5-state"
                            data-tid="elements_examples.form.state_label"
                          >Province</label>
                          <input
                            id="example5-state"
                            data-tid="elements_examples.form.state_placeholder"
                            class="input empty"
                            type="text"
                            placeholder="BC"
                            required
                            autocomplete="address-level1"
                          >
                        </div>
                        <div class="field">
                          <label
                            for="example5-zip"
                            data-tid="elements_examples.form.postal_code_label"
                          >ZIP</label>
                          <input
                            id="example5-zip"
                            data-tid="elements_examples.form.postal_code_placeholder"
                            class="input empty"
                            type="text"
                            placeholder="V6B 3H6"
                            required
                            autocomplete="postal-code"
                          >
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="field">
                        <label for="example5-card" data-tid="elements_examples.form.card_label">Card</label>
                        <div ref="card" id="paycard" class="input"></div>
                        <button id="pbutton" v-on:click="purchase">Purchase</button>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
let stripe = Stripe(`pk_test_97SnjKYkFcZ8bahgsfgpHnu9`),
  elements = stripe.elements(),
  card = undefined;

export default {
  mounted: function() {
    card = elements.create("card");
    card.mount(this.$refs.card);
  },

  purchase: function() {
    stripe.createToken(card).then(function(result) {
      // Access the token with result.token
    });
  },
  purchase: function() {
    let self = this;

    stripe.createToken(card).then(function(result) {
      if (result.error) {
        self.hasCardErrors = true;
        self.$forceUpdate(); // Forcing the DOM to update so the Stripe Element can update.
        return;
      }
    });
  },
  name: "allcase",
  computed: {
    cart() {
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

.example.example5 {
  background-color: #ffffff;
}

.example.example5 * {
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
}


#example5-paymentRequest {
  max-width: 500px;
  width: 100%;
  margin-bottom: 10px;
}

.example.example5 fieldset {
  border: 1px solid #ff6b6b;
  padding: 15px;
  border-radius: 6px;
}

.example.example5 fieldset legend {
  margin: 0 auto;
  padding: 0 10px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: #ff6b6b;
  background-color: #ff6b6b;
}

.example.example5 fieldset legend + * {
  clear: both;
}

.example.example5 .card-only {
  display: block;
}
.example.example5 .payment-request-available {
  display: none;
}

.example.example5 .row {
  display: -ms-flexbox;
  display: flex;
  margin: 0 0 10px;
}

.example.example5 .field {
  position: relative;
  width: 100%;
}

.example.example5 .field + .field {
  margin-left: 10px;
}

.example.example5 label {
  width: 100%;
  color: #ff6b6b;
  font-size: 13px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.example.example5 .input {
  width: 100%;
  color: rgb(34, 34, 34);
  background: transparent;
  padding: 5px 0 6px 0;
  border-bottom: 1px solid #267cfd;
  transition: border-color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.example.example5 .input::-webkit-input-placeholder {
  color: #ff6b6b;
}

.example.example5 .input::-moz-placeholder {
  color: #ff6b6b;
}

.example.example5 .input:-ms-input-placeholder {
  color: #ff6b6b;
}

.example.example5 .input.StripeElement--focus,
.example.example5 .input:focus {
  border-color: #fff;
}
.example.example5 .input.StripeElement--invalid {
  border-color: #ff6b6b;
}

.example.example5 input:-webkit-autofill,
.example.example5 select:-webkit-autofill {
  -webkit-text-fill-color: #313131;
  transition: background-color 100000000s;
  -webkit-animation: 1ms void-animation-out;
}

.example.example5 .StripeElement--webkit-autofill {
  background: transparent !important;
}

.example.example5 input,
.example.example5 button,
.example.example5 select {
  -webkit-animation: 1ms void-animation-out;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  border-style: none;
  border-radius: 0;
}

.example.example5 select.input,
.example.example5 select:-webkit-autofill {
  background-image: url('data:image/svg+xml;utf8,<svg width="10px" height="5px" viewBox="0 0 10 5" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="#fff" d="M5.35355339,4.64644661 L9.14644661,0.853553391 L9.14644661,0.853553391 C9.34170876,0.658291245 9.34170876,0.341708755 9.14644661,0.146446609 C9.05267842,0.0526784202 8.92550146,-2.43597394e-17 8.79289322,0 L1.20710678,0 L1.20710678,0 C0.930964406,5.07265313e-17 0.707106781,0.223857625 0.707106781,0.5 C0.707106781,0.632608245 0.759785201,0.759785201 0.853553391,0.853553391 L4.64644661,4.64644661 L4.64644661,4.64644661 C4.84170876,4.84170876 5.15829124,4.84170876 5.35355339,4.64644661 Z" id="shape"></path></svg>');
  background-position: 100%;
  background-size: 10px 5px;
  background-repeat: no-repeat;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 20px;
}

.example.example5 button {
  display: block;
  width: 100%;
  height: 40px;
  margin: 20px 0 0;
  background-color: #fff;
  border-radius: 6px;
  color: #ff6b6b;
  font-weight: 500;
  cursor: pointer;
}
#pbutton{
  background-color: #ff6b6b;
  color: white;
}
</style>
