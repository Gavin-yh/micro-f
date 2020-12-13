<template>
  <div class="home">
    <HelloWorld />
    <el-button @click="click">ddd</el-button>
    <div>{{ count }}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { ref } from "vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  setup() {
    const count = ref(0);

    const click = () => {
      count.value++;
    };
    return {
      count,
      click
    };
  }
};
</script>
