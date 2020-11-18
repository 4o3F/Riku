<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item">
        </a>
        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
           data-target="navbarMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" id="navbarMenu">
        <div class="navbar-end">
          <div class="navbar-item" v-if="!logged">
            <div class="buttons">
              <a class="button is-primary" v-bind:href="registerUrl">
                <strong>注册</strong>
              </a>
              <a class="button is-light" v-bind:href="loginUrl">
                登录
              </a>
            </div>
          </div>

          <div class="navbar-item" v-else>
            <img v-bind:src="imgUrl"/>
          </div>

        </div>
      </div>
    </nav>
  </div>

</template>

<script>
import UserUtils from "@/components/utils/user";
import Data from "@/components/data";

export default {
  name: "navbar",
  data: function () {
    //Data part
    var data = Data.getUrl()
    var baseurl = data.baseUrl
    var apiurl = data.apibaseUrl

    //User part
    var userinfo = UserUtils.getInfo()
    var logged;
    var uid;
    if (userinfo == null) {
      logged = false
      uid = 0
      uid = uid.toString()
    } else {
      logged = true
      uid = userinfo.uid.toString()
    }




    return {
      logged: logged,
      registerUrl: baseurl + "/register",
      loginUrl: baseurl + "/login",
      imgUrl: apiurl + "/user/getavatar/" + uid
    }
  }
}


//Navbar burger handler
document.addEventListener('DOMContentLoaded', () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});
</script>

<style scoped>

</style>