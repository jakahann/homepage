<template>
<section class="projects">
    <h1>Projects</h1>
    <p>These are projects I have had the privilege to be part in making. Some are a group effort and some are my own productions. 
      Check them out for more information. </p> 
    <p>If you are interested to hear more about me and my projects. <br/> Head over to <nuxt-link to="/contact">Contact</nuxt-link> 
    page to learn how to get in touch with me.</p>
    <div class="posts-page">

        <PostList :posts="loadedPosts" />
    </div>
    </section>
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
.projects {
  background-color: #0A0A0A;
  color: gray;
  width: 100%;;
  text-align: center;
}
 h1 {
   padding-top: 10px;
   margin: 0;
}

p {
  padding-left:25%;
  padding-right: 25%;
  text-align: center;
}

.posts-page {
  border-top: 5px groove gray;
  background-color: #0A0A0A;
  min-height: 100vh;
  display: flex;
 
}

a:hover {
  color:white;
}
</style>
