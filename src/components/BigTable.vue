<template>
  <ve-table
    :columns="columns"
    :table-data="tableData"
    :max-height="500"
    :virtual-scroll-option="virtualScrollOption"
    row-key-field-name="id"
    ref="veTable"
  />
</template>

<script>
import data from "../assets/bigData.json";
const { data: list } = data;
export default {
  data() {
    return {
      virtualScrollOption: { enable: true, scrolling: this.scrolling },
      columns: [
        { field: "id", key: "a", title: "id", align: "center", width: "20%" },
        { field: "pid", key: "b", title: "pid", align: "left", width: "20% " },
        {
          field: "name",
          key: "c",
          title: "address",
          align: "right",
          width: "60%",
        },
      ],
      tableData: [...list, ...list, ...list],
    };
  },
  methods: {
    
  },
};
</script>
