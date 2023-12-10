<template>
  <el-table :data="tableData" style="width: 100%" :max-height="500">
    <el-table-column prop="id" label="id" width="180"> </el-table-column>
    <el-table-column prop="pid" label="pid" width="180"> </el-table-column>
    <el-table-column prop="name" label="name"> </el-table-column>
  </el-table>
</template>

<script>
import data from "../assets/bigData.json";
const { data: list } = data;
export default {
  data() {
    return {
      tableData: [...list, ...list, ...list],
    };
  },
};
</script>
