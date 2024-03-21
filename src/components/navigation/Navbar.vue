<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import ProfileIcon from "@/assets/icons/user-profile.svg";
import ProjectIcon from "@/assets/icons/project.svg";
const items = ref([
  { name: "Profile", icon: ProfileIcon, path: "/" },
  { name: "Project", icon: ProjectIcon, path: "/projects" },
]);
const router = useRouter();
const handleClick = (item) => {
  router.push(item.path);
};
// function to handle the background color of the sidebar items
const handleBarItemBackgroundColor = (item) => {
  if (router.currentRoute.value.path === item.path) {
    return "text-white";
  } else {
		return "text-white/50";
	}
};
</script>
<template>
  <nav
    class="hidden md:block lg:block fixed top-0 z-0 bg-black w-full h-14 border-b-2 border-gray-500/50"
  >
    <div class="flex items-center justify-end pe-20 h-full w-full">
      <div
        class="me-4 cursor-pointer hover:text-white duration-300 ease-in-out"
        v-for="item in items"
        :key="item.name"
				@click="handleClick(item)"
				:class="handleBarItemBackgroundColor(item)"
      >
        {{ item.name }}
      </div>
    </div>
  </nav>
</template>
