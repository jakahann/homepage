<template>
    <div class="single-post-page">
        <section class="post">
                <h1> {{loadedPost.title}} </h1>
                <p> {{loadedPost.content1}} </p>
                <h2>Made with</h2>
                <p> {{loadedPost.content2}} </p>
                <h2>Making of</h2>
                <p> {{loadedPost.content3}} </p>
                <p v-if="loadedPost.github">Here you can find the source code for the project <a v-bind:href="loadedPost.github">GitHub</a>.</p>
                <p v-if="loadedPost.link">The project can be found from <a v-bind:href="loadedPost.link">here</a>.</p>

                <img v-bind:src="loadedPost.thumbnail"  alt="screenshot_project">
                <img v-if="loadedPost.image" v-bind:src="loadedPost.image"  alt="screenshot_project">


        </section>
    </div>
</template>

<script>
export default {
  asyncData(context) {
    if (context.payload) {
      return {
        loadedPost: context.payload.postData
      }
    }
    return context.app.$axios.$get('/projects/' + context.params.id + '.json')
      .then(data => {
        return {
          loadedPost: data
        }
      })
      .catch(e => context.error(e))
  },
  head: {
    title: 'A Blog Post'
  }
};
</script>


<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
  background-color: #0A0A0A;
}

.post {
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
  .post {
    width: 600px;
    margin: auto;
  }
}
</style>
