<template>
  <div class="rounded-md my-2 px-3 py-1" :class="props.tag">
    {{ title }}
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: String;
  tag: String;
}>();
</script>
