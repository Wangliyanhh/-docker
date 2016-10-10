$(document).ready(function(){
//		头部导航白色下划线		
	$(".containerBtn").click(function(){
		$(".containerBtn").children("p").css("border-bottom","none")
		$(this).children("p").css("border-bottom","3px solid white")
		}
	);

$(".Btn1").click(function(){
	location='#/index1'
})

$(".Btn2").click(function(){
	location='#/index2'
})

$(".Btn4").click(function(){
	location='#/index4'
})

$(".Btn5").click(function(){
	location='#/index5'
})

$(".Btn6").click(function(){
	location='#/index6'
})

//      表格内全选框
$(".all").click(function(){    
    if(this.checked){    
        $("table .checkbox").attr("checked", true);   
    }else{    
        $("table .checkbox").attr("checked", false); 
    }    
});  
/*
//     点击按钮切换界面
$(".Btn1").click(function(){ 
	$(".main").css("display","none")
	$(".main1").css("display","block")
})
$(".Btn2").click(function(){ 
	$(".main").css("display","none")
	$(".main2").css("display","block")
})

$(".Btn4").click(function(){ 
	$(".main").css("display","none")
	$(".main4").css("display","block")
})
$(".Btn5").click(function(){ 
	$(".main").css("display","none")
	$(".main5").css("display","block")
})
$(".Btn6").click(function(){ 
	$(".main").css("display","none")
	$(".main6").css("display","block")
})*/


});