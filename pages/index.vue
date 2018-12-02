<template>
  <div class="home-page">
   
  </div>
</template>

<script>
export default {
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    }
  }
};
</script>

<style scoped>


.home-page {
  background-image: url("~assets/images/main-test.jpg");
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-size: cover;
  overflow: hidden;
  
}

</style>
