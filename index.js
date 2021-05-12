const user = {
  firstName: "John",
  lastName: "Smith",
  isMale: true,
  isAgreed: undefined,
  age: 25,
  phones: ["0465489475734", "54639458349583", "435357284325"],
  [Symbol('test')]: 'value',
  funcArr: [() => 5, (a) => a*2],
  get isAdult(){
    return this.age >= 18;
  },
  getFullname(){
    return `${this.firstName} ${this.lastName}`;
  },
  set testAge(v){
    this.age = v;
  }
};

const serializedObj = JSON.stringify(user);
console.log(serializedObj);

const restoredObj = JSON.parse(serializedObj);

/*
Создать объект. У объекта = (строка, число, undefined, null, []) и 2 метода и 2 геттера.
Сериализовать его. JSON.stringify
Десериализовать. JSON.parse
*/

const json = {
  str:"string",
  num: 55,
  isAdult: undefined,
  fullName: null,
  arr:["arr1", "arr2"],
  func1(a) {
    return a;
  },
  func2(a, b){
    return a + b;
  },
  get name(){
    return this.str;
  },
  get age(){
    return this.num;
  }
}

console.log(json);
const serial = JSON.stringify(json);
console.log(serial);
const deSerial = JSON.parse(serial);
console.log(deSerial);