import { helper } from "@ember/component/helper";

export default helper(function shifter([id, isWide]) {
  return id % 2 === 1 || isWide;
});
