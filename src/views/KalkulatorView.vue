<template>
  <div id="app">
  
    <h1>Konverter</h1>
    <h3 style="padding:5px 0px 0px 5px;color:white;">Zanima li Vas cijena naše knjige<br> u nekoj drugoj valuti?</h3>
    <p id="baseValue" style="padding:0px 0px 0px 0px;color:white;">
          1 {{ currency_one }} = {{ rate }} {{ currency_two }}
        </p>
    <div class="container">
      <div class="container-one" >
        <select
          name="first-currency"
          id="first-currency"
          @change="calculateResults()"
          v-model="currency_one"
          style="background-color: white;"
        >
          <option value="AED">AED</option>
          <option value="ARS">ARS</option>
          <option value="AUD">AUD</option>
          <option value="BAM">BAM</option>
          <option value="BGN">BGN</option>
          <option value="BRL">BRL</option>
          <option value="BSD">BSD</option>
          <option value="CAD">CAD</option>
          <option value="CHF">CHF</option>
          <option value="CLP">CLP</option>
          <option value="CNY">CNY</option>
          <option value="COP">COP</option>
          <option value="CZK">CZK</option>
          <option value="DKK">DKK</option>
          <option value="DOP">DOP</option>
          <option value="EGP">EGP</option>
          <option value="EUR">EUR</option>
          <option value="FJD">FJD</option>
          <option value="GBP">GBP</option>
          <option value="GTQ">GTQ</option>
          <option value="HKD">HKD</option>
          <option value="HRK">HRK</option>
          <option value="HUF">HUF</option>
          <option value="IDR">IDR</option>
          <option value="ILS">ILS</option>
          <option value="INR">INR</option>
          <option value="ISK">ISK</option>
          <option value="JPY">JPY</option>
          <option value="KRW">KRW</option>
          <option value="KZT">KZT</option>
          <option value="MXN">MXN</option>
          <option value="MYR">MYR</option>
          <option value="NOK">NOK</option>
          <option value="NZD">NZD</option>
          <option value="PAB">PAB</option>
          <option value="PEN">PEN</option>
          <option value="PHP">PHP</option>
          <option value="PKR">PKR</option>
          <option value="PLN">PLN</option>
          <option value="PYG">PYG</option>
          <option value="RON">RON</option>
          <option value="RUB">RUB</option>
          <option value="SAR">SAR</option>
          <option value="SEK">SEK</option>
          <option value="SGD">SGD</option>
          <option value="THB">THB</option>
          <option value="TRY">TRY</option>
          <option value="TWD">TWD</option>
          <option value="UAH">UAH</option>
          <option value="USD">USD</option>
          <option value="UYU">UYU</option>
          <option value="VND">VND</option>
          <option value="ZAR">ZAR</option>
        </select>

         

        <input
          type="number"
          name="input-one"
          id="input-one"
          v-model="amountOne"
          @input="calculateResults()"
        />
      </div>
      <div class="container-two">
        <v-btn @click="switchValues()" id="dugme">Zamjeni</v-btn>
       
      </div>
      <div class="container-there">
        <select
          id="currency-two"
          @change="calculateResults()"
          v-model="currency_two"
          style="background-color: white;"
        >
          <option value="AED">AED</option>
          <option value="ARS">ARS</option>
          <option value="AUD">AUD</option>
          <option value="BAM">BAM</option>
          <option value="BGN">BGN</option>
          <option value="BRL">BRL</option>
          <option value="BSD">BSD</option>
          <option value="BTC">BTC</option>

          <option value="CAD">CAD</option>
          <option value="CHF">CHF</option>
          <option value="CLP">CLP</option>
          <option value="CNY">CNY</option>
          <option value="COP">COP</option>
          <option value="CZK">CZK</option>
          <option value="DKK">DKK</option>
          <option value="DOP">DOP</option>
          <option value="EGP">EGP</option>
          <option value="EUR">EUR</option>
          <option value="FJD">FJD</option>
          <option value="GBP">GBP</option>
          <option value="GTQ">GTQ</option>
          <option value="HKD">HKD</option>
          <option value="HRK">HRK</option>
          <option value="HUF">HUF</option>
          <option value="IDR">IDR</option>
          <option value="ILS">ILS</option>
          <option value="INR">INR</option>
          <option value="ISK">ISK</option>
          <option value="JPY">JPY</option>
          <option value="KRW">KRW</option>
          <option value="KZT">KZT</option>
          <option value="MXN">MXN</option>
          <option value="MYR">MYR</option>
          <option value="NOK">NOK</option>
          <option value="NZD">NZD</option>
          <option value="PAB">PAB</option>
          <option value="PEN">PEN</option>
          <option value="PHP">PHP</option>
          <option value="PKR">PKR</option>
          <option value="PLN">PLN</option>
          <option value="PYG">PYG</option>
          <option value="RON">RON</option>
          <option value="RUB">RUB</option>
          <option value="SAR">SAR</option>
          <option value="SEK">SEK</option>
          <option value="SGD">SGD</option>
          <option value="THB">THB</option>
          <option value="TRY">TRY</option>
          <option value="TWD">TWD</option>
          <option value="UAH">UAH</option>
          <option value="USD">USD</option>
          <option value="UYU">UYU</option>
          <option value="VND">VND</option>
          <option value="ZAR">ZAR</option>
        </select>

        <input
          type="number"
          id="amount-two"
          placeholder="0"
          v-model="amountTwo"
          disabled
        />
      </div>
      <div class="container-four">
        <h4 id="lastlyUpdated">
          Zadnje ažurirano: {{ data.time_last_update_utc }}
          <br>
        </h4>
      </div>
    </div>
  
</div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      data: [],
      currency_one: "USD",
      currency_two: "EUR",
      rate: "",
      amountOne: 1,
      amountTwo: 0,
    };
  },
  methods: {
    calculateResults() {
      fetch(
        `https://v6.exchangerate-api.com/v6/${"9809b1cec3fb53ce2b3f3f6a"}/latest/${
          this.currency_one
        }`
      )
        .then((res) => res.json())
        .then((data) => {
          this.data = data;
          this.rate = data.conversion_rates[this.currency_two];
          this.amountTwo = this.amountOne * this.rate.toFixed(2);
        });
    },
    switchValues() {
      const temp = this.currency_one;
      this.currency_one = this.currency_two;
      this.currency_two = temp;
      this.calculateResults();
    },
  },
  mounted() {
    this.calculateResults();
    document.title = "Kalkulator";
  },
};
</script>

<style>
html {
  background: #f4f4f4;
}
#b{
  background-color:#1E1E1E;
}

#app {
  display: fixed;
  flex-direction: column;
  align-content: center;
  align-items: center;
  /* justify-content: center; */
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  width: 100%;
  height: 90%;
  background-color: #1E1E1E;
  
  box-shadow: 0 0 15px rgba(0, 0, 0, 1.7);

} 

#dugme {
  margin: 20px;
  background-color: 0000;
  width: 100px;
  color: #48D1CC; /* Dodano: Promjena boje slova */
}

h1 {
  color: #48D1CC;
  font-weight: 900;
  margin-top: 30px;
}

img {
  width: 150px;
} 

.container {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
 /* margin-bottom: 60px;  
  margin-top:1px;*/
  padding:0px 0px 150px 0px;
}

.container-two {
  display: fixed;
   /*border: 1px solid black; */
  align-content: center;
  align-items: center;
  justify-content: center;
  width: 50%;
  
  
}

.container-two button {
  padding: 5px;
  font-size: 18px;
  background: 0000;
  color: #48D1CC; /* Dodano: Promjena boje slova */
  width: 30%;
  height: 10%;
  border: none;
  outline: none;
  center:
}

select {
  padding: 5px;
  /* width: 30%; */
  margin: 5px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  outline: none;
  color: #48D1CC; /* Dodano: Promjena boje slova */
}

input {
  padding: 5px;
  font-size: 18px;
  border: 1px solid white;
  background-color:white;
  outline: none;
}

#lastlyUpdated {
  font-weight: 500;
  color: white; /* Dodano: Promjena boje slova */
}

#baseValue {
  font-weight: 500;
  display:inline-block;
  color: 0000; /* Dodano: Promjena boje slova */
  white-space:nowrap;
}
h3 {
  margin-top: 10px; /* Adjust the top margin value as needed */
  margin-bottom: 10px; /* Adjust the bottom margin value as needed */
}

</style>