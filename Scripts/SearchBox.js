var count=0;

$(document).ready(function(){
    $("#Row3").hide()
    $("#table").hide()

})


function ShowNewRow(){
    if(count==0){
        $("#Row3").show()
    }
    if(count==1){
        $("#Row1").show()
        $("#Row3").show()
    }
    if(count==2){
        $("#Row1").show()
        $("#Row2").show()
        $("#Row3").show()
    }
    count=count+1

}

function RemoveFilter(id){
    if(id==1){
        $("#Row1").hide()
    }
    if(id==2){
        $("#Row2").hide()
    }
    if(id==3){
        $("#Row3").hide()
    }
}


function ClearInput(){
    $(".search").val("")
    $("#table").hide()


}

function ShowTable(){
    $("#table").show()
    ChangeTable()

}

function ChangeTable(){
   var columnNames = $("#ColumnNames").val()
   if(columnNames == ['1','2','3']){
    $("#TableSample1").show()
    $("#TableSample2").hide()
    $("#TableSample4").hide()
    $("#TableSample3").hide()

}
   if(columnNames.includes('4') && !columnNames.includes('5')){
        $("#TableSample1").hide()
        $("#TableSample3").hide()
        $("#TableSample4").hide()
        $("#TableSample2").show()

   }
   if(columnNames.includes('5') && !columnNames.includes('4')){
    $("#TableSample1").hide()
    $("#TableSample2").hide()
    $("#TableSample4").hide()
    $("#TableSample3").show()

}
if(columnNames.includes('5') && columnNames.includes('4')){
    $("#TableSample1").hide()
    $("#TableSample2").hide()
    $("#TableSample3").hide()
    $("#TableSample4").show()

}
}