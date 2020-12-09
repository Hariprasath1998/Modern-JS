function fun(test) {
    setTimeout(function() {
        console.log(test);
    }, 10000)
}

function fun1() {
    setTimeout(function() {
        console.log('fun1');
    }, 1000)
}

fun('hello');
fun1();