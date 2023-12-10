<template>
  <div>
    <el-row type="flex" class="row-bg" justify="space-around">
      <el-col :span="6"><div class="grid-content bg-purple">id</div></el-col>
      <el-col :span="6"
        ><div class="grid-content bg-purple-light">pid</div></el-col
      >
      <el-col :span="6"><div class="grid-content bg-purple">name</div></el-col>
    </el-row>
    <DynamicScroller
      style="height: 500px"
      :items="items"
      :min-item-size="40"
      class="scroller"
    >
      <template v-slot="{ item, index, active }">
        <DynamicScrollerItem
          :item="item"
          :active="active"
          :size-dependencies="[item.name]"
          :data-index="index"
        >
          <el-row
            :style="{
              backgroundColor: index % 2 ? '#fff' : '#fafafa',
              borderTop: '1px solid #ebeef5',
            }"
            type="flex"
            class="text"
            justify="space-around"
          >
            <el-col :span="6"
              ><div class="grid-content bg-purple">{{ item.id }}</div></el-col
            >
            <el-col :span="6"
              ><div class="grid-content bg-purple-light">
                {{ item.pid }}
              </div></el-col
            >
            <el-col :span="6"
              ><div class="grid-content bg-purple">
                {{ item.name }}
              </div></el-col
            >
          </el-row>
        </DynamicScrollerItem>
      </template>
    </DynamicScroller>
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
  },
};
</script>

<style>
.scroller {
  height: 100%;
}

.text:hover {
  background-color: #f5f7fa !important;
  cursor: pointer;
}
</style>
