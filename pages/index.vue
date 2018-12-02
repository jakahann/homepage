<template>
  <div class="home-page">
   <!-- <div class="content">
      <h1>Jarno Hänninen</h
      <h2>Software Developer</h2>
    </div> -->
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
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  
}

</style>
