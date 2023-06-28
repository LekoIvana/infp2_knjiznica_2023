<template>
  <div class="login-form">
    <h1 class="form-title">Prijava</h1>

    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="ime">Ime:</label>
        <input type="text" id="ime" v-model="ime">
      </div>

      <div class="form-group">
        <label for="prezime">Prezime:</label>
        <input type="text" id="prezime" v-model="prezime">
      </div>

      <div class="form-group">
        <label for="email">E-pošta:</label>
        <input type="email" id="email" v-model="email">
      </div>

      <button type="submit" class="submit-button">Prijavi se</button>
      <button type="button" class="create-account-button" @click="createAccount">Napravi račun</button>
    </form>
  </div>
</template>


<style>
.login-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 3px solid #48D1CC;
  border-radius: 5px;
  background-color: #1E1E1E;
  box-shadow:0 0 15px rgba(0, 0, 0, 1.7);
}

.form-title {
  text-align: center;
  color: #48D1CC;
  font-size: 24px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
  color: #48D1CC;
}

input[type="text"],
input[type="email"] {
  width: 100%;
  padding: 8px;
  border: 1px solid white;
  border-radius: 3px;
  background-color:white;
}

.submit-button,
.create-account-button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: white;
  color: #48D1CC;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.submit-button:hover,
.create-account-button:hover {
  background-color: #AFEEEE;
}

.create-account-button {
  margin-top: 10px;
}
</style>

