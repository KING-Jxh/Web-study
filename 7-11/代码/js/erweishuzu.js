var myarr = new Array(); //先声明一维
for (var i = 0; i < 2; i++) { //一维长度为2
    myarr[i] = new Array(); //再声明二维
    for (var j = 0; j < 3; j++) { //二维长度为3
        myarr[i][j] = i + j; // 赋值，每个数组元素的值为i+j
    }
}
myarr[0][1]=12;
document.write(myarr[0][1]);

