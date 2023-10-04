<template>
  <NuxtLayout>
    <div>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
useHead({
  titleTemplate: (pageTitle) => {
    return pageTitle
      ? `${pageTitle} - James Muriithi`
      : "James Muriithi";
  },
});
</script>