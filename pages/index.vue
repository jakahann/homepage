<template>
  <div class="home-page">
    <div class="content">
      <h1>Jarno Hänninen</h1>
      <h2>Software Developer</h2>
    </div>
  </div>
</template>


<style scoped>
@home-page-font {
  font-family: homePageFont;
  src: ("~/assets/fonts/AllerDisplay.ttf");
}

.home-page {
  position: fixed;
  background-image: url("~assets/images/main-back.jpg");
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  text-align: center;
  
}

.content {
  align-content: center;
  position: relative;
  
  
}

h1,
h2 {
  font-family: homePageFont;
  font-size: 450%;
  color: white;
  margin: 0px;
}
h2 {
  font-size: 300%;
  opacity: 0.2;
}


 @media screen and (max-width: 1200px){
  .content {
   top: 10%;
  }
}


 @media screen and (max-width: 500px){
  .content {
   display: none;
  }
} 

</style>
