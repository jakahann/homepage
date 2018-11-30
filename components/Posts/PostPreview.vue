<template>
    <nuxt-link :to="postLink" class="post-preview">
              <article>
                <div
                class="post-thumbnail"
                :style="{backgroundImage: 'url(' + thumbnail + ')'}"></div>
                <div class="post-content">
                  <h1>{{ title }}</h1>
                  <p>{{ previewText }}</p>
                </div>
              </article>
            </nuxt-link>
</template>

<script>
export default {
    name: 'PostPreview',
    props: {
        id: {
            type: String,
            required: true
        },
        isAdmin: {
          type: Boolean,
          required: true
        },
        title: {
            type: String,
            required: true
        },
        previewText: {
            type: String,
            required: true
        },
        thumbnail: {
            type: String,
            required: true
        }
    },
    computed: {
      postLink() {
        return this.isAdmin ? '/admin/' + this.id : '/posts/' + this.id
      }
    }
}
</script>


<style scoped>
.post-preview {
  border: 1px solid white;
  /* box-shadow: 0 2px 2px gray; */
  background-color: #222222;
  width: 90%;
}

a {
  text-decoration: none;
  color: gray;
}

@media (min-width: 850px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}

.post-thumbnail {
  width: 100%;
  min-height: 200px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding: 10px;
  text-align: center;
}

a:hover .post-content,
a:active .post-content {
  background-color: rgb(121, 113, 113);
  color: rgb(212, 204, 204);
}
</style>
