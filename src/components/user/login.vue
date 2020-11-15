<template>
  <div>
    <Navbar/>
    <div id="login_form">
      <div class="field">
        <label class="label">用户名</label>
        <div class="control">
          <input class="input" type="text" placeholder="用户名" v-model="input.username">
        </div>

        <label class="label">密码</label>
        <div class="control">
          <input class="input" type="text" placeholder="密码" v-model="input.password">
        </div>
      </div>

      <div class="field">
        <div class="control">
          <button class="button is-link" v-on:click="login()">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../common/navbar'

export default {

  name: "login",
  components: {Navbar},
  data: function () {
    return {
      input: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
    login() {
      console.log(this.input.username)
    }
  }
}
</script>

<style scoped>

</style>