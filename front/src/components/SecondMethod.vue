<template>
  <div id="second-method">
    <h1>Método 2</h1>
    <h3>Digite uma palavra</h3>
    <form id="second-form" ref="form" @submit.prevent="verify()">
      <v-text-field
        id="second-field"
        v-model="word"
        name="word"
        type="text"
        placeholder="Digite uma palavra"
        class="text-field"
        outlined
        required
      ></v-text-field>

      <v-btn id="second-button" type="submit">Verificar</v-btn>
    </form>
  </div>
</template>

<script>
export default {
  name: "SecondMethod",
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
#second-form {
  margin: 18px 175px 24px 88px;
}

#second-field {
  border-radius: 4px;
}

#second-button {
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