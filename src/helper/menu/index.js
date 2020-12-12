//TODO 结合TS interface
class Menu {
  constructor(params) {
    //TODO
    this.menus = params;
  }

  addMenu(menu) {
    const { menus } = this;

    this.menus = {
      ...menus,
      menu
    };
  }

  remoMenu() {
    //TODO
  }
}

export default (params) => {
  return new Menu(params);
};
