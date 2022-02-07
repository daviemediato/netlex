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

    <p id="result" v-show="isResultVisible">
      A palavra <b>{{ wordResult }}</b> foi encontrada em
      <b>{{ numberOccurrences }}</b> vezes no texto.
    </p>
  </div>
</template>

<script>
import Http from "../http-common";

export default {
  name: "FirstMethod",
  data() {
    return {
      word: "",
      numberOccurrences: 0,
      wordResult: "",
      isResultVisible: false,
    };
  },
  methods: {
    verify() {
      const url = "/documents/word-frequency";
      const body = {
        word: this.word,
      };

      Http.post(url, body)
        .then((response) => {
          if (response) {
            this.numberOccurrences = response.data;
            this.wordResult = this.word;
            this.isResultVisible = true;
          }
        })
        .catch(() => {
          throw new Error("Erro ao buscar a frequência da palavra.");
        });
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

#result {
  height: 23px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  color: #000000;
  margin: 18px 175px 24px 88px;
}
</style>