export class Menu {
    date: string;
    menuList: Array<object>;
    hide: boolean;
    _id: string;
  
    constructor(date: string, menuList: Array<object>, _id: string) {
      this.date = date;
      this.menuList = menuList;
      this._id = _id;
      this.hide = true;
    }
  
    toggle() {
      this.hide = !this.hide;
    }
  }