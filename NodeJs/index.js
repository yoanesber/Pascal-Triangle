function factorial(num){
    var f = 1;
    for(var i = 1; i <= num; i++)
        f *= i;
    
    return f;
}

//     *
//    * *
//   * * *
//  * * * *
// * * * * *
function triangle_1(n){
    for(var i = 0; i < n; i++){
        for(var j = 0; j <= (n - i - 2); j++)
            process.stdout.write(" ");

        for(var k = 0; k <= i; k++){
            var digit = factorial(i) / (factorial(k) * factorial(i-k));
            // process.stdout.write(digit.toString());
            process.stdout.write("*");
            process.stdout.write(" ");
        }

        process.stdout.write('\n');
    }
}

// *
// * *
// * * *
// * * * *
// * * * * *
function triangle_2(n){
    for(var i = 0; i < n; i++){
        for(var j = 0; j < n-1; j++)
            process.stdout.write("  ");

        for(var k = 0; k <= i; k++)
            process.stdout.write("* ");

        process.stdout.write('\n');
    }
}

// * * * * *
//   * * * *
//     * * *
//       * *
//         *
function triangle_3(n){
    for(var i = 0; i < n; i++){
        for(var j = 0; j < i; j++)
            process.stdout.write("  ");

        for(var k = 0; k < (n - i); k++)
            process.stdout.write("* ");

        process.stdout.write('\n');
    }
}

var n = 5;
triangle_1(n);
triangle_2(n);
triangle_3(n);