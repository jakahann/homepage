<template>
  <div class="home-page">
    <!-- <section class="intro">
      <h1> Tervetuloa sivuilleni</h1>
    </section> -->
    <div class="content">
      <h1>Jarno Hänninen</h1>
        <h2>Software Developer</h2>
       
    </div></div>

</template>

<script>
export default {
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }

};
</script>

<style scoped>

@home-page-font {
  font-family: homePageFont;
  src: ("~/assets/fonts/AllerDisplay.ttf")
}
h1 {
  position: relative;
  left: 16%;
  font-family: homePageFont;
  font-size: 4.5em;
  color: white;
  margin: 0px;
}


h2{
  position: relative;
  font-family: homePageFont;
  left: 22%;
  font-size: 3.0em;
  color: white;
  margin: 0px;  
  opacity: 0.2;
}

.home-page {
  min-height: 100vh;
  background-image: url("~assets/images/main-back.jpg");
  background-position: center;
  background-size: cover;
 }

.content {
  position: relative;
  top: 100px;
}

.content p {
  text-align: justify;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .content {
    width: 800px;
    margin: auto;
  }
}


.intro h1 {
  position: relative;
  margin-top: 0px;
  color: black;
  top: 15px;
  left: 25%;
  background-color: rgb(211, 211, 211);
  opacity: 0.9;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
  text-align: center;
  width: 50%;
}

/* .down {
  height: 70vh;
  background-image: url("~assets/images/main-background.jpg");
  background-size: cover;
  } */

/* .intro {
  height: 300px;
  position: relative;
  padding: 30px;
  background-image: url("~assets/images/main-image.jpg");
  background-position: center;
  background-size: cover;
  box-sizing: border-box;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

h2 {
  text-align: center;
} 

a {
  margin-top: 30px;
  border: 3px solid grey;
  padding: 10px;
} */
</style>
