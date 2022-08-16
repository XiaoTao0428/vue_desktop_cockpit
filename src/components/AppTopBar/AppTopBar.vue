<template>
  <div class="AppTopBar__warp">
    <div class="logo">
      <img src="../../assets/logo.png" alt="">
      <span>这里写软件名称</span>
    </div>
    <div class="app-top-bar-actions">
      <div class="icon-box" @click="windowMin">
        <img class="icon" src="../../assets/image/window-min.png">
      </div>
      <div class="icon-box" v-if="!maxed" @click="windowMax">
        <img class="icon" src="../../assets/image/window-max.png">
      </div>
      <div class="icon-box" v-if="maxed" @click="windowUnMax">
        <img class="icon" src="../../assets/image/window-unmax.png">
      </div>
      <div class="icon-box" @click="windowClose">
        <img class="icon" src="../../assets/image/window-close.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppTopBar",
  components: {
  },
  data() {
    return {
      maxed: false,
    }
  },
  mounted() {
    window.ipcRenderer.receive('main-window-max', (event) => {
      this.maxed = true
    });
    window.ipcRenderer.receive('main-window-unmax', (event) => {
      this.maxed = false
    })
  },
  methods: {
    windowMin() {
      window.ipcRenderer.send('window-min');
    },
    windowMax() {
      window.ipcRenderer.send('window-max');
    },
    windowUnMax() {
      window.ipcRenderer.send('window-max');
    },
    windowClose() {
      window.ipcRenderer.send('window-close');
    },
  }
}
</script>

<style lang="scss" scoped>
.AppTopBar__warp {
  width: 100%;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  -webkit-app-region: drag;  // 允许拖拽
  -webkit-user-select: none;  // 不允许选中
  .logo {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    img {
      width: 20px;
      height: 20px;
      margin: 0 4px;
    }
    span {
      color: #390000;
      font-size: 12px;
    }
  }
  .app-top-bar-actions {
    height: 100%;
    -webkit-app-region: no-drag;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .icon-box {
      width: 40px;
      height: 100%;
      text-align: center;
      .icon {
        max-height: 60%;
      }
      &:nth-last-child(n + 2):hover {
        background-color: #d3d3d3;
      }
      &:last-child:hover {
        background-color: #d71526;
      }
    }
  }
}
</style>
