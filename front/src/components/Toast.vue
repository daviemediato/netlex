<template>
  <div id="toast">
    <div id="text-toast">{{ info }}</div>
    <v-btn id="btn-toast" v-on:click="closeIcon" depressed>
      <v-icon id="close-toast">mdi-close</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      info: this.message,
    };
  },
  methods: {
    closeIcon() {
      const toastElement = document.getElementById("toast");
      toastElement.style.display = "none";
    },
  },
};
</script>

<style>
#toast {
  position: absolute;
  width: 174px;
  height: 50px;
  left: 5%;
  top: 90%;
  background: #011c28;
  border-radius: 4px;
  display: flex;
  justify-content: right;
  align-items: center;
}

#text-toast {
  height: 21px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
}

#close-toast {
  color: white;
}

#btn-toast {
  padding: 0px;
  margin: 0px;
  background: #011c28;
}
</style>