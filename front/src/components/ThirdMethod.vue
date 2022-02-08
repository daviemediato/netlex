<template>
  <div id="third-method">
    <h1>Método 3</h1>
    <form id="third-form" ref="form" @submit.prevent="verify()">
      <v-row>
        <v-col>
          <h2>Count</h2>
          <v-select v-model="countSelected" :items="items" outlined></v-select>
        </v-col>

        <v-col>
          <h2>Minium Word Length</h2>
          <v-select
            v-model="minWordLenSelected"
            :items="items"
            outlined
          ></v-select>
        </v-col>
      </v-row>

      <v-btn id="third-button" type="submit">Verificar</v-btn>
    </form>

    <p
      class="result-method-3"
      v-for="(wordFrequency, wordName) in wordsDict"
      :key="wordName.id"
    >
      {{ wordName }} - <b>{{ wordFrequency }}</b> ocorrências no texto.
    </p>
    <p class="result-method-3" v-if="isNoResult">
      Não há resultados para esta busca.
    </p>
  </div>
</template>

<script>
import Http from "../http-common";

export default {
  name: "ThirdMethod",
  data() {
    return {
      countSelected: 3,
      minWordLenSelected: 3,
      items: [...Array(12).keys()].map((x) => x + 1),
      wordsDict: {},
      isNoResult: false,
    };
  },
  methods: {
    verify() {
      const url = "/documents/top-words";
      const body = {
        count: this.countSelected,
        minWordLength: this.minWordLenSelected,
      };

      Http.post(url, body)
        .then((response) => {
          if (response) {
            this.wordsDict = response.data;
            this.isNoResult =
              Object.keys(this.wordsDict).length === 0 ? true : false;
          }
        })
        .catch(() => {
          throw new Error("Erro ao buscar as frases.");
        });
    },
  },
};
</script>

<style>
#third-form {
  margin: 18px 175px 24px 88px;
}

#third-field {
  border-radius: 4px;
}

#third-button {
  background: #003dd9;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  height: 45px;
  color: #ffffff;
}

.result-method-3 {
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