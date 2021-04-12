import Controller from "@ember/controller";
import { computed, observer } from "@ember/object";

export default Controller.extend({
  title: "",
  genre: "",
  author: "",
  image: "",
  description: "",
  noofbooks: "",
  id_value: 6,
  istitle: computed("title", function () {
    if (this.title === "") {
      return true;
    }
    return false;
  }),
  isgenre: computed("genre", function () {
    if (this.genre === "") {
      return true;
    }
    return false;
  }),
  isauthor: computed("author", function () {
    if (this.author === "") {
      return true;
    }
    return false;
  }),
  isimg: computed("image", function () {
    if (this.image === "") {
      return true;
    }
    return false;
  }),
  isdesc: computed("description", function () {
    if (this.description === "") {
      return true;
    }
    return false;
  }),
  isno: computed("noofbooks", function () {
    if (this.noofbooks === "") {
      return true;
    }
    return false;
  }),
  isreq: false,
  reqchange: observer(
    "isdesc",
    "isimg",
    "istitle",
    "isauthor",
    "isgenre",
    function () {
      if (
        !this.isauthor &&
        !this.isdesc &&
        !this.isgenre &&
        !this.isimg &&
        !this.istitle &&
        !this.isno
      ) {
        this.set("isreq", false);
      }
    }
  ),
  actions: {
    tryit() {
      if (
        this.isauthor ||
        this.isdesc ||
        this.isgenre ||
        this.isimg ||
        this.istitle ||
        this.isno
      ) {
        this.set("isreq", true);
        return;
      }
      this.store.createRecord("book", {
        title: this.title,
        genre: this.genre,
        author: this.author,
        image: this.image,
        description: this.description,
        noofbooks: this.noofbooks,
        id: this.id_value,
      });
      this.set("id_value", this.id_value + 1);
      this.transitionToRoute("added");
    },
  },
});
