import { observable } from 'mobx';

const store = observable({
  counter: 0,
});
store.increment = function () {
  this.counter++;
};
store.decrement = function () {
  this.counter--;
};
store.incrementAsync = function () {
  setTimeout(() => {
    this.counter++;
  }, 1000);
};

export default store;
