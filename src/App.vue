<script>
import BigTable from "./components/BigTable.vue";
import EleTable from "./components/EleTable.vue";
export default {
  components: {
    BigTable,
    EleTable,
  },
  data: function () {
    return {
      trigger: true,
    };
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

      <div class="wrapper"></div>
    </header>

    <main>
      <h1>
        {{
          trigger ? "这个是vue-easy-table组件加上虚拟滑动" : "这个是Element组件"
        }}
      </h1>
      <el-button @click="trigger = !trigger">
        {{ trigger ? "去试普通组件" : "去试Element组件" }}
      </el-button>
      <div v-if="trigger">
        <BigTable></BigTable>
      </div>
      <div v-else>
        <EleTable></EleTable>
      </div>
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
