<template>
  <div>
    <div class="flex flex-row">
      <CanvasJSChart :options="interaction" />
      <CanvasJSChart :options="entertainment" />
      <CanvasJSChart :options="education" />
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column
        prop="interactionScore"
        label="Interaction"
        width="180"
      />
      <el-table-column
        prop="entertainmentScore"
        label="Entertainment"
        width="180"
      />
      <el-table-column prop="educationScore" label="Education" />
      <el-table-column prop="overallScore" label="Overall" />
    </el-table>
  </div>
</template>

<script lang="ts" setup>
const interaction = {
  theme: "light2",
  animationEnabled: false,
  title: {
    text: "Interaction",
  },
  data: [
    {
      type: "pie",
      indexLabel: "{label} (#percent%)",
      yValueFormatString: "#,##0",
      toolTipContent:
        "<span style='\"'color: {color};'\"'>{label}</span> {y}(#percent%)",
      dataPoints: [
        { label: "satisfied", y: 130631 },
        { label: "dissatisfied", y: 28874 },
      ],
    },
  ],
};
const entertainment = {
  theme: "light2",
  animationEnabled: false,
  title: {
    text: "Entertainment",
  },
  data: [
    {
      type: "pie",
      indexLabel: "{label} (#percent%)",
      yValueFormatString: "#,##0",
      toolTipContent:
        "<span style='\"'color: {color};'\"'>{label}</span> {y}(#percent%)",
      dataPoints: [
        { label: "satisfied", y: 200 },
        { label: "dissatisfied", y: 2 },
      ],
    },
  ],
};
const education = {
  theme: "light2",
  animationEnabled: false,
  title: {
    text: "Education",
  },
  data: [
    {
      type: "pie",
      indexLabel: "{label} (#percent%)",
      yValueFormatString: "#,##0",
      toolTipContent:
        "<span style='\"'color: {color};'\"'>{label}</span> {y}(#percent%)",
      dataPoints: [
        { label: "satisfied", y: 400 },
        { label: "dissatisfied", y: 130 },
      ],
    },
  ],
};
const tableData = [
  {
    interactionScore: 3,
    entertainmentScore: 5,
    educationScore: 1,
    overallScore: 5,
  },
  {
    interactionScore: 4,
    entertainmentScore: 2,
    educationScore: 5,
    overallScore: 5,
  },
  {
    interactionScore: 3,
    entertainmentScore: 1,
    educationScore: 2,
    overallScore: 3,
  },
  {
    interactionScore: 5,
    entertainmentScore: 1,
    educationScore: 3,
    overallScore: 4,
  },
  {
    interactionScore: 5,
    entertainmentScore: 5,
    educationScore: 5,
    overallScore: 5,
  },
];
</script>
