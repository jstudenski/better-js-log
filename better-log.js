<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>JavaScript Object Review</title>
  </head>
  <body>

  <script type="text/javascript">


function log(x){
  console.log(x + ' : ' + typeof x);
  // JSON.parse(this);
}


var getName = function(variable) {
  for (var prop in window) {
    if (variable === window[prop]) {
      return prop;
    }
  }
}
var helloWorld = "Hello World!";
console.log(getName(helloWorld)); // "helloWorld"


// function vars(templateStrings, substitutions) {
//     let result = templateStrings[0];

//     for (let [i, obj] of substitutions.entries()) {
//         let propKeys = Object.keys(obj);
//         for (let [j, propKey] of propKeys.entries()) {
//             if (j > 0) {
//                 result += ', ';
//             }
//             result += propKey+'='+obj[propKey];
//         }
//         result += templateStrings[i+1];
//     }
//     return result;
// }

var test1 = 'hello world';
var test2 = 123;
var test3 = '123';
// let foo = 123;
// let bar = 'abc';
// let baz = true;

log(test1);
log(test2);
log(test3);

// Output:
// Variables: foo=123, bar=abc, baz=true


    </script>

  </body>
</html>




