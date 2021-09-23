var num = 1;

// while(num < 100) {
//     if (num%2 == 0) {
//         console.log(num);
//     }
//     num++;
// }

// for (var num=1; num<100; num++) {
//     if (num%2 == 0) {
//         console.log(num);
//     }
// }

var a = 1, b = 1, f=0;
// Print the value in variable f, which contains the 15th number in the fibonacci series, where the first two numbers are 1 and 1
for (var i=3; i<=15; i++) {
    f = a+b;
    b = a;
    a = f;
}
console.log(f);