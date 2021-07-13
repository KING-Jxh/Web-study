var mychar=document.getElementById("con")           ;
  document.write("原标题:"+mychar.innerHTML+"<br>"); //输出原h2标签内容
  mychar.innerHTML="Hello world";
  document.write("修改后的标题:"+mychar.innerHTML); //输出修改后h2标签内容