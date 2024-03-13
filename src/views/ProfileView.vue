<script setup>
import Sidebar from "@/components/navigation/Sidebar.vue";
import GithubIcon from "@/assets/icons/github.png";
import LinkedInIcon from "@/assets/icons/linkedin.png";
const resourceLink = [
  {
    name: "Github",
    link: "https://github.com/seanwhitee",
    icon: GithubIcon,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/hsiang-che-pai-17a73826a/",
    icon: LinkedInIcon,
  }
];
</script>
<template>
  <Sidebar />

  <!-- profile container div-->
  <div class="h-full w-3/6 flex flex-col items-start justify-center m-auto">
    <div class=" text-white">
      <h1
        class="flex justify-start flex-col text-3xl md:text-6xl lg:text-8xl font-light"
      >
        <span>Hsiang-Che </span>
        <span class="text-blue-500">Pai.</span>
      </h1>
    </div>
    <!-- small title -->
    <div class="w-full flex justify-start mb-16">
      <span class="text-white text-sm font-light">A Developer</span>
    </div>
    <!-- Resource Link -->
    <div class="flex justify-start w-full items-center">
      <a
        v-for="link in resourceLink"
        :key="link.name"
        :href="link.link"
        target="_blank"
        class="flex items-center justify-center text-black font-bold text-2xl me-4 py-1 px-2 bg-white hover:bg-gray-500 transition duration-300 ease-in-out rounded-lg"
      >
        <!--icon image-->

        <img :src="link.icon" :alt="link.name" class="w-5 me-2"/>
<span class="text-sm">
        {{ link.name }}
      </span>
      </a>
    </div>
  </div>
</template>
