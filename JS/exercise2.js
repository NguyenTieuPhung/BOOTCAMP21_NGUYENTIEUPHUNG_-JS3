
function handleGetting() {
    var resultBt2 = document.querySelector('.result-bt-2');
    
    var radioBa = document.querySelector('#ba');
    var radioMe = document.querySelector('#me');
    var radioAnh = document.querySelector('#anh');
    var radioEm = document.querySelector('#em');
    
    var valueBt2 = '';
    var getting = 'Chào ';

    if (radioBa.checked) {
        valueBt2 = getting + radioBa.value;
    }
    if (radioMe.checked) {
        valueBt2 = getting + radioMe.value;
    }
    if (radioAnh.checked) {
        valueBt2 = getting + radioAnh.value;
    }
    if (radioEm.checked) {
        valueBt2 = getting + radioEm.value;
    }
    resultBt2.value = valueBt2;
}




