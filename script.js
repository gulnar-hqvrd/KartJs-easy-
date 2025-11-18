let tryCount = 3;
let amount = 2000;
let salary = 1000
let UserPassword = "salam";

let isgetCredit = false;

op1: while (tryCount > 0) {
  let password = prompt("Passwordu daxil edin");

  if (password == UserPassword) {
    while (true) {
      let isLogout = false;
      console.log(
        "1)Balansa bax \n 2)Pul cixart 3)Hesabat al 4)Kredit al 5)Cixis"
      );

      let choose = +prompt("Seçimizini daxil edin");

      switch (choose) {
        case 1:
          showBalance();
          break;
        case 2:
          takeMoney();
          break;
        case 3:
          getTrm();
          break;
        case 4:
          getCredit();
          break;
        case 5:
          isLogout = true;
          break;
        default:
          console.log("Duzgun secim etmediniz");
      }
      if (isLogout) {
        break op1;
      }
    }
  } else {
    console.error("Parol sehvdir");
    tryCount--;
  }
  if (tryCount == 0) {
    console.log("Kartiniz bloklandi");
  }
}

function showBalance() {
  console.log(`Balance : ${amount}`);
}

function takeMoney() {
  if (amount <= 0) {
    console.log("Pulun yoxdur");

    return;
  }
  let money = +prompt("Pul cekmek istediyiniz meblegi qeyd edin");
  if (amount >= money) {
    amount = amount - money;
  } else if (money <= 0) {
    console.log("Daxil etdiyiniz məbləğ 0 və - ola bilməz");
  } else {
    console.log("Balansinda kifayet qeder mebleg yoxdur");
  }
  showBalance();
}

function getTrm() {
    console.log("Gozlenilir");
    
}

function getCredit() {
  if (isgetCredit) {
    console.log("Istifade edilin");
    return;
  }
  amount = amount + salary * 0.45;
  showBalance();

  isgetCredit = true;
}

function logout() {}
