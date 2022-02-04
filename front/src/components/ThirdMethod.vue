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
  </div>
</template>

<script>
export default {
  name: "ThirdMethod",
  data() {
    return {
      countSelected: 1,
      minWordLenSelected: 1,
      items: [...Array(12).keys()].map((x) => x + 1),
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
</style>