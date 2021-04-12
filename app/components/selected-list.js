import Component from "@ember/component";

export default Component.extend({
  classNames: ["boxed"],
  isWide: false,
  hide: false,
  actions: {
    toggleImageSize() {
      this.toggleProperty("isWide");
    },
  },
});
