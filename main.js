/*function getPromise(message, delay) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(message);
    }, delay);
  });
}
getPromise("test promise", 2000).then(function(data) {
  console.log(data);
});*/
//2
/*
function calcArrProduct(arr) {
  return new Promise(function(resolve, reject) {
    if (!Array.isArray(arr)) {
      reject("Error! Incorrect array!");
    } else {
      const isAllNumbers = arr.every(function(num) {
        return typeof num === "number";
      });

      if (isAllNumbers) {
        const product = arr.reduce(function(acc, curr) {
          return acc * curr;
        }, 1);
        resolve(product);
      } else {
        reject("Error! Incorrect array!");
      }
    }
  });
}

calcArrProduct([3, 4, 5]).then(function(result) {
  console.log(result);
}).catch(function(error) {
  console.log(error);
});

calcArrProduct([5, "user2", 7, 12]).then(function(result) {
  console.log(result);
}).catch(function(error) {
  console.log(error);
});*/
//3
/*function askNumber() {
  return new Promise(function(resolve, reject) {
    var number = prompt("Введіть число:");

    if (isNaN(number)) {
      reject("Введено неправильне число!");
    } else {
      resolve(Number(number));
    }
  });
}

function askNumberUntilValid() {
  return askNumber().catch(function(error) {
    console.log(error);
    return askNumberUntilValid();
  });
}

askNumberUntilValid().then(function(result) {
  console.log("Введене число:", result);
});*/
//4
const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));

async function showNumbers() {
  for (let i = 0; i < 10; i++) {
    await delay(i, Math.floor(Math.random() * 3000));
    console.log(i);
  }
}

showNumbers();



