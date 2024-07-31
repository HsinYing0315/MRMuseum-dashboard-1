<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="age" label="Age" class="w-9" />
      <el-table-column prop="count" label="Count" />
      <el-table-column prop="type" label="Type" />
      <el-table-column prop="gender" label="Gender" />
      <el-table-column prop="interests" label="Interests" />
    </el-table>
  </div>
</template>

<script lang="ts" setup>
// import { useUserStore } from "../stores/user";

// const userStore = useUserStore();
// const tableData = userStore.getVisitors;
const tableData = [
  {
    age: 21,
    count: 5,
    type: "with friends",
    gender: "female",
    interests: ["history", "art"],
  },
  {
    age: 19,
    count: 1,
    type: "with friends",
    gender: "male",
    interests: ["sports"],
  },
  {
    age: 40,
    count: 4,
    type: "with family",
    gender: "female",
    interests: ["finance"],
  },
  {
    age: 24,
    count: 1,
    type: "with friends",
    gender: "female",
    interests: ["history", "art"],
  },
  {
    age: 24,
    count: 2,
    type: "with friends",
    gender: "male",
    interests: ["tech", "philosophy"],
  },
  {
    age: 22,
    count: 1,
    type: "with friends",
    gender: "female",
    interests: ["history", "art"],
  },
  {
    age: 21,
    count: 2,
    type: "with friends",
    gender: "female",
    interests: ["history", "art"],
  },
];
</script>
