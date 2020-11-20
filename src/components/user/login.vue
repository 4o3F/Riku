<template>
  <div>
    <navbar/>
    <div class="columns is-mobile">
      <div class="column"></div>
      <div class="column is-two-fifths-desktop is-three-fifths-mobile">
        <div id="login_form" class="box has-text-centered">
          <div class="field">
            <div class="control">
              <input class="input" autocomplete="email" type="text" placeholder="邮箱" v-model="input.email">
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input class="input" autocomplete="current-password" type="password" placeholder="密码"
                     v-model="input.password">
            </div>
          </div>

          <div class="field">
            <div class="control">
              <button class="button is-link" v-on:click="login">登录</button>
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
import axios from 'axios'
import Data from "@/components/data";

export default {

  name: "login",
  components: {navbar},
  data: function () {
    return {
      input: {
        email: "",
        password: ""
      }
    }
  },
  methods: {
    login: function login() {
      var data = Data.getUrl()
      axios.post(data.apibaseUrl + '/user/login', {
        email: this.input.email,
        password: this.input.password,
      }, {
        withCredentials: true
      })
          .then(function (response) {
            console.log(response)
          })
    }
  },
}
</script>

<style scoped>

</style>