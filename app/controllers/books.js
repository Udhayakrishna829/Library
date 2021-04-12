import Controller from "@ember/controller";
import { A } from "@ember/array";

export default Controller.extend({
  show_button: 0,
  a: A([]),
  actions: {
    check(title) {
      for (let data of this.a) {
        if (title === data.title) {
          return true;
        }
      }
      return false;
    },
    increament(params) {
      if (params === 0) {
        this.set("show_button", 0);
      } else {
        this.set("show_button", this.show_button + params);
      }
    },
    add() {
      for (let data of this.a) {
        this.store.createRecord("select", { ...data });
      }
      this.set("a", A([]));
    },
    doit(params, data) {
      this.a.pushObject(data);
      this.store
        .findRecord("book", params, { backgroundReload: false })
        .then(function (post) {
          let temp = post.get("noofbooks");
          post.set("noofbooks", temp - 1);
        });
    },
    removeit(params, title) {
      this.a = this.a.filter((item) => item.title !== title);
      this.store
        .findRecord("book", params, { backgroundReload: false })
        .then(function (post) {
          let temp = post.get("noofbooks");
          post.set("noofbooks", temp + 1);
        });
    },
  },
});
