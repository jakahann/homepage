<template>
  <div>
    <div class="about-page">
      <div class="image"><img src="~assets/images/mypicture.jpg" alt=""></div>

      <div class="whoami">
        <h1>Who am I?</h1>
        <p>
          My name is Jarno Hänninen and I'm a aspiring software developer.
          I'm currently studying in masters program for Computer Sciences
          at the university of Jyväskylä. I'm working as an research assistant / software developer
          at university at a project called Watson Health Cloud Finland. The project is finishing up
           and I'm  open for employment opportunities.
        </p>

        <p>
          I'm still in the junior phase of my career and thus seeking employment in position where
          I can learn from various masters of the field. Lately I have focused on various web-development
          technologies and frameworks like Node.js, JavaScript, Vue.js and Nuxt.js.
        </p>

        <p>
          I'm also very interested in working with languages like Java and Python.
          And currently as I'm still seeking my path in the within the field of software development I'm not limiting myself
          of my interests to narrow field but I'm very open to all possibilities and opportunities.
        </p>

        <p>
          I'm also a life long learner. I's an aspiring developer I do not consider myself as a professional yet and
          I see the limitations of my capablities for now. But I do belive that it's not a question about what I can right now,
          but it's what I'm ready to learn. I belive that we learn all the time and each day we have a opportunity to learn new things
          about life, programming and everyhting!
        </p>
      </div>
    <div class="notanerd">
        <h1>Not just a computer nerd?</h1>
        <p>
          Besided being a computer science student, I'm actually a Registered Nurse too. That's right, a nurse!
          I graduated from Centria university of applied sciences back in 2011 and worked at the university hospital of Tampere
          between 2011 and 2014. But even before starting my nursing studies I knew I would study something else too.
        </p>
        <p>
          During my studies as a nurse, I developed an interest in working with children and especially childrens psychiatry was of great
          interest to me. I was lucky to do practical training at the local hospitals ward for childrens psychiatry and I did my bachelors
          thesis on families experiences on early intervetions within families with infants. After finishing my thesis I moved to Tampere
          where I had the opportunity to work at the childrens traumapsychiatric ward with some of the leading experts in the field in
          Finland.
          </p>
          <p>
           After moving to Jyväskylä to study computer sciences I started working at a childrens home.
           I mostly did short-term gigs in the home and few longer ones too. Currently I'm doing an occasional shift
           to the home while working at the university as an research assistant. I'm also in charge of supervising and developing the
           medicinal care at the childrens home within the qualifications of a nurse.
          </p>
   </div>
<div class="andmore">
        <h1>What else do I do?</h1>
        <p>
          On my free time I try to keep my self in shape by running. Currently I have ran one half marathon in 2017 and my goal is to finish 
          another in 2019 and a full marathon. For me running as a perfect way of clearing my head but also a good way to find a balance to 
          the whole lot of sitting software development requires. 
        </p>
        <p>
          In addition to running I also do volunteer work. I work at my local church with kids and youth. I'm also a volunteer leader for our Sunday service 
          group. Organizing and maintaining the rosters and planning the structure for the year is part of what I do in addition to participating as a teacher.
          I'm also volunteering usually at our churches summer camp for a week in June-July. In addition to working with kids I also do translations (finnish to english) for 
          our international parishioners. 
        </p>
      </div>



    </div>
  </div>
</template>

<style scoped>
.about-page {
  min-height: 100vh;
  min-width: 100vh;
  padding: 30px;
  background-color:#0a0a0a;
  display: flex;
  flex-wrap: wrap;
}

.image {
  margin-top: 90px;
  width: 20%;  
  margin-right: 1%;
}
.whoami {
width: 35%;
margin-right: 10px;
height: auto;
margin-bottom: 1px;
}
.notanerd {
  margin-top: 150px;
  margin-left: 10px;
  width: 35%;

}
.andmore {
  width: 35%;
  margin-left: 20%;
  

  }
img {
  max-width: 100%;
  border-radius: 40px;
  max-height: 100%;


}
h1,
p {
  /* font-family: homePageFont; */
  color: gray;
  text-align: justify;
}
h1 {
  text-align: center
}
</style>
