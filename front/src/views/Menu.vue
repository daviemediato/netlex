<template>
  <div id="menu">
    <v-tabs vertical>
      <v-tab> <h4>Método 1</h4> </v-tab>
      <v-tab> <h4>Método 2</h4> </v-tab>
      <v-tab> <h4>Método 3</h4> </v-tab>

      <v-tab-item>
        <v-card flat>
          <FirstMethod />
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <SecondMethod />
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <ThirdMethod />
        </v-card>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import FirstMethod from "../components/FirstMethod.vue";
import SecondMethod from "../components/SecondMethod.vue";
import ThirdMethod from "../components/ThirdMethod.vue";

export default {
  name: "Menu",
  components: {
    FirstMethod,
    SecondMethod,
    ThirdMethod,
  },
  data() {
    return {
      items: [
        ["mdi-email", "Inbox"],
        ["mdi-account-supervisor-circle", "Supervisors"],
        ["mdi-clock-start", "Clock-in"],
      ],
    };
  },
  methods: {},
};
</script>

<style>
#menu {
  width: 100%;
  height: 100%;
}

.v-tab {
  top: 50px;
  margin: 8px;
}

.v-tabs-slider {
  display: none;
}

.v-tab.v-tab--active {
  background: #ffffff;
  border-radius: 4px;
  width: 134px;
  height: 40px;
}

.v-tab.v-tab--active h4 {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #000000;
}

.v-slide-group__content {
  width: 150px;
  min-height: 100vh;
  float: left;
  position: absolute;
  background-image: url("../assets/images/background.png");
  background-size: cover;
}
</style>