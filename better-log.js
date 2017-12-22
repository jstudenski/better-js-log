function log(x){
  console.log(x);
  console.log(x);
}

function vars(templateStrings, substitutions) {
    let result = templateStrings[0];

    for (let [i, obj] of substitutions.entries()) {
        let propKeys = Object.keys(obj);
        for (let [j, propKey] of propKeys.entries()) {
            if (j > 0) {
                result += ', ';
            }
            result += propKey+'='+obj[propKey];
        }
        result += templateStrings[i+1];
    }
    return result;
}


let foo = 123;
let bar = 'abc';
let baz = true;
console.log(foo);

// Output:
// Variables: foo=123, bar=abc, baz=true
