<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal py-6">
    <div class="flex items-center flex-no-shrink text-white mr-6">
      <nuxt-link to="/" class="logo">
        <span> &lt;</span>
        <span class="logo-name"> James Muriithi </span>
        <span>/&gt;</span>
      </nuxt-link>
    </div>
    <div class="block md:hidden">
      <button
        class="px-3 py-2 transition-all duration-300 ease-in-out rounded hover:bg-[#172a45]"
        title="Menu"
      >
        <IconIconamoon:menu-burger-horizontal />
      </button>
    </div>
    <div
      :class="open ? 'block' : 'hidden'"
      class="w-full flex-grow md:flex md:items-center md:w-auto"
    >
      <div class="ml-auto flex items-center">
        <nuxt-link
          v-for="item in menuItems"
          :key="item.name"
          :to="item.link"
          class="nav-item"
        >
          {{ item.name }}
        </nuxt-link>
        <ThemeToggle
          :model-value="darkMode"
          @update:model-value="setDarkMode"
        />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const open: boolean = false;
interface MenuItem {
  name: string;
  link: string;
}
const menuItems: MenuItem[] = [
  {
    name: "Skills",
    link: "#responsive-header",
  },
  //   {
  //     name: "Experiences",
  //     link: "#responsive-header",
  //   },
  //   {
  //     name: "Services",
  //     link: "#responsive-header",
  //   },
  {
    name: "Projects",
    link: "#responsive-header",
  },
  {
    name: "Achievements",
    link: "#responsive-header",
  },
  {
    name: "Contact",
    link: "#responsive-header",
  },
];

// theme
type Theme = "light" | "dark" | undefined;

const LOCAL_STORAGE_THEME_KEY = "theme";

const theme = useLocalStorage<Theme>(LOCAL_STORAGE_THEME_KEY, undefined);

const darkMode = ref<boolean>(theme.value === "dark");

const setDarkMode = (value: boolean) => {
  darkMode.value = value;
  theme.value = value ? "dark" : "light";
  if(process.client) {
    document.documentElement.classList.toggle("dark", value);
  }
};

onMounted(() => {
  if (theme.value === undefined) {
    theme.value = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  setDarkMode(theme.value === "dark");
});
</script>

<style lang="scss" scoped>
.logo {
  span:first-child,
  span:last-child {
    @apply dark:text-gray-500;
  }

  span.logo-name {
    @apply dark:text-gray-100 px-1 text-2xl lg:text-3xl font-bold text-primary;
    font-family: "Agustina Regular";
  }
}
.nav-item {
  @apply py-3.5 px-5 text-xl no-underline block sm:inline-block transition-all duration-300 ease-in-out hover:bg-[#172a45];
}
</style>