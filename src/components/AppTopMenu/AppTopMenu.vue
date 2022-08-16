<template>
  <div class="AppTopMenu__warp">
    <div class="menu">
      <div :class="autoShowSubMenu?'menu-item auto-show-sub-menu':'menu-item'" @click="handleClickMenuItem('1')">
        <span class="menu-item-label">菜单(F)</span>
        <div class="sub-menu">
          <div class="sub-menu-item" @click="handleClickSubMenuItem('1-1')">
            <span class="sub-menu-item-label">打开打开打开打开打开打开</span>
            <span class="shortcut">Ctrl + O</span>
          </div>
          <div class="sub-menu-item" @click="handleClickSubMenuItem('1-2')">
            <span class="sub-menu-item-label">退出</span>
            <span class="shortcut">Ctrl + O</span>
          </div>
        </div>
      </div>
      <div :class="autoShowSubMenu?'menu-item auto-show-sub-menu':'menu-item'" @click="handleClickMenuItem('2')">
        <span class="menu-item-label">编辑(E)</span>
        <div class="sub-menu">
          <div class="sub-menu-item" @click="handleClickSubMenuItem('2-1')">
            <span class="sub-menu-item-label">打开</span>
            <span class="shortcut">Ctrl + O</span>
          </div>
          <div class="sub-menu-item" @click="handleClickSubMenuItem('2-2')">
            <span class="sub-menu-item-label">退出</span>
            <span class="shortcut">Ctrl + O</span>
          </div>
        </div>
      </div>
      <div :class="autoShowSubMenu?'menu-item auto-show-sub-menu':'menu-item'" @click="handleClickMenuItem('3')">
        <span class="menu-item-label">查看(V)</span>
        <div class="sub-menu">
          <div class="sub-menu-item" @click="handleClickSubMenuItem('3-1')">
            <span class="sub-menu-item-label">打开</span>
            <span class="shortcut">Ctrl + O</span>
          </div>
          <div class="sub-menu-item" @click="handleClickSubMenuItem('3-2')">
            <span class="sub-menu-item-label">退出</span>
            <span class="shortcut">Ctrl + O</span>
          </div>
        </div>
      </div>
      <div :class="autoShowSubMenu?'menu-item auto-show-sub-menu':'menu-item'" @click="handleClickMenuItem('4')">
        <span class="menu-item-label">帮助(H)</span>
        <div class="sub-menu">
          <div class="sub-menu-item" @click="handleClickSubMenuItem('4-1')">
            <span class="sub-menu-item-label">打开</span>
            <span class="shortcut">Ctrl + O</span>
          </div>
          <div class="sub-menu-item" @click="handleClickSubMenuItem('4-2')">
            <span class="sub-menu-item-label">退出</span>
            <span class="shortcut">Ctrl + O</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppTopMenu",
  data() {
    return {
      autoShowSubMenu: false,
      subMenuKey: ''
    }
  },
  methods: {
    /*
    * 一级菜单点击时触发
    * */
    handleClickMenuItem(key) {
      this.autoShowSubMenu = !this.autoShowSubMenu
      this.subMenuKey = key
    },
    /*
    * 二级菜单点击时触发
    * */
    handleClickSubMenuItem(key) {
      console.log(key)
    }
  }
}
</script>

<style lang="scss" scoped>
.AppTopMenu__warp {
  width: 100%;
  height: 35px;
  border-top: 1px solid #e3e3e3;
  .menu {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 4px 4px;

    .menu-item {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 8px;
      cursor: default;
      position: relative;

      &:hover {
        background-color: #d3d3d3;
      }

      .menu-item-label {
        font-size: 12px;
        color: #000000;
        -webkit-user-select: none;  // 不允许选中
      }

      .sub-menu {
        visibility: hidden;
        background-color: #f2f2f2;
        position: absolute;
        left: 0;
        top: 26px;
        z-index: 99;
        display: flex;
        flex-direction: column;
        padding: 2px;
        border: 1px solid #cccccc;
        box-shadow: 1px 1px 2px #8e8e8e;

        .sub-menu-item {
          height: 22px;
          background-color: #f2f2f2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          &:hover {
            background-color: #91c9f7;
          }
          .sub-menu-item-label {
            width: 100px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-right: 40px;
            font-size: 12px;
            color: #000000;
            -webkit-user-select: none;  // 不允许选中
            padding-left: 4px;
          }
          .shortcut {
            flex: 1;
            white-space: nowrap;
            padding-right: 12px;
            font-size: 12px;
            color: #000000;
            -webkit-user-select: none;  // 不允许选中
          }
        }
      }
    }

    .auto-show-sub-menu {
      &:hover {
        .sub-menu {
          visibility: visible !important;
        }
      }
    }
  }
}
</style>
