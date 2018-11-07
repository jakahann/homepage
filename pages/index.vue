<template>
  <div class="home-page">
    <section class="intro">
      <h1> Tervetuloa sivuilleni</h1>
    </section>
    <div class="content">
      <p>Moi, olen Jarno Hänninen. Aloitteleva ohjelmistokehittäjä ja olen maisterivaiheen tietotekniikan opiskelija Jyväksylän Yliopistossa.</p>
      <p>Näillä sivuilla esittelen muutamia projekteja, joissa olen ollut mukana kehittäjänä sekä lisään uusia projekteja kun niitä tulee.
        Muutamia avainsanoja osaamiseeni on: <b>JavaScript, Java, Python, Node.js, RESTful API, Nuxt.js.</b> </p>
        
        <p>Osaamiseni ja taitoni ovat vielä alkuvaiheessa,
        mutta uskonkin että niin elämässä kuin ohjelmistokehityksessäkin aina on oltava aina valmis opettelemaan uutta!
        Ja olen innokas kehittämään itseäni ja <b><u>oppimaan aina uutta!</u></b>
      </p>

      <p>Tämän sivun lisäksi voit löytää minut myös <a href="https://github.com/jakahann">GitHubista</a>
      sekä <a href="https://www.linkedin.com/in/jarnohanninen/">LinkedIn:stä</a></p>
      <p>Yhteydenotot onnistuvat parhaiten LinkedIn:in tai sähköpostin kautta osoitteeseen: 
        <a href="mailto:jakahann@student.jyu.fi">jakahann@student.jyu.fi</a>
      </p>
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

.home-page {
  min-height: 100vh;
  background-color:#E8E7E7;
 }

.content {
  padding: 30px 30px 0;
  box-sizing: border-box;
  text-align: center;
  width: 100%;
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
