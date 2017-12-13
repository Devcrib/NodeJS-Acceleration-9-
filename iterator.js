let mulArrayby2 = {
  [Symbol.iterator]() {
    let arr = [2,3,4,5,6,16], j=0;
    let current = arr[j];
    return {
      next() {
        if (current) {
          let result = { done: false, value: current*2 };
          j++
          current = arr[j];
          return result;
        }

        return { done: true };
      }
    };
  }
}

for (let num of mulArrayby2) {
  console.log(num);
}

[...mulArrayby2]

