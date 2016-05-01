import { observable } from 'mobx';

const counterStore = observable({
  counter: 0,
});
counterStore.increment = () => {
  this.counter++;
};
counterStore.decrement = () => {
  this.counter--;
};
counterStore.incrementAsync = () => {
  setTimeout(() => {
    this.counter++;
  }, 1000);
};

module.exports = counterStore;
