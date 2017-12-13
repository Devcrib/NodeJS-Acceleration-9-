function* multiply(val) {
  for (i=val;i>0;i--){
    yield i*2;
  }
}

function* divide(val) {
  for (i=val;i>0;i--){
    yield i/2;
  }
}

let gen = multiply(10);
let anodaGen = divide(30);

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// console.log(anodaGen.next());
// console.log(anodaGen.next());
// console.log(anodaGen.next());

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());



