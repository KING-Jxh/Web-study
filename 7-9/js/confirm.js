confirm("请确认你填写的文件内容没有错误");
function queren(){
    var num = confirm("你是男生么？")
    if(num==true){
        document.writer("你是男生");
    }
    else
    {
        document.writer("你是女生");
    }
}