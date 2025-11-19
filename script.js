let trycount = 3;
let salary = 1000;
let balance = 2000;
let password = 1234;

let isgetCredit = false;
op1:while (trycount > 0) {
  let Userpassword = +prompt("Passwordunuzu daxil edin");

  if (password == Userpassword) {
    while (true) {
      let isLogout = false;
      console.log(
        "1)Balansa bax \n2)Pul cixart \n3)Hesabat al \n4)Kredit al \n5)Cixis"
      );

      let choose = +prompt("Seçimizini daxil edin: Misal - 1");

      switch (choose) {
        case 1:
          showBalance();
          break;
        case 2:
          getMoney();
          break;
        case 3:
          break;
        case 4:
          getCredit();
          break;
        case 5:
          isLogout = true;
          break;
      }
      if (isLogout) {
        break op1;
      }
    }
  } else {
    console.log("Parolu duzgun daxil edin");
    trycount--;
  }
  if (trycount == 0) {
    console.log("kartiniz bloklandi");
    break;
  }
}

function showBalance() {
  console.log(`Sizin Balansiniz : ${balance}`);
}

function getMoney() {
  if (balance <= 0) {
    console.log("Pulun yoxdur");

    return;
  }
  let money = +prompt("Meblegi daxil edin");
  if (money > balance) {
    console.log("Daxil etdiyiniz məbləğ büdcənizdən çoxdur");
  } else {
    balance = balance - money;
  }
  showBalance();
}

function getCredit() {
  if (isgetCredit) {
    console.log("Istifade edilin");
    return;
  }
  balance = balance + salary * 0.45;
  showBalance();

  isgetCredit = true;
}

function logOut() {
  console.log("çıxış etdiniz");
}
