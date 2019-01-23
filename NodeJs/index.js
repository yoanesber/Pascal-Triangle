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
            process.stdout.write(digit.toString());
            // process.stdout.write("*");
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
        for(var j = 0; j < (n - 1); j++)
            process.stdout.write("  ");

        for(var k = 0; k <= i; k++)
            process.stdout.write("* ");

        process.stdout.write('\n');
    }
}

//         *
//       * *
//     * * *
//   * * * *
// * * * * *
function triangle_3(n){
    for(var i = 0; i < n; i++){
        for(var j = 0; j < (n - i - 1); j++)
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
function triangle_4(n){
    for(var i = 0; i < n; i++){
        for(var j = 0; j < i; j++)
            process.stdout.write("  ");

        for(var k = 0; k < (n - i); k++)
            process.stdout.write("* ");

        process.stdout.write('\n');
    }
}

// * * * * *
// * * * *
// * * *
// * *
// *
function triangle_5(n){
    for(var i = 0; i < n; i++){

        for(var j = 0; j < (n - i); j++)
            process.stdout.write("* ");

        process.stdout.write('\n');
    }
}

//         *
//       * * *
//     * * * * *
//   * * * * * * *
// * * * * * * * * *
function triangle_6(n){
    var odd = 1;
    for(var i = 0; i < n; i++){
        for(var j = 0; j < (n - i - 1); j++)
            process.stdout.write("  ");
        
        for(var k = 0; k < odd; k++)
            process.stdout.write("* ");

        process.stdout.write('\n');
        odd += 2;
    }
}

// * * * * * * * * *
//   * * * * * * *
//     * * * * *
//       * * *
//         *
function triangle_7(n){
    var odd = (n * 2) - 1;

    for(var i = 0; i < n; i++){
        for(var j = 0; j < i; j++)
            process.stdout.write("  ");
        
        for(var k = 0; k < odd; k++)
            process.stdout.write("* ");

        process.stdout.write('\n');
        odd -= 2;
    }
}

//         *
//       * *
//     * * *
//   * * * *
// * * * * *
//   * * * *
//     * * *
//       * *
//         *
function triangle_8(n){
    var odd = (n * 2) - 1;

    for(var i = 0; i < odd; i++){
        if(i < n){
            for(var j = 0; j < (n - 1 - i); j++)
                process.stdout.write("  ");
            
            for(var k = 0; k <= i; k++)
                process.stdout.write("* ");
        }
        else{
            for(var j = 0; j <= (i - n); j++)
                process.stdout.write("  ");
            
            for(var k = 0; k < (odd - i); k++)
                process.stdout.write("* ");
        }

        process.stdout.write('\n');
    }
}

// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
// *
function triangle_9(n){
    var odd = (n * 2) - 1;

    for(var i = 0; i < odd; i++){
        if(i < n){
            for(var j = 0; j <= i; j++)
                process.stdout.write("* ");

            for(var k = 0; k < (n - 1 - i); k++)
                process.stdout.write("  ");
        }
        else{
            for(var j = 0; j < (odd - i); j++)
                process.stdout.write("* ");

            for(var k = 0; k <= (i - n); k++)
                process.stdout.write("  ");
        }

        process.stdout.write('\n');
    }
}

var n = 5;

console.log();
console.log('Pascal Triangle');
triangle_1(n);
console.log('\n');
console.log('Triangle Model 1');
triangle_2(n);
console.log('\n');
console.log('Triangle Model 2');
triangle_3(n);
console.log('\n');
console.log('Triangle Model 3');
triangle_4(n);
console.log('\n');
console.log('Triangle Model 4');
triangle_5(n);
console.log('\n');
console.log('Triangle Model 5');
triangle_6(n);
console.log('\n');
console.log('Triangle Model 6');
triangle_7(n);
console.log('\n');
console.log('Triangle Model 7');
triangle_8(n);
console.log('\n');
console.log('Triangle Model 8');
triangle_9(n);
console.log('\n');