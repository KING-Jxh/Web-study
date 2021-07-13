var num = new Array(7);
var changdu = num.length;
document.write("数组的长度是："+changdu);


// 注意：因为数组的索引总是由0开始，所以一个数组的上下限分别是：0和length-1。如数组的长度是5，数组的上下限分别是0和4。

var num1 = new Array(1,2,3,4,5);
function dianji(){
    document.write("数组的长度是："+num1.length+"<br>");
    document.write("num1[2]对应的数是："+num1[2]);
}
