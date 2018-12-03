<template>
    <div class="single-project-page">
        <section class="projects">
                <h1> {{loadedProject.title}} </h1>
                <p> {{loadedProject.content1}} </p>
                <h2>Made with</h2>
                <p> {{loadedProject.content2}} </p>
                <h2>Making of</h2>
                <p> {{loadedProject.content3}} </p>
                <p v-if="loadedProject.github">Here you can find the source code for the project <a v-bind:href="loadedProject.github">GitHub</a>.</p>
                <p v-if="loadedProject.link">The project can be found from <a v-bind:href="loadedProject.link">here</a>.</p>

                <img v-bind:src="loadedProject.thumbnail"  alt="screenshot_project">
                <img v-if="loadedProject.image" v-bind:src="loadedProject.image"  alt="screenshot_project">


        </section>
    </div>
</template>

<script>
export default {
  asyncData(context) {
    if (context.payload) {
      return {
        loadedProject: context.payload.projectData
      }
    }
    return context.app.$axios.$get('/projects/' + context.params.id + '.json')
      .then(data => {
        return {
          loadedProject: data
        }
      })
      .catch(e => context.error(e))
  },
};
</script>


<style scoped>
.single-project-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
  background-color: #0A0A0A;
}

.projects {
  width: 100%;
  color: gray;
  text-align: justify;
}

h1,h2{
  text-align: center;
}

img {
  margin-top: 5%;
  width: 100%;
  border: 2px solid gray;
}
@media (min-width: 768px) {
  .projects {
    width: 600px;
    margin: auto;
  }
}
</style>
