<template>
  <v-app id="App"> <router-view /> </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({}),
};
</script>

<style>
html {
  height: 100%;
  overflow: hidden;
}

h1 {
  width: 154px;
  height: 42px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 42px;
  color: #011c28;
  margin: 60px 53px 0px 71px;
}

h2 {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  margin: 71px 0px 18px 0px;
  color: #000000;
}

h3 {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  margin: 88px 0px 18px 88px;
  color: #000000;
}

h4 {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
  text-transform: capitalize;
}

hr {
  opacity: 0.1;
  border: 1px solid #011c28;
}

span {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  color: #011c28;
}

::-webkit-scrollbar {
  display: none;
}

.v-text-field input {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  opacity: 1;
}

.v-btn__content {
  text-transform: capitalize;
  letter-spacing: normal;
}
</style>