"use strict";

// ALL SECTION CHALLENGES:

// CHALLENGE 1: MY SOLUTION:
//const dogsJulia = [3, 5, 2, 12, 7];
//const dogsJulia1 = [4, 1, 15, 8, 3];
//const dogsKate = [9, 16, 6, 8, 3];
//const dogskate1 = [10, 5, 6, 1, 4];

//const dogsJuliaCorrect = dogsJulia.slice(1, -2);
//const dogsJuliaCorrect1 = dogsJulia1.slice(1, -2);
//const dogsJuilaKate = [...dogsJuliaCorrect, ...dogsKate];
//const dogsJuilaKate1 = [...dogsJuliaCorrect1, ...dogskate1];

//console.log(`--- TEST DATA 2---`);
//dogsJuilaKate.forEach(function (age, index) {
//  if (age >= 3) {
//    console.log(`Dog number ${index + 1} is an adult and is ${age} years old`);
//  } else if (age < 3) {
//    console.log(`Dog number ${index + 1} is a puppy 🐶 and is ${age} years old`);
//  }
//});

//console.log(`--- TEST DATA 2---`);
//dogsJuilaKate1.forEach(function (age, index) {
//  if (age >= 3) {
//    console.log(`Dog number ${index + 1} is an adult and is ${age} years old`);
//  } else if (age < 3) {
//    console.log(`Dog number ${index + 1} is a puppy 🐶 and is ${age} years old`);
//  }
//});

// JONAS SOLUTION:
//const checkdogs = function (dogsJulia, dogsKate) {
//  const dogsJuliaCorrected = dogsJulia.slice();
//  dogsJuliaCorrected.splice(0, 1);
//  dogsJuliaCorrected.splice(-2);

//  const dogs = dogsJuliaCorrected.concat(dogsKate);
//  console.log(dogs);

//  dogs.forEach(function (dog, i) {
//    if (dog >= 3) {
//      console.log(`Dog number ${i + 1} is an adult and is ${dog} years old`);
//    } else {
//      console.log(`Dog number ${i + 1} is a puppy 🐶 and is ${dog} years old`);
//    }
//  });
//};

//checkdogs([3, 5, 2, 12, 7], [9, 16, 6, 8, 3]);
//checkdogs([4, 1, 15, 8, 3], [10, 5, 6, 1, 4]);

//const deposits1 = movements.filter(mov => mov > 0);
//console.log(deposits1);

//const checkdogs = function (dogsJulia, dogsKate) {
//  const dogsJuliaCorrected = dogsJulia.slice();
//  dogsJuliaCorrected.splice(0, 1);
//  dogsJuliaCorrected.splice(-2);

//  const dogs = dogsJuliaCorrected.concat(dogsKate);
//  console.log(dogs);

//  dogs.forEach(function (dog, i) {
//    if (dog >= 3) {
//      console.log(`Dog number ${i + 1} is an adult and is ${dog} years old`);
//    } else {
//      console.log(`Dog number ${i + 1} is a puppy 🐶 and is ${dog} years old`);
//    }
//  });
//};

//// CODING CHALLENGE 2:
////const test1 = [5, 2, 4, 1, 15, 8, 3];
////const test2 = [16, 6, 10, 5, 6, 1, 4];

// PIPELINE:
//const euroToUsd = 1.1;
//const totalDepositsUSD = movements
//  .filter(mov => mov > 0)
//  .map((mov, index, arr) => {
//    console.log(arr);
//    return mov * euroToUsd;
//  })
//  .reduce((acc, cur) => acc + cur, 0);
//console.log(totalDepositsUSD);

// CODING CHALLENGE 3:

//const calcAverageHumanAge = function (array) {
//  const humanAge = array.map(function (age) {
//    if (age <= 2) {const calcAverageHumanAge = function (array) {
//  const humanAge = array.map(function (age) {
//    if (age <= 2) {
//      return 2 * age;
//    } else if (age > 2) {
//      return 16 + age * 4;
//    }
//  });
//  const adultDogs = humanAge.filter(age => age >= 18);
//  console.log(humanAge);
//  console.log(adultDogs);

//  const calcAdultAvg = adultDogs.reduce(function (acc, curr, i, arr) {
//    return acc + curr / arr.length;
//  }, 0);
//  return calcAdultAvg;
//};
//      return 2 * age;
//    } else if (age > 2) {
//      return 16 + age * 4;
//    }
//  });
//  const adultDogs = humanAge.filter(age => age >= 18);
//  console.log(humanAge);
//  console.log(adultDogs);

//  const calcAdultAvg = adultDogs.reduce(function (acc, curr, i, arr) {
//    return acc + curr / arr.length;
//  }, 0);
//  return calcAdultAvg;
//};

//const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
//const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
//console.log(avg1, avg2);

//const calcAverageHumanAge = array => {
//  const humanAge = array
//    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//    .filter(age => age >= 18)
//    .reduce((acc, age, ind, arr) => acc + age / arr.length, 0);

//  return humanAge;
//};

//const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
//const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
//console.log(avg1, avg2);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// DATA TRANSFORMATIONS: MAP, FILTER, REDUCE:

// MAP METHOD:
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//const moveUsd = movements.map(function (mov) {
//  //return 23
//  return mov * euroToUsd;
//});
//console.log(movements);
//console.log(moveUsd);

// SIMPLIFIED INTO AN ARROW FUNCTION
//const moveUsd = movements.map(mov => mov * euroToUsd);
//console.log(movements);
//console.log(moveUsd);

const movementDesc = movements.map(function (elem, index, array) {
  if (elem > 0) {
    return `Movement ${index + 1}: You deposited ${elem}`;
  } else {
    return `Movement ${index + 1}: You withdrew ${Math.abs(elem)}`;
  }
});
//console.log(movementDesc);

// SAME LOGIC REWRITTEN WITH TERNARY OPERATOR AND ARROW FUNCTION:
const movementDesc1 = movements.map(
  (elem, index) =>
    `Movement ${index + 1}: You ${elem > 0 ? "Deposit" : "Wthdrew"} ${Math.abs(elem)}`,
);
//console.log(movementDesc1);

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements) {
  containerMovements.innerHTML = "";

  movements.forEach(function (move, index) {
    const type = move > 0 ? "deposit" : "withdrawal";

    const html = ` 
             <div class="movements__row">
                <div class="movements__type movements__type--${type}">${index + 1} ${type}</div>
                <div class="movements__value">${move}€</div>
            </div>`;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, curr) => acc + curr, 0);

  labelBalance.textContent = `${balance} €`;
};

const calcDisplaySummary = function (acc) {
  const income = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, curr) => acc + curr, 0);

  labelSumIn.textContent = `${income}€`;

  const outcome = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, curr) => acc + curr, 0);

  labelSumOut.textContent = `${Math.abs(outcome)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      //console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int);
  
  

  labelSumInterest.textContent = `${Math.abs(interest)}€`;
};

// SAME CODE BUT WITH AN ARROW FUNCTION:
//const username = user
//  .toLowerCase()
//  .split(" ")
//  .map(name => name[0])
//  .join("");

//const user = prompt("What is your name?")
//  .toLowerCase()
//  .split(" ")
//  .map(function (name) {
//    return name[0];
//  })
//    .join("");
//console.log(user);

//const user = "Steven Thomas Williams";
//const username = user
//  .toLowerCase()
//  .split(" ")
//  .map(function (name) {
//    return name[0];
//  })
//  .join("");
//console.log(username);

//const user = "Steven Thomas Williams";

const creatUserName = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map(function (name) {
        return name[0];
      })
      .join("");
  });
};

creatUserName(accounts);

//EVENT HANDLERS:
let currentAccount;

btnLogin.addEventListener("click", function (e) {
  // Prevent form from submitting;
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value,
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log("LOGIN");
  }

  // DISPLAY UI AND MESSAGE:
  labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(" ")[0]}`;
  containerApp.style.opacity = 1;
  // CLEAR INOUT FIELDS:
  inputLoginUsername.value = inputLoginPin.value = "";

  inputLoginPin.blur();

  // DISPLAY MOVEMENTS:
  displayMovements(currentAccount.movements);

  // DISPLAY BALANCE:
  calcDisplayBalance(currentAccount.movements);

  // DISPLAY SUMMARY:
  calcDisplaySummary(currentAccount);
});

//console.log(accounts);

//accounts.forEach(function (value) {
//    value.username  = value.owner
//    .toLowerCase()
//    .split(" ")
//    .map(function (name) {
//      return name[0];
//    })
//    .join("");
//});

//console.log(accounts);
//console.log(containerMovements.innerHTML);

// FILTER METHOD:
//const deposits = movements.filter(function (mov) {
//  return mov > 0;
//});
//console.log(deposits);
//console.log(movements);

//const depositsFor = [];
//for (const mov of movements) {
//  if (mov > 0) {
//    depositsFor.push(mov);
//  }
//}
//console.log(depositsFor);

//const withdrawals = movements.filter(mov => mov < 0);
//console.log(withdrawals);

//console.log(movements);

// REDUCE METHOD:
//const balance = movements.reduce((acc, curr) => acc + curr, 0);
//console.log(balance);

//const balance = movements.reduce(function (accumulator, current, index, array) {
//  console.log(`Iteration ${index}: ${accumulator}`);
//  return accumulator + current;
//}, 0);
//console.log(balance);

// MAXIMUM VALUE OF THE MOVEMENTS ARRAY:

//const maximum = movements.reduce(function (acc, cur) {
//  if (acc > cur) {
//    return acc;
//  } else {
//    return cur;
//  }
//}, movements[0]);
//console.log(maximum);

//let balan = 0;
//for (const mov of movements) {
//  balan += mov;
//}
//console.log(balan);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//let arr = ["a", "b", "c", "d", "e"];
//console.log(arr.slice(2));
//console.log(arr.slice(2, 4));
//console.log(arr.slice(-2));
//console.log(arr.slice(-1));
//console.log(arr.slice(1, -2));
//console.log(arr.slice());
//console.log([...arr]);

//// SPLICE METHOD:
////console.log(arr.splice(2));
////arr.splice(-1);
//arr.splice(1, 2);
//console.log(arr);

//// REVERSED METHOD:
//arr = ["a", "b", "c", "d", "e"];
//const arr2 = ["j", "i", "h", "g", "f"];
//console.log(arr2.reverse());

//// CONCAT METHOD:
//const letters = arr.concat(arr2);
//console.log(letters);
//console.log([...arr, ...arr2]);

//// JOIN METHOD:
//console.log(letters.join(" - "));

// AT METHOD:
//const arr = [23, 11, 64];
//console.log(arr[0]);
//console.log(arr.at(0));

//console.log(arr[arr.length - 1]);
//console.log(arr.slice(-1)[0]);

//console.log(arr.at(-1));

//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

////for (const movement of movements) {
//for (const [i, movement] of movements.entries()) {
//  if (movement > 0) {
//    console.log(`Movement ${i + 1}: You deposited ${movement}`);
//  } else {
//    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//  }
//}

//console.log("--- FOREACH ---");

//movements.forEach(function (movement, index, array) {
//  if (movement > 0) {
//    console.log(`Movement ${index + 1}: You deposited ${movement}`);
//  } else {
//    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
//  }
//});

// MAP (forEach):
//const currencies = new Map([
//  ["USD", "United States dollar"],
//  ["EUR", "Euro"],
//  ["GBP", "Pound sterling"],
//]);

//currencies.forEach(function (value, key, map) {
//  console.log(`${key}: ${value}`);
//});

////SET (forEach):
//const currenciesUnique = new Set([
//  "USD",
//  "GBP",
//  "USD",
//  "EUR",
//  "CAD",
//  "CAD",
//  "GBP",
//]);

//console.log(currenciesUnique);

//currenciesUnique.forEach(function (value, key, set) {
//  console.log(`${key}: ${value}`);
//});

// THE FIND METHOD:
//const firstWith = movements.find(mov => mov < 0);
//console.log(firstWith);

//const account = accounts.find(acc => acc.owner === "Jessica Davis");
//console.log(account);

//for (const [index, account] of accounts.entries()) {
//  console.log(account);
//  if (account.owner === "Jessiac Davis") {
//    console.log(account);
//  }
//}
