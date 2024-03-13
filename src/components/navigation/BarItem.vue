<script setup>
defineProps({
  name: String,
  icon: String,
});
</script>
<template>
  <div class="flex items-center justify-start py-2 rounded-3xl">
    <img :src="icon" :alt="name" class="w-8 ms-2 me-4"/>
		<p class=" text-white text-lg font-light">{{ name }}</p>
  </div>
</template>
