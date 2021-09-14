var s1 = "\"random text\" more random text";
console.log(s1);


var s2 = "C:\\Program Files\\nodejs";
// using \ to escape \
console.log(s2);


var s3 = s2;
s3 += "\nddd";
// \n for newline
console.log(s3);
console.log(s2);