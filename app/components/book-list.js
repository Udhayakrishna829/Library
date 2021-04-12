import Component from "@ember/component";

export default Component.extend({
  // willDestroyElement() {
  //   this.onIncreament(0);
  // },
  init() {
    this._super(...arguments);
    this.hide = this.onCheck(this.books.title);
  },
  classNames: ["boxed"],
  isWide: false,
  actions: {
    toggleImageSize() {
      this.toggleProperty("isWide");
    },
    do(id, data) {
      let temp = {
        title: data.title,
        genre: data.genre,
        author: data.author,
        image: data.image,
        description: data.description,
        noofbooks: 1,
        bdate: new Date(),
      };
      this.set("hide", true);
      this.onConfirm(id, temp);
      this.onIncreament(1);
    },
    remove(id, data) {
      this.set("hide", false);
      this.onRemove(id, data.title);
      this.onIncreament(-1);
    },
  },
});
