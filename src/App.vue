<template>
  <div class="nav">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
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
            v-for="route in this.$router.options.routes"
            :key="route.key"
            :index="route.path"
          >
            <i class="el-icon-menu"></i>
            <template #title>{{ route.name }}</template>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="nav-main">
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  setup() {}
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
}

.nav-main {
  margin-left: 200px;
}
</style>
