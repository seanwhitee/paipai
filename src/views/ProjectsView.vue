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
    aria-hidden="true"
    class="pointer-events-none fixed top-0 -z-10 transform-gpu overflow-hidden blur-3xl"
  >
    <div
      style="
        clip-path: polygon(
          74.1% 44.1%,
          100% 61.6%,
          97.5% 26.9%,
          85.5% 0.1%,
          80.7% 2%,
          72.5% 32.5%,
          60.2% 62.4%,
          52.4% 68.1%,
          47.5% 58.3%,
          45.2% 34.5%,
          27.5% 76.7%,
          0.1% 64.9%,
          17.9% 100%,
          27.6% 76.8%,
          76.1% 97.7%,
          74.1% 44.1%
        );
      "
      class="relative right-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] translate-x-36 -translate-y-40 
      rotate-[30deg] bg-gradient-to-tr from-[#65c9ff] to-[#4e47b6] opacity-30 sm:right-[calc(50%-30rem)] 
      sm:w-[72.1875rem]"
    ></div>
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
