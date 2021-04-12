import Model from "@ember-data/model";
import DS from "ember-data";
// import { hasMany, belongsTo } from 'ember-data/relationships';

export default Model.extend({
  title: DS.attr("string"),
  author: DS.attr("string"),
  genre: DS.attr("string"),
  image: DS.attr("string"),
  description: DS.attr("string"),
  noofbooks: DS.attr("number"),
  bdate: DS.attr("date"),
});
