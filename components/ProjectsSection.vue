<template>
  <section id="projects" class="my-20 lg:my-40 w-full">
    <div>
      <h2 class="text-4xl">Projects</h2>
      <div
        class="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-10"
      >
        <div
          v-for="project in projects"
          :key="project.title"
          class="project-card"
        >
          <div class="project-image">
            <img :src="project.image" :alt="project.title" />
          </div>
          <div class="project-content">
            <div>
              <h3>
                {{ project.title }}
              </h3>
              <p>
                {{ project.description }}
              </p>
            </div>
            <div class="mt-10 text-center">
              <a :href="project.link" target="_blank" class="btn btn-primary">
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const projects = [
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://picsum.photos/200/300",
    link: "https://picsum.photos/200/300",
  },
  {
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. fffff fffsdeed weafgewf 3wegweqg",
    image: "https://picsum.photos/200/300",
    link: "https://picsum.photos/200/300",
  },
  {
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://picsum.photos/200/300",
    link: "https://picsum.photos/200/300",
  },
  {
    title: "Project 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://picsum.photos/200/300",
    link: "https://picsum.photos/200/300",
  },
];
</script>

<style scoped lang="scss">
.project-card {
  background-color: #0a192f;
  box-shadow: rgb(23, 42, 69) 0px 20px 30px -10px;
  @apply rounded-lg pb-4 flex flex-col transition-all duration-300 ease-in-out;
  &:hover {
    box-shadow: rgb(143, 153, 163) 0px 10px 30px -15px;
  }
  .project-image {
    @apply h-64;
    img {
      @apply rounded-t-lg w-full object-cover h-full;
    }
  }
  .project-content {
    @apply px-3 py-5 flex flex-col flex-grow justify-between;
    h3 {
      @apply dark:text-gray-100 text-3xl font-semibold;
    }
    p {
      @apply dark:text-gray-300 my-4;
    }
    .btn {
      @apply mt-5 border-2 border-primary text-white py-3 px-5 rounded-lg transition-all duration-300 ease-in-out;
        &:hover {
            @apply bg-primary;
        }
    }
  }
}
</style>