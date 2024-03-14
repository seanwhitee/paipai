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
      "Content-Type": "application/json",
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
    class=" pt-24 pb-14 h-full overflow-scroll w-4/6 m-auto flex flex-col items-center justify-start"
  >
    <ProjectCard v-for="repo in repos" :key="repo.id" :repoTitle="repo.name" :repoDescription="repo.description" :repoLink="repo.html_url" />
  </div>
</template>
