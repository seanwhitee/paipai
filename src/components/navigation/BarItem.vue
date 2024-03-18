<script setup>
defineProps({
  name: String,
  icon: String,
});
</script>
<template>
  <div class="flex items-center justify-start py-1.5 rounded-lg">
    <img :src="icon" :alt="name" class="w-8 ms-2 me-4"/>
		<p class=" text-white text-lg font-light">{{ name }}</p>
  </div>
</template>
