<script>
import BigTable from "./components/BigTable.vue";
import BigTablePaga from "./components/BigTablePaga.vue";
import EleTable from "./components/EleTable.vue";
import VueVritualScroll from "./components/VueVirtualnew.vue";
import VituralTable from "./test/VituralTable.vue";
import data from "./assets/bigData.json";
import MixEleVv from "./test/MixEleVv.vue";
const { data: list } = data;
export default {
  components: {
    BigTable,
    EleTable,
    BigTablePaga,
    VueVritualScroll,
    VituralTable,
    MixEleVv,
  },
  data: function () {
    return {
      change: "ve",
      count: 0,
      tableData: [...list, ...list, ...list],
      options: [
        {
          value: "ve",
          label: "vue-easy-table",
        },
        {
          value: "ele",
          label: "element-ui table",
        },
        {
          value: "vue-virtual-scroll",
          label: "vue-virtual-scroll 下自己做的table",
        },
      ],
    };
  },
  methods: {
    changeSelect(val) {
      this.change = val;
    },
  },
};
</script>

<template>
  <div id="app">
    <header>
      <img
        alt="Vue logo"
        class="logo"
        src="./assets/logo.svg"
        width="125"
        height="125"
      />

      <div class="wrapper">
        <el-button type="primary" @click="count++"> 点我 </el-button>
        {{ count }}
      </div>
    </header>

    <main>
      <h1>
        {{
          change == "ve"
            ? "这个是vue-easy-table组件加上虚拟滑动"
            : change == "ele"
            ? "这个是Element组件"
            : "这个是vue-virtual-scroll组件"
        }}
      </h1>
      <el-select v-model="change" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <div v-if="change == 've'">
        <BigTable></BigTable>
      </div>
      <div v-else-if="change == 'vue-virtual-scroll'">
        <VueVritualScroll :item-height="40" :items="tableData">
          <template #operations>
            <el-button type="text">操作</el-button>
          </template>
        </VueVritualScroll>
      </div>
      <div v-else>
        <EleTable></EleTable>
      </div>
      <!-- <BigTablePaga></BigTablePaga> -->
      <!-- <VituralTable></VituralTable> -->
      <!-- <MixEleVv></MixEleVv> -->
    </main>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
