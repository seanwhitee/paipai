<script setup>
import Sidebar from "@/components/navigation/Sidebar.vue";
import GithubIcon from "@/assets/icons/github.png";
import LinkedInIcon from "@/assets/icons/linkedin.png";
import ProfileImage from "@/assets/image/profile-photo.png";
import Navbar from "@/components/navigation/Navbar.vue";
import router from "@/router";
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
  },
];
</script>
<template>
  <Navbar />
  <Sidebar />

  <!-- profile container div-->
  <div class="flex flex-col items-center justify-center m-x-auto mt-40">
    <div class="flex items-start text-white mb-8">
      <img
        v-motion
        :initial="{
          y: -1000,
        }"
        :enter="{
          y: 0,
          transition: {
            delay: 500,
          },
        }"
        :src="ProfileImage"
        alt="Profile Image"
        class="-z-10 w-20 h-20 md:w-28 md:h-28 lg:w-28 lg:h-28 rounded-full shadow-2xl border-2 border-white me-10"
      />

      <div
        class="flex justify-start flex-col text-3xl md:text-4xl lg:text-6xl font-light"
      >
        <span>Hsiang-Che </span>
        <span class="text-blue-500 mb-4">Pai</span>
        <!-- small title -->
        <div class="w-full flex justify-start mb-5">
          <span class="text-white text-sm font-light">Developer.</span>
        </div>
        <!-- Resource Link -->
        <div class="flex justify-start w-full items-center">
          <a
            v-for="link in resourceLink"
            :key="link.name"
            :href="link.link"
            target="_blank"
            class="animate-pulse flex items-center justify-center text-black font-bold text-2xl me-4 py-2 px-2 bg-white hover:bg-gray-500 transition duration-300 ease-in-out rounded-full"
          >
            <!--icon image-->

            <img :src="link.icon" :alt="link.name" class="w-5" />
          </a>
        </div>
      </div>
    </div>

    
  </div>
  <div class="mt-10 text-black w-full text-sm flex justify-center items-center">
      <button
        class="flex bg-white items-center justify-center hover:bg-white/80 rounded-xl py-2 px-3 transition duration-300 ease-in-out"
        @click="() => router.push('/projects')"
      >
        <span class="me-2">SEE MY PROJECTS HERE</span>
        <img
          src="@/assets/icons/arrow-long-right.svg"
          alt="arrow-right"
          class="w-5"
        />
      </button>
    </div>
</template>
