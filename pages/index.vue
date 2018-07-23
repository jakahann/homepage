<template>
  <div class="home-page">
    <section class="intro">
      <h1>Tervetuloa kotisivuilleni</h1>
    </section>
    <section class="content">
     <div id="text">
       <h2>WHO AM I!</h2>
       <p>Lorem Ipsum</p>
     </div>
    </section>
        <!-- <PostList :posts="loadedPosts" /> -->
    <div class="footer">
    <p>@MADE BY JARNO, 2018</p>
  </div>
  </div>
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
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url("~assets/images/main-image.jpg");
  background-position: center;
  background-size: cover;
}




.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
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

.content { 
 
  text-align: center; 
  margin: 20px;
 
}

a {
  margin-top: 30px;
  border: 3px solid grey;
  padding: 10px;
  
}


#text {
  height: 600px;
  width: 400px;
  background-position: center;
  background-size: cover;
  background-image: url("~assets/images/mypicture.jpg");
  background-color: rgb(222, 0, 0, 0.5);
}

img {
  max-width: 250px;
  max-height: 250px;
  margin: 20px;
}

.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  margin: 0px;
}

.footer p {
  text-align: center;  
}

</style>
