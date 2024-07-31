<template>
  <div class="flex flex-col">
    <div class="bg-indigo-400 h-[60px] px-8 flex items-center">
      <NuxtLink to="/" class="font-bold text-white" @click=""
        >MRMuseum Dashboard</NuxtLink
      >
    </div>

    <div class="flex flex-row">
      <el-menu
        default-active="2"
        class="h-full w-[200px]"
        :router="true"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="user">
          <el-icon><ElIconUser /></el-icon>
          <span>使用者列表</span>
        </el-menu-item>
        <el-menu-item index="questionnaire">
          <el-icon><ElIconDocument /></el-icon>
          <span>問卷資料收集</span>
        </el-menu-item>
        <el-menu-item index="calendar">
          <el-icon><ElIconCalendar /></el-icon>
          <span>Calendar</span>
        </el-menu-item>
      </el-menu>
      <NuxtPage class="flex-grow p-6" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
