import Route from "@ember/routing/route";

export default Route.extend({
  model() {
    let data = this.store.findAll("select");
    return data;
  },
});
