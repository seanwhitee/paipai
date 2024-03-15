<script setup>
import { useRouter } from "vue-router";
import Tag from "@/components/projects/Tags.vue";

defineProps({ repoTitle: String, repoDescription: String, repoLink: String, programmingLanguage: String});

const router = useRouter();
const handleClicked = (link) => {
  // console.log(link)
  window.location.href = link;
  // console.log(repo.value);
};
</script>
<template>
  <div
    class="bg-black border-l-2 border-b-2 border-zinc-800 w-full hover:border-white hover:border-l-4 hover:border-b-4 transition duration-500 ease-in-out cursor-pointer shadow-lg flex flex-col items-start justify-start rounded-lg py-3 px-4 mb-4 text-white"
    @click="handleClicked(repoLink)">
    <span class="text-lg font-bold mb-1">{{ repoTitle }}</span>

    <!--language tag-->
    <div class="w-full overflow-x-scroll px-1 mb-4 flex items-center justify-start">
      <Tag :tagName="programmingLanguage"/>
      
    </div>
    <span class="text-gray-200 text-sm">{{ repoDescription }}</span>
  </div>
</template>