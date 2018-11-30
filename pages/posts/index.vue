<template>
    <div class="posts-page">
        <PostList :posts="loadedPosts" />
    </div>
</template>

<script>
export default {
  middleware: 'log',
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
};
</script>


<style scoped>
.posts-page {
  background-color: #0A0A0A;
  min-height: 100vh;
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
}
</style>
