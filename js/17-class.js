/*
CLASS: savybiu ir metodu junginys/grupe.
Savybes - kintamieji (info) 
Metodai - functionalumas
klases - receptura
Objektas - pagal receptura pagamintas konkretus/apciuopamas dalykas;

*/

class Bankomatas {
  constructor(street, color) {
    this.color = color;
    this.street = street;
    this.money = 0;
    this.turnedOn = false;
  }

  switchOn() {
    this.turnedOn = true;
    console.log(`${this.street}: bankomatas veikia`);
  }
  switchOff() {
    this.turnedOn = false;
    console.log(`${this.street}: bankomatas neveikia`);
  }

  cashIn(money) {
    // jei neijungtas - Error
    //jei ne normalus - Error
    //isskaiciuojama pinigus

    if (!this.turnedOn) {
      console.log(this.street, "Panasu kad nera elektros..");
      return;
    }
    if (typeof money !== "number" || !isFinite(money)) {
      console.log(this.street, "fake money");
      return;
    }
    if (money <= 0) {
      console.log(this.street, "minusiniu pinigu neegzistuoja");
      return;
    }

    this.money += money;
    console.log(`${this.street}: inesta ${money} eur`);
  }

  cashOut(money) {
    if (!this.turnedOn) {
      console.log(this.street, "Panasu kad nera elektros..");
      return;
    }
    if (typeof money !== "number" 
    || !isFinite(money)) {
      console.log(this.street, "fake money");
      return;
    }
    if (money <= 0) {
      console.log(this.street, "minusiniu pinigu neegzistuoja");
      return;
    }
    if (this.money < money) {
      console.log(this.street, "no money, sorry");
      return;
    }
    this.money -= money;
    console.log(`${this.street}: isgryninta ${money} eur`);
  }
  status () {
      console.log(`${this.street}: siuo metu pinigu likutis yra ${this.money}`);
  }
}

const bankomatas1 = new Bankomatas("Didzioji g. 2", "red");
const bankomatas2 = new Bankomatas("Mazoji g. 3", "blue");

bankomatas1.switchOn();
bankomatas2.switchOn();

bankomatas1.cashIn(true);
bankomatas1.cashIn(5);
bankomatas2.cashIn(777);
bankomatas1.cashIn(5);
bankomatas1.cashIn(5);
bankomatas2.cashIn(3);

bankomatas1.cashOut(9);
bankomatas2.cashOut(9);
bankomatas1.cashOut(9);
bankomatas2.cashOut(9);

bankomatas1.status();
bankomatas2.status();