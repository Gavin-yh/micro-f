<template>
  <div class="nav">
    <el-container>
      <el-aside class="nav-aside">
        <div class="nav-aside__header">
          <span>切换系统</span>
          <i @click="transSystem" class="el-icon-sort transition-icon" />
        </div>
        <el-menu
          router
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item
            v-for="menu in menus.menu"
            :key="menu.key"
            :index="menu.path"
          >
            <i class="el-icon-menu"></i>
            <template #title>{{ menu.title }}</template>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="nav-main">
        <router-view v-show="$route.name" />

        <div v-show="!$route.name" id="frame" />
      </el-main>
    </el-container>

    <el-drawer
      title="应用列表"
      v-model="drawer"
      direction="ltr"
      :before-close="handleClose"
      destroy-on-close
    >
      <div
        v-for="menu in menuList"
        :key="menu"
        class="system-list"
        @click="switchSystem(menu)"
      >
        {{ menu.name }}
      </div>
    </el-drawer>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import getList from "@/helper/menu";

export default {
  setup() {
    const drawer = ref(false);

    let menus = reactive({
      menu: [
        {
          key: "Home",
          title: "主应用首页",
          path: "/home"
        },
        {
          key: "About",
          title: "关于页",
          path: "/about"
        }
      ]
    });

    const { menuList } = getList();

    const handleClose = () => {
      drawer.value = false;
    };

    const transSystem = () => {
      drawer.value = true;
    };

    const switchSystem = (system) => {
      menus.menu = system.child;
      drawer.value = false;
    };

    return {
      menuList,
      menus,
      drawer,
      handleClose,
      transSystem,
      switchSystem
    };
  }
};
</script>

<style scope>
.nav /deep/ .el-menu-item {
  min-width: 150px;
  box-shadow: 0px 0px 2px 1px #888888;
}

.nav-aside {
  width: 200px !important;
  background-color: #545c64;
  position: fixed;
  height: 100%;
  box-shadow: 0px 0px 3px 2px #888888;
}

.nav-aside /deep/ .el-menu {
  border: none;
  text-align: left;
}

.nav-aside__header {
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  padding-left: 20px;
  text-align: left;
}

.nav-aside__header .transition-icon {
  transform: rotate(90deg);
  margin-left: 16px;
  cursor: pointer;
}

.nav-main {
  margin-left: 200px;
}

.system-list {
  height: 40px;
  padding-left: 16px;
  line-height: 40px;
  cursor: pointer;
  color: #72767b;
}

.system-list:hover {
  color: #000;
}
</style>
