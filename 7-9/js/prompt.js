function tiwen(){
    var number=prompt("请输入你的成绩","我是文本框输入的内容，可以修改");
    if(number>=90){
        document.write("优秀");
    }else if(number>=60){
        document.write("及格了");
    }else if(number<60){
        document.write("不及格");
    }else{
        document.write("nice")
    }
}