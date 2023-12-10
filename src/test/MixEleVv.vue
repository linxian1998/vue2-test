<template>
  <InfiniteScrollTable
    ref="ref_infinite_table"
    :scrollData="scrollData"
    :loadConfig="loadConfig"
    @setTableData="setTableDataFn"
  >
    <el-table :data="tableData" style="width: 100%" height="350">
      <el-table-column prop="id" label="编号"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
    </el-table>
  </InfiniteScrollTable>
</template>
<script>
import data from "../assets/bigData.json";
const { data: list } = data;
export default {
  data() {
    return {
      loadConfig: {
        totalCount: 0,
      },
      scrollData: [],
      tableData: [...list, ...list, ...list],
    };
  },
  methods: {
    // async getMoreDataFn() {
    //     this.$refs.ref_infinite_table.loadStart(); // 加载前调用 loadStart
    //     await this.queryData(); // queryData 是你请求后端数据的方法
    //     this.loadConfig.totalCount = 99; // 注意设置后端共有多少数据，以便判断结束
    //     this.$refs.ref_infinite_table.loadEnd(); // 加载后调用 loadEnd
    // },
    setTableDataFn(arr) {
      this.tableData = arr;
    },
    // async queryData() {
    //     await new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve();
    //         }, 1000);
    //     });
    //     let len = this.scrollData.length;
    //     for (let i = 0; i < 10; i++) {
    //         this.scrollData.push({ id: len + i, name: "zyl" });
    //     }
    // },
  },
};
</script>
