<template>
  <div>
    <div class="about-page">
      <div class="whoami">
        <img src="~assets/images/mypicture.jpg" alt>
        <h1>Who am I?</h1>
        <p>
          My name is Jarno Hänninen and I'm a aspiring software developer.
          I'm currently studying for my masters degree in Computer Science
          at the university of Jyväskylä. I'm also working as an research assistant / software developer
          at the university in a project called Watson Health Cloud Finland. The project is finishing up at the end of 2018
          and I'm open for employment opportunities.
        </p>

        <p>
          I'm still in the junior stages of my career and thus seeking employment in a position where
          I can learn from various masters of the field and hone my programming skills, and hopefully one day
          be able to share my skills with starting programmers. Lately I have been focussing on various web-development
          technologies and frameworks like Javascript, Node.js, Vue.js and Nuxt.js.
        </p>

        <p>
          My area of interests is not limited to web technologies and I am intererested in working
          with different languages and frameworks. I'm still seeking my true love as a coder and I'm not
          narrowing my search to any special area but open to all possiblities and opportunities.
        </p>

        <p>
          I do not consider myself yet to be a professional as a software developer but as a junior developer with potential to
          achieve great things with right kind of mentoring. As a life long learner I believe there is alway room for improvement
          and learning new things. And as a developer, I think I shouldn't be asked what I can right now but what can I learn?
          I try to learn something new everyday about life, programming and everything!
        </p>
      </div>
      <div class="notanerd">
        <h1>Not just an IT guy?</h1>
        <p>
          Besided being a computer science student, I'm actually also a Registered Nurse. That's right, a nurse!
          I graduated from Centria university of applied sciences back in 2011 and worked at the university hospital of Tampere
          between 2011 and 2014. But even before starting my nursing studies I knew I would study something else too, just didn't know it would be
          computers.
        </p>
        <p>
          During my studies as a nurse, I developed an interest in working with children and especially childrens psychiatry was of great
          interest to me. I was lucky to do practical training at the local hospital wards for childrens psychiatry and I did my bachelors
          thesis on families experiences on early intervetions within families with infants. You can check my thesis from <a href="http://urn.fi/URN:NBN:fi:amk-2011052710087">here</a> if such things
          interest you. After finishing my thesis I moved to Tampere
          where I had the opportunity to work at the childrens traumapsychiatric ward with some of the leading experts in
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
          On my free time I try to keep my self in shape by running.
          Currently I have ran one half marathon in 2017
          with the time 2:13:27. This year I didn't participate in
          any events but for the coming year my goal is to finish
          another half marathon and hopefully a full marathon. For
          me running as a perfect way of clearing my head but also a good way to find a balance
          to hours and hours of sitting required for studying and programming.
        </p>
        <p>
          In addition to running I also do volunteer work at my local church.
          I work mostly with kids and youth. I am a  volunteer
          leader for our Sunday service group. Organizing and maintaining the
          rosters and planning the structure for the year is part of what I do
          in addition to participating as a teacher.  In addition to working
          with kids I also do translations (finnish to english) for
          international parishioners at our church.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-page {
  min-height: 100vh;
  min-width: 100vh;
  padding: 2%;
  background-color: #0a0a0a;
  display: flex;
  flex-wrap: wrap;
  position: relative;
}

.whoami {
  max-width: 50vw;
  max-height: 60vh;
}

.whoami img {
  max-height: 100%;
  border-radius: 40px;
  float: left;
  margin-right: 5%;
}

.whoami p {
  max-height: 100%;
  padding-right: 3%;
}

.notanerd {
  max-width: 35vw;
  max-height: 60wh;
}

.notanerd p {
  max-width: 100%;
}

.andmore {
  max-width: 100%;
  margin-top: 5px;
}

.andmore p {
  text-align: justify;
  margin-left: 30%;
  margin-right: 30%;
}

h1,
p {
  color: gray;
  text-align: justify;
}

h1 {
  text-align: center;
}

@media screen and (max-width: 1570px) {
  .whoami {
    margin-bottom: 10%;
  }
}

@media screen and (max-width: 1336px) {
  .whoami {
    margin-bottom: 25%;
  }
}

@media screen and (max-width: 1200px) {
  .about-page {
    min-height: 100%;
    min-width: 100%;
    display: block;
    overflow: scroll;
  }

  .whoami {
    min-width: 70vw;
  }

  .whoami img {
    max-width: 75%;
    float: left;
  }
  .whoami h1 {
    float: left;
    min-width: 100%;
  }

  .whoami p {
    float: left;
    max-width: 100%;
    padding: 0;
  }
  .notanerd {
    float: left;
    min-width: 70vw;
  }

  .andmore {
    float: left;
    min-width: 70vw;
    max-width: 30vw;
  }

  .andmore p {
    margin-left: 0;
    margin-right: 0;

  }





}
</style>
