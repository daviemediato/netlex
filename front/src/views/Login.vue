<template>
  <div id="login-background">
    <v-card id="login-container">
      <v-card-title>
        <span id="login-header">Login</span>
      </v-card-title>

      <hr />

      <form id="login-form" ref="form" @submit.prevent="login()">
        <span class="login-span">E-mail</span>
        <v-text-field
          v-model="username"
          name="username"
          type="email"
          placeholder="Digite seu e-mail"
          outlined
          required
        ></v-text-field>

        <span class="login-span">Senha</span>
        <v-text-field
          v-model="password"
          name="password"
          type="password"
          placeholder="Digite sua senha"
          outlined
          required
        ></v-text-field>

        <v-btn id="login-button" type="submit" value="log in">Entrar</v-btn>
      </form>
    </v-card>
    <Toast id="toast" :message="message" />
  </div>
</template>

<script>
import Http from "../http-common";
import router from "../router/index";
import Toast from "../components/Toast";

export default {
  name: "Login",
  components: {
    Toast,
  },
  data() {
    return {
      username: "",
      password: "",
      message: "",
    };
  },
  methods: {
    login() {
      const url = "/users/login";
      const body = {
        email: this.username,
        password: this.password,
      };

      Http.post(url, body)
        .then((response) => {
          if (response) {
            localStorage.setItem("token", response.data.token);
            this.isToastVisibile = false;
            router.push({ path: "/menu" }).then(() => {
              window.location.reload();
            });
          }
        })
        .catch((error) => {
          const message = error.response.data.message;
          const toastElement = document.getElementById("toast");

          this.message = message;
          toastElement.style.display = "flex";
        });
    },
  },
};
</script>

<style>
#login-background {
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("../assets/images/background.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
}

#login-container {
  width: 527px;
  margin: auto;
  display: flex;
  flex-direction: column;
}

#login-form {
  display: flex;
  flex-direction: column;
  margin: 5% 10%;
}

#login-header {
  font-size: 24px;
  margin: 15px 10px;
}

#login-button {
  background: #003dd9;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  height: 45px;
  margin-top: 44px;
  color: #ffffff;
}

#toast {
  display: none;
}

.login-span {
  margin: 10px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  color: #011c28;
}
</style>