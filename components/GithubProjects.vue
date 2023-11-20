<template>
  <section
    id="projects"
    class="my-20 lg:my-40 w-full"
    v-if="!loading && repos.length"
  >
    <div>
      <h2 class="text-4xl">Open Source Projects</h2>
      <div
        class="mt-10 grid sm:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-10"
        v-if="!loading"
      >
        <RepoCard v-for="repo in repos" :key="repo.node.id" :repo="repo" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const repos = ref([]);
const query = gql`
  query {
    user(login: "james-muriithi") {
      pinnedItems(first: 6, types: [REPOSITORY]) {
        totalCount
        edges {
          node {
            ... on Repository {
              name
              description
              forkCount
              stargazers {
                totalCount
              }
              url
              id
              diskUsage
              primaryLanguage {
                name
                color
              }
            }
          }
        }
      }
    }
  }
`;
const loading = ref(true);
const { data, error } = await useAsyncQuery(query);

if (!error.value) {
  repos.value = data.value?.user?.pinnedItems?.edges || [];
}
loading.value = false;
console.log(data.value);
</script>

