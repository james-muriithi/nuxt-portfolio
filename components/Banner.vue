<template>
  <section id="banner" class="mt-8 lg:mt-20">
    <div class="grid grid-cols-12 gap-x-4">
      <div class="col-span-12 md:col-span-6">
        <h1 class="text-5xl xl:text-6xl font-extrabold greeting">
          Hi there, I'm James
        </h1>
        <div class="mt-10">
          <p class="text-xl md:text-2xl">
            Fullstack Developer — Frontend heavy with vue.js, Nuxt, Next, angular, react,
            node, PHP and python
          </p>
        </div>
        <div class="mt-8 social-icons flex gap-x-3 flex-wrap">
          <a
            href="
                https://github.com/james-muriithi/"
            target="_blank"
            class="bg-dark text-white"
          >
            <IconAkar-icons:github-fill />
          </a>

          <a
            href="
                https://www.linkedin.com/in/james-muriithi/"
            target="_blank"
            class="bg-[#0e76a8] text-white"
          >
            <IconAkar-icons:linkedinv2-fill />
          </a>
          <a
            href="mailto:muriithijames123@gmail.com"
            class="bg-[#ea4335] text-white"
          >
            <IconAkar-icons:envelope />
          </a>
        </div>
        <div class="mt-8">
          <div class="flex gap-4">
            <a href="https://drive.google.com/file/d/1veXD4IYkS-jZiqrQfKJZ51KHPOTHKEWX/view?usp=sharing" target="_blank" class="btn text-white"> SEE MY RESUME </a>
          </div>
        </div>
      </div>
      <div class="col-span-12 md:col-span-6 mt-14 md:mt-0">
        <img src="@/assets/images/manOnTable1.svg" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.greeting {
  line-height: 1.4;
}
p {
  line-height: 1.9;
  @apply text-gray-400;
}
.social-icons {
  a {
    @apply rounded-full h-10 w-10 text-lg flex justify-center items-center hover:bg-gray-500 transition-all duration-300 ease-in-out;
  }
}
.btn {
  @apply py-3 px-5 border dark:border-primary dark:bg-transparent rounded-lg text-base font-bold transition-all  duration-300 ease-in-out;
  @apply dark:hover:text-white dark:hover:bg-[#172a45] bg-primary border-primary hover:bg-white hover:text-black;
}
</style>