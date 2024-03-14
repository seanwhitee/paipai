<script setup>
import { useRouter } from "vue-router";

defineProps({ repoTitle: String, repoDescription: String, repoLink: String});

const router = useRouter();
const handleClicked = (link) => {
	// console.log(link)
	window.location.href = link;
	// console.log(repo.value);
};
</script>
<template>
  <div
    class="bg-black border-l-2 border-b-2 border-zinc-800 w-full hover:bg-gray-500 transition duration-500 ease-in-out cursor-pointer shadow-lg flex flex-col items-start justify-start rounded-lg py-3 px-4 mb-4 text-white"
    @click="handleClicked(repoLink)"
  >
    <span class="text-lg font-bold mb-3">{{ repoTitle }}</span>
    <span class="text-gray-200 text-sm">{{ repoDescription }}</span>
  </div>
</template>