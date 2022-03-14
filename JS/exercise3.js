function handleCheckNumber() {
    const num1 = document.querySelector(".num-bt3-1");
    const num2 = document.querySelector(".num-bt3-2");
    const num3 = document.querySelector(".num-bt3-3");
    const resultEven = document.querySelector(".result-even");
    const resultOdd = document.querySelector(".result-odd");

    var le = 0;
    var chan = 0;

    var a = num1.value;
    var b = num2.value;
    var c = num3.value;

    if (a % 2 == 0) {
        chan++;
    } else {
        le++;
    }
    if (b % 2 == 0) {
        chan++;
    } else {
        le++;
    }
    if (c % 2 == 0) {
        chan++;
    } else {
        le++;
    }

    resultEven.value = chan;
    resultOdd.value = le;
}