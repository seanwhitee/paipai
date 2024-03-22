<script setup>
import { ref } from "vue";
import Sidebar from "@/components/navigation/Sidebar.vue";
import ProjectCard from "@/components/projects/ProjectCard.vue";
import Navbar from "@/components/navigation/Navbar.vue";

const repos = ref([]);
const fetchProjectsData = async () => {
  await fetch("https://api.github.com/users/seanwhitee/repos", {
    method: "GET",
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
      "User-Agent": "seanwhitee",
      "accept": "application/vnd.github.v3+json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      repos.value = data;
    });
};
fetchProjectsData();
</script>

<template>
  <Navbar />
  <Sidebar />
  <div
    aria-hidden="true"
    class="pointer-events-none fixed top-0 -z-10 transform-gpu overflow-hidden blur-3xl"
  >
  </div>
  <div
    class="pt-24 pb-14 h-full overflow-scroll w-4/6 m-auto flex flex-col items-center justify-start"
  >
    <ProjectCard
      v-for="repo in repos"
      :key="repo.id"
      :programmingLanguage="repo.language"
      :repoTitle="repo.name"
      :repoDescription="repo.description"
      :repoLink="repo.html_url"
    />
  </div>
</template>
