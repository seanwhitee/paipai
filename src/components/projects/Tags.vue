<script setup>
defineProps({
  tagName: String,
});
</script>
<template>
  <div
    class="flex justify-center items-center bg-blue-500/50 border-2 border-blue-500 text-white text-xs px-3 py-0.5 rounded-xl mr-2"
  >
    {{ tagName }}
  </div>
</template>
