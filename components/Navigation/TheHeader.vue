<template>
  <div class="header-container">
    <header class="the-header">
      <TheSideNavToggle @toggle="$emit('sidenavToggle')"/>
      <div class="logo">
        <nuxt-link to="/">
          <img src="~assets/images/hanninen.png">
        </nuxt-link>
      </div>
      <div class="spacer"></div>
      <div class="navigation-items">
        <ul class="nav-list">
          <li class="nav-item"><nuxt-link to="/about">About</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/posts">Projects</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/contact">Contact</nuxt-link></li>
            <div class="underbar"></div>

          <!-- <li class="nav-item"><nuxt-link to="/admin">Admin</nuxt-link></li> -->
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
import TheSideNavToggle from "@/components/Navigation/TheSideNavToggle";

export default {
  name: "TheHeader",
  components: {
    TheSideNavToggle
  }
};
</script>


<style scoped>



.header-container {
  height: 60px;
}

img {
  max-height: 100px;
  width: 100px;
}

.the-header {
  width: 100%;
  position: fixed;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* background-image: url("~assets/images/main-image.jpg");
  background-position: center;
  background-size: cover; */
  background-color: rgb(34, 34, 34);
  z-index: 100;
  box-sizing: border-box;
  padding: 0 20px;
}

.logo {
  margin: 0 10px;
  font-size: 1.3rem;
}

.logo a {
  text-decoration: none;
  color: black;
}

.spacer {
  flex: 1;
}

.navigation-items {
  display: none;
}

@media (min-width: 768px) {
  .navigation-items {
    display: block;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.nav-item {
  margin: 0 10px;
}

.nav-item a {
  text-decoration: none;
  color: white;
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  position: relative;
  color: gray;
  /* border: 2px solid gray; */
  border-bottom: 2px solid gray;
}



</style>
