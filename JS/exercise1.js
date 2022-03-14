function handleSort() {
    const num1 = document.querySelector(".num-1");
    const num2 = document.querySelector(".num-2");
    const num3 = document.querySelector(".num-3");
    const resultBt1 = document.querySelector(".result-bt-1");
    
    var result = '';

    var a = num1.value;
    var b = num2.value;
    var c = num3.value;

    if (a > b && a > c) {
        if (b > c) { 
            result = `${c} ${b} ${a}`;
        } else {
            result = `${b} ${c} ${a}`;
        }
    } else if (b > a && b > c) {
        if (a > c) { 
            result = `${c} ${a} ${b}`;
        } else {
            result = `${a} ${c} ${b}`;
        }
    } else {
        if (a > b) { 
            result = `${b} ${a} ${c}`;
        } else {
            result = `${a} ${b} ${c}`;
        }
    }

    resultBt1.value = result;
    
}