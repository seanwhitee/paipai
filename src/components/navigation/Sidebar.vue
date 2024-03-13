<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import BarItem from "@/components/navigation/BarItem.vue";
import ProfileIcon from "@/assets/icons/user-profile.svg";
import ProjectIcon from "@/assets/icons/project.svg";
const items = ref([
  { name: "Profile", icon: ProfileIcon, path: "/" },
  { name: "Project", icon: ProjectIcon, path: "/projects" },
]);

const toggler = ref(true);
const router = useRouter();

const handleClick = (item) => {
  router.push(item.path);
};
// function to handle the background color of the sidebar items
const handleBarItemBackgroundColor = (item) => {
  if (router.currentRoute.value.path === item.path) {
    return "bg-blue-500/50";
  } else {
    return "bg-zinc-800";
  }
};
</script>
<template>
  <img
    src="@/assets/icons/bars-3.svg"
    alt="bars"
    class="w-6 cursor-pointer fixed top-4 left-4 z-10"
    @click="toggler = !toggler"
  />
  <div class="fixed z-10 top-3.5 left-12 font-light text-xl text-gray-300 ">
    Pai
  </div>
  <!-- Sidebar Container div-->
  <transition name="slide-fade">
  <div v-if="toggler" class="h-full w-56 px-2 bg-zinc-800 fixed z-0">
    <!-- Sidebar Toggler -->
    
    <ul
      class="w-full h-full flex flex-col items-center justify-start pb-10 py-36"
    >
      <button
        v-for="item in items"
        :key="item.name"
        class="mb-2 w-full hover:bg-gray-500 transition duration-300 ease-in-out rounded-3xl focus:outline-none"
        :class="handleBarItemBackgroundColor(item)"
        @click="handleClick(item)"
      >
        <BarItem :name="item.name" :icon="item.icon" />
      </button>
    </ul>
  </div>
</transition>
</template>

<style scoped>
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all .3s ease;
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
