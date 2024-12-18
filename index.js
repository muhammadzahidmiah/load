
$(document).ready(function(){
    $('#btn').click(function(){
        $("#getData").load("dat.html",function(responseTxt,statusTxt,xhr){
            alert('Loading Completed');
            alert(responseTxt);
            alert(statusTxt);
            alert(xhr);
        });
    })
});