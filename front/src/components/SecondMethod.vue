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

    <p id="result" v-show="isResultVisible">
      A palavra <b>{{ wordResult }}</b> foi encontrada em
      <b>{{ numberOccurrences }}</b> frases no texto.
    </p>

    <p
      class="result-method-2"
      v-for="(item, index) in phrasesOccurrences"
      :key="item.id"
    >
      {{ index + 1 }}.
      <v-main-text
        v-for="subItem in item.split(' ')"
        :key="subItem.id"
        class="result-text"
        ><v-main-text>
          <v-main-text v-if="subItem.toLowerCase().includes(wordResult)"
            ><b> {{ subItem }}</b></v-main-text
          >
          <v-main-text v-else> {{ subItem }}</v-main-text>
        </v-main-text>
      </v-main-text>
    </p>
  </div>
</template>

<script>
import Http from "../http-common";

export default {
  name: "SecondMethod",
  data() {
    return {
      word: "",
      isResultVisible: false,
      phrasesOccurrences: [],
      numberOccurrences: 0,
      wordResult: "",
    };
  },
  methods: {
    verify() {
      const url = "/documents/word-sentences";
      const body = {
        word: this.word,
      };

      Http.post(url, body)
        .then((response) => {
          this.phrasesOccurrences = response.data;
          this.numberOccurrences = this.phrasesOccurrences.length;
          this.wordResult = this.word;
          this.isResultVisible = true;
        })
        .catch(() => {
          throw new Error("Erro ao buscar as frases");
        });
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

.result-method-2 {
  height: 23px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  color: #3a5163;
  margin: 18px 175px 24px 88px;
}
</style>