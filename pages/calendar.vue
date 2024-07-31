<template>
  <div class="flex flex-row">
    <div class="min-w-max px-4">
      Upcoming Events
      <ul>
        <li><Event title="test" tag="bg-slate-100" /></li>
      </ul>
    </div>
    <el-calendar v-model="value">
      <template #date-cell="{ data }">
        <p>
          {{ data.day.split("-")[2] }}
          <!-- <Event title="test" tag="bg-slate-100" /> -->
        </p>
      </template>
    </el-calendar>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const value = ref(new Date());
</script>
