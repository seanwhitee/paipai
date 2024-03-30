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

const toggler = ref(false);
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
  <!-- Sidebar Toggler -->
  <img
    src="@/assets/icons/bars-3.svg"
    alt="bars"
    class="block md:hidden lg:hidden w-6 cursor-pointer fixed top-4 left-5 z-20 animate-pulse"
    @click="toggler = !toggler"
  />
  <div
    @click="handleClick({ path: '/' })"
    class="cursor-pointer fixed z-20 top-3.5 left-14 md:left-5 lg:left-5 font-light text-xl text-gray-300"
  >
    Pai
  </div>

  <transition name="slide-fade">
    <div
      v-if="toggler"
      class="top-0 left-0 flex flex-col items-center justify-center border-r border-gray-500/50 h-full w-56 px-2 bg-black fixed z-10 
      overflow-y-scroll md:hidden lg:hidden"
    >
      <div
        class="w-56 h-14 border-b border-gray-500/50 fixed top-0 left-0"
      ></div>
      <div class="h-4/5 w-full pt-10 pb-2">
        <!--barItem container-->
        <ul
          class="w-full h-full flex flex-col items-center justify-start pb-2 overflow-y-scroll mb-6"
        >
          <button
            v-for="item in items"
            :key="item.name"
            class="mb-2 w-full hover:bg-gray-500 transition duration-300 ease-in-out rounded-lg focus:outline-none"
            :class="handleBarItemBackgroundColor(item)"
            @click="handleClick(item)"
          >
            <BarItem :name="item.name" :icon="item.icon" />
          </button>
        </ul>
        <!--barItem container end-->
        <div
          class="flex items-center justify-center px-1 w-56 h-14 border-t border-t-gray-500/50 fixed
          bottom-0 left-0"
        >
          <a
            href="mailto:blackseanx@gmail.com"
            class="cursor-pointer bg-white flex items-center justify-center py-2 rounded-xl text-black font-light
            w-full hover:bg-gray-500/50 hover:text-white transition duration-300 ease-in-out focus:outline-none"
            >Contact me</a
          >
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
