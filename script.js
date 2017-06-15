// JavaScript File
$( document ).ready(function() {

    $("#coworkers").hide();
    $("#buds").click(function(){
    
    $("#coworkers").show();
    });

$("#submit").click(function(){
if($("input").val()==="Oppong"){
    alert("You are very smart")
}else{
    alert("Try again champ")
}
});
});