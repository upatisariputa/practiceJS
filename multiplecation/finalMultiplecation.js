//객체 생성
gugudan = {};

//html에서 runMultiplecation 값을 받아오기
gugudan.input = function () {
    var input = document.getElementById("runMultiplecation").value;
    return input;
}

//input 값을 분리 후 숫자 변경