// JavaScript File
$( document ).ready(function() {

    $("#coworkers").hide();
    $("#buds").click(function(){
    
    $("#coworkers").show();
    });

$("#submit").click(function(){
if($("input").val()==="Bootstrap"){
    alert("You are very smart")
}else{
    alert("Try again!")
}
});
});