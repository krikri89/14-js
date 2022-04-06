/*
CLASS: savybiu ir metodu junginys/grupe.
Savybes - kintamieji (info) 
Metodai - functionalumas
klases - receptura
Objektas - pagal receptura pagamintas konkretus/apciuopamas dalykas;

*/

class Bankomatas {
  constructor(a, b) {
    this.spalva = a;
    this.gatve = b;
    this.money = 0;
    this.turnedOn = false;
  }
  switchOn() {
    this.turnedOn = true;
    console.log(`${this.street}, bankomatas veikia`);
}
switchOff() {
    this.turnedOn = false;
    console.log(`${this.street}, bankomatas neveikia`);
  }
  cashIn(money) {
    // jei neijungtas - Error
    //jei ne normalus - Error
    //isskaiciuojama pinigus

    if (!this.turnedOn) {
      console.log("Panasu kad nera elektros..");
      return
    }
    if (typeof money !== "number" || !isFinite(money)) {
      console.log("fake money");
      return
    }
    if (money <= 0) {
      console.log("minusiniu pinigu neegzistuoja");
      return
    }
    this.money += money;
    console.log(`${this.street}: inesta ${money} eur`);
  }
  cashOut(money) {
    if (!this.turnedOn) {
        console.log("Panasu kad nera elektros..");
        return
  }
  if (typeof money !== "number" || !isFinite(money)) {
    console.log("fake money");
    return
  }
  if (money <= 0) {
    console.log("minusiniu pinigu neegzistuoja");
    return
  }
  if (this.money < money) {
      console.log('no money, sorry');
  }
  this.money -= money;
  console.log(`${this.street}: isgryninta ${money} eur`);
}
}
const bankomatas1 = new Bankomatas("Didzioji g. 2", "red");
const bankomatas2 = new Bankomatas("Mazoji g. 3", "blue");

// bankomatas1.switchOn;
// bankomatas2.switchOn;
// bankomatas1.switchOff;
// bankomatas2.switchOff;

// console.log(bankomatas1);
// console.log(bankomatas2);
bankomatas1.switchOn();
bankomatas1.cashIn(5);
bankomatas1.cashOut(9);

console.log(bankomatas1.money);
