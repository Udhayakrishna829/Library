import Route from "@ember/routing/route";

export default Route.extend({
  model() {
    let data = this.store.findAll("book");
    data.filter((item) => item.noofbooks !== 0);
    return data;
  },
});
