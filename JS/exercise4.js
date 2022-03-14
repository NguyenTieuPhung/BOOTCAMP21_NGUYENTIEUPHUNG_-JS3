function handleCheckEdge() {
    const num1 = document.querySelector(".edge-1");
    const num2 = document.querySelector(".edge-2");
    const num3 = document.querySelector(".edge-3");
    const resultBt4 = document.querySelector(".result-bt-4");

    var result = '';

    var a = num1.value;
    var b = num2.value;
    var c = num3.value;

    if (a == b || b == c || c == a) {
        result = 'Tam giác cân';
    } 
    
    if (a == b && b == c) {
        result = 'Tam giác đều';
    } 
    
    if (Math.pow(c, 2) == (Math.pow(a, 2) + Math.pow(b, 2))) { // c^2 = a^2 + b^2
        result = 'Tam giác vuông';
    }

    if (result == '') {
        result = 'Tam giác thường';
    }

    resultBt4.value = result;

}