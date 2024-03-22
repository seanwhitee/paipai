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
  <div class="flex flex-col items-center justify-center m-x-auto mt-40 pb-20">
    <div
        aria-hidden="true"
        class="pointer-events-none absolute top-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style="
            clip-path: polygon(
              74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 
              47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%
            );
            
          "
          class="relative right-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] translate-x-36 -translate-y-40 
          rotate-[30deg] bg-gradient-to-tr from-[#65c9ff] to-[#4e47b6] opacity-30 sm:right-[calc(50%-30rem)] 
          sm:w-[72.1875rem]"
        ></div>
      </div>
    <!-- profile container div-->
    <div class="flex items-start justify-start text-white mb-8 gap-10 w-3/5">
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
        <span>Sean </span>
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

    <div
      class="mt-10 mb-20 text-black w-3/5 text-sm flex justify-start items-center"
    >
      <button
        class="flex bg-white items-center justify-center hover:bg-white/80 rounded-xl py-2 px-4 transition 
        duration-300 ease-in-out"
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

    <div class="text-white flex items-start w-3/5 m-auto">
      <div class="me-10">About</div>
      <div class="flex flex-col gap-6 w-4/5">
        <p>Hello World!</p>
        <p>I'm Sean, an engineer with a design obsession.</p>
        <p>
          I have passion about design,and constantly on the hunt for innovative
          ways to fuse design thinking into the engineering process.
        </p>
        <p>
          This website showcases some of the things I've created. Explore my
          work and let's connect!
        </p>
      </div>
    </div>
  </div>
</template>
