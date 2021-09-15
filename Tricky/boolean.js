console.log(typeof(true == "true"), true == "true");    // false, data type is being compared

console.log(typeof(true || 0), true || 0);     // true

console.log(typeof(false == 0), false == 0);    // true, boolean false gets converted into 0 (Number data type)

console.log(typeof(true && "true"), true && "true");    // true, for comparison boolean is converted into string
console.log(typeof(true && "true"), true && "true");    // false, same