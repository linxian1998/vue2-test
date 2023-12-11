<template>
  <div style="width: 100%; background-color: rgb(250, 250, 250)">
    <el-row
      style="padding: 12px 0"
      type="flex"
      justify="center"
      ref="header"
      class="header"
    >
      <el-col :span="3" :offset="1" class="header-col"
        ><div class="grid-content bg-purple">序号</div></el-col
      >
      <el-col :span="15" :offset="1" class="header-col"
        ><div class="grid-content bg-purple-light">id</div></el-col
      >
      <el-col :span="3" :offset="1" class="header-col"
        ><div class="grid-content bg-purple">操作</div></el-col
      >
    </el-row>
    <RecycleScroller
      :style="{ height: `${heightFromProps}px` }"
      :items="items"
      :item-size="itemHeight"
      key-field="id"
      v-slot="{ item, index }"
      ref="scrollerRef"
    >
      <el-row
        :style="{
          backgroundColor: index % 2 == 0 ? '#fff' : '#fafafa',
          lineHeight: `${itemHeight}px`,
        }"
        type="flex"
        class="text"
        justify="center"
      >
        <el-col :span="3" :offset="1"
          ><div>{{ index }}</div></el-col
        >
        <el-col :span="15" :offset="1">
          <el-tooltip
            class="item"
            effect="dark"
            :content="item.id"
            placement="top"
            :hide-after="200"
            :open-delay="500"
          >
            <div class="txtEll">
              {{ item.id }}
            </div>
          </el-tooltip>
        </el-col>
        <el-col :span="3" :offset="1">
          <slot name="operations"></slot>
        </el-col>
      </el-row>
    </RecycleScroller>
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
    itemHeight: Number,
    heightFromProps: {
      default: 500,
      type: Number,
    },
  },

  mounted: function () {
    let ele = this.$refs["scrollerRef"].$el;
    // 如果进入的数组长度大于能展示的数量，则需要展示滑动块，设置overflow为scroll，为mounted使用
    let isShowScroll =
      this.items.length > Math.floor(this.heightFromProps / this.itemHeight);
    if (isShowScroll) {
      ele.style["overflow-y"] = "scroll";
    }
    // 获得scrollbar的长度
    var scrollbarWidth = ele.offsetWidth - ele.clientWidth;
    let eleHeader = this.$refs["header"].$el;
    eleHeader.style.marginRight = scrollbarWidth + "px";
  },
};
</script>

<style scoped>
.header {
  background-color: rgb(250, 250, 250);
}
.header-col {
  border-right: 2px solid #fff;
}
.txtEll {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.text {
  border-top: 1px solid #ebeef5;
}
.text:hover {
  background-color: #f5f7fa !important;
  cursor: pointer;
}
</style>
