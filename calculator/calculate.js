//객체 생성
calculator = {};

//배열 생성
calculator.inputNum = [];
calculator.inputText = [];
calculator.inputConvertNum = [];
calculator.inputSave = [];
calculator.result = [];

//input 받기

calculator.textSave = function(){
    var str = document.getElementById('inputNum').value;
    var splitNum = str.split(/[+-/* ]/);
    var splitStr = str.split(/[123456789]/)
    for(var i = 0; i < splitNum.length; i++){
        this.inputNum[i] = splitNum[i];
        this.inputText[i] = splitStr[i];
    }
}

//inputText 변경

calculator.convertInputNum = function(){
    var num = this.inputNum;
    for(var i = 0; i < num.length; i++){
        this.inputConvertNum.push(Number(num[i]));
    }
}

//문자 및 숫자 배열에 저장
calculator.inputArr = function () {
    var n1 = this.inputNum.length;
    var n2 = this.inputText.length;
    var n3 = n1+n2;
    for(var i = 0; i < n3; i++){
        var a = i * 2;
        var b = (2 * i) + 1;
        var c = i + 1;
        this.inputSave[b] = this.inputText[c];
        this.inputSave[a] = this.inputConvertNum[i]; 
    }
}

//계산

calculator.calculate = function(){
    this.result[0] = this.inputSave[0];
    for(var i = 0; i < this.inputText.length; i++){
        var x = i + 1;
        var y = this.inputConvertNum[x]
        switch (this.inputText[x]) {
            case "+":
                this.result[x] = this.result[i] + y;
                break;
            case "-":
                this.result[x] = this.result[i] / y;
                break;
            case "*":
                this.result[x] = this.result[i] * y;
                break;
            case "/":
                this.result[x] = this.result[i] / y;
                break;
            default :
                break;
        }
    }
}

//print
calculator.print = function(){
    var n = this.result.length;
    document.write("값은 " + this.result[n-1]);
}


//메인

function main() {
    calculator.textSave();
    calculator.convertInputNum();
    calculator.inputArr();
    calculator.calculate();
    calculator.print();
}