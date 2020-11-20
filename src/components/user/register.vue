<template>
  <div>
    <navbar/>
    <div class="columns is-mobile">
      <div class="column"></div>
      <div class="column is-two-fifths-desktop is-three-fifths-mobile">
        <div id="register_form" class="box has-text-centered" v-if="!registerSuccess">
          <div class="field">
            <div class="control">
              <input class="input" autocomplete="username" type="text" placeholder="用户名" v-model="input.name">
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input class="input" autocomplete="email" type="text" placeholder="邮箱" v-model="input.email">
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input class="input" autocomplete="new-password" type="password" placeholder="密码"
                     v-model="input.password">
            </div>
          </div>

          <div class="field">
            <div class="control">
              <vue-recaptcha :loadRecaptchaScript="true" recaptchaHost='www.recaptcha.net'
                             :sitekey="recaptchaKey"></vue-recaptcha>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <button class="button is-link" v-on:click="register">注册</button>
            </div>
          </div>
        </div>
        <div class="box has-text-centered" v-else>
          <div class="notification is-success is-light">
            <span class="icon has-text-success is-large">
            <font-awesome-icon icon="check-square" style="width: 100%; height: auto" />
            </span>
            <br>
            <div class="content is-medium">
              注册成功!
            </div>
          </div>
        </div>
      </div>
      <div class="column"></div>
    </div>

  </div>
</template>

<script>
import navbar from "@/components/common/navbar";
import VueRecaptcha from 'vue-recaptcha';
import Data from "@/components/data";
import axios from "axios";
import page from 'page'


export default {
  name: "register",
  components: {navbar, VueRecaptcha},
  data: function () {
    var recaptchaKey = Data.getUrl().recaptchaKey
    return {
      recaptchaKey: recaptchaKey,
      registerSuccess: false,
      input: {
        username: "",
        email: "",
        password: ""
      }
    }
  },
  methods: {
    register: function register() {
      var instance = this;

      var data = Data.getUrl()
      axios.post(data.apibaseUrl + '/user/register', {
        name: this.input.name,
        email: this.input.email,
        password: this.input.password,
        recaptcha: window.grecaptcha.getResponse()
      }, {
        withCredentials: true
      })
          .then(function (response) {
            if (response.data.code == "200" && response.data.msg == "register success") {
              instance.registerSuccess = true
              setTimeout(function () {
                console.log("test")
                page('/')
              }, 5000)
            }
          })
    }
  }
}
</script>

<style scoped>

</style>