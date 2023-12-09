<template>
  <ve-table
    style="word-break: break-all"
    :columns="columns"
    :table-data="tableData"
    :max-height="500"
    :virtual-scroll-option="virtualScrollOption"
    row-key-field-name="id"
    fixed-header
  />
</template>

<script>
import data from "../assets/bigData.json";
const { data: list } = data;
console.log(list);
export default {
  data() {
    return {
      virtualScrollOption: { enable: true },
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
};
</script>
