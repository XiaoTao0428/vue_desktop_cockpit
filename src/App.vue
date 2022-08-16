<template>
  <div id="app">
    <AppTopBar></AppTopBar>
    <AppTopMenu></AppTopMenu>
    <div class="app-main">
      <router-view/>
    </div>
  </div>
</template>

<script>
import AppTopBar from "@/components/AppTopBar/AppTopBar";
import AppTopMenu from "@/components/AppTopMenu/AppTopMenu";
export default {
  name: 'app',
  components: {AppTopMenu, AppTopBar},
  data() {
    return {
      maxed: false,
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  .app-main {
    width: 100%;
    flex: 1;
  }
}
</style>
