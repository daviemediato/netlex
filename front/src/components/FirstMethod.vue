<template>
  <div id="first-method">
    <h1>Método 1</h1>
    <h3>Digite uma palavra</h3>
    <form id="first-form" ref="form" @submit.prevent="verify()">
      <v-text-field
        id="first-field"
        v-model="word"
        name="word"
        type="text"
        placeholder="Digite uma palavra"
        class="text-field"
        outlined
        required
      ></v-text-field>

      <v-btn id="first-button" type="submit">Verificar</v-btn>
    </form>
  </div>
</template>

<script>
export default {
  name: "FirstMethod",
  data() {
    return {
      word: "",
    };
  },
  methods: {
    verify() {
      console.log("verificado");
    },
  },
};
</script>

<style>
#first-form {
  margin: 18px 175px 24px 88px;
}

#first-field {
  border-radius: 4px;
}

#first-button {
  background: #003dd9;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  height: 45px;
  color: #ffffff;
}
</style>