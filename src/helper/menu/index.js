//TODO 结合TS interface
class Menu {
  constructor() {
    //TODO
    this.menuList = {
      main: {
        name: "主应用",
        child: [
          {
            key: "Home",
            title: "主应用首页",
            path: "/home"
          },
          {
            key: "About",
            title: "主应用关于页",
            path: "/about"
          }
        ]
      },
      "app-vue": {
        name: "app-vue",
        child: [
          {
            key: "VueHome",
            path: "/vue/home",
            title: "app-vue 首页"
          },
          {
            key: "VueAbout",
            path: "/vue/about",
            title: "app-vue 关于页"
          }
        ]
      }
    };
  }

  addMenu(menu) {
    const { menuList } = this;

    this.menuList = [...menuList, menu];
  }

  remoMenu() {
    //TODO
  }
}

export default (params) => {
  return new Menu(params);
};
