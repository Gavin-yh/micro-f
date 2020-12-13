<template>
  <div class="nav">
    <el-container>
      <el-aside class="nav-aside">
        <el-menu
          router
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item
            v-for="menu in menus"
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
  </div>
</template>

<script>
export default {
  setup() {
    const menus = [
      {
        key: "Home",
        title: "主页",
        path: "/home"
      },
      {
        key: "VueMicroApp",
        title: "Vue 主页",
        path: "/vue"
      }
    ];

    return {
      menus
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

.nav-main {
  margin-left: 200px;
}
</style>
