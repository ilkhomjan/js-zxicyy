let Man = {
  name: "Alex",
  age: 22,
  weight: "59kg",
  abautMan: function() {
    return `My name is ${this.name}.
  Age is ${this.age}.
  Weigth is ${this.weight}`;
  }
};
console.log(Man.abautMan());
