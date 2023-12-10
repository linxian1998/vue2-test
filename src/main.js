import Vue from "vue";
import App from "./App.vue";
import VueEasytable from "vue-easytable";
import "vue-easytable/libs/theme-default/index.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";
import VueVirtualScroller from "vue-virtual-scroller";
import InfiniteScrollTable from "infinite-scroll-table";
Vue.use(InfiniteScrollTable);
Vue.use(VueVirtualScroller);
Vue.use(ElementUI);
Vue.use(VueEasytable);
import "./assets/main.css";

new Vue({
  render: (h) => h(App),
}).$mount("#app");
