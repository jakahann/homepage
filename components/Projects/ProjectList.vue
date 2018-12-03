<template>
     <section class="project-list">
            <ProjectPreview
            v-for="project in projects"
            :key="project.id"
             :id="project.id"
            :thumbnail="project.thumbnail"
            :title="project.title"
            :previewText="project.previewText" />
        </section>
</template>

<script>
import ProjectPreview from '@/components/Projects/ProjectPreview'

export default {
  components: {
    ProjectPreview
  },
  props: {
     projects: {
       type: Array,
       required: true
     }
  }
}
</script>


<style scoped>

.project-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>

