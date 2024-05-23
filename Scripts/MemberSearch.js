var countx=0;
var BulkAction=0;

$(document).ready(function(){
    $("#StatusSearch").hide();
    $("#SearchResults").hide();
    $("#Table1").hide();
    $("#Table2").hide();
    $("#Table3").hide();
    $("#Table4").hide();

});


function ShowNewRow(){
    if(countx==0){
        $("#StatusSearch").show()
    }
    if(countx==1){
        $("#NameSearch").show()
        $("#StatusSearch").show()
    }
    if(countx==2){
        $("#NameSearch").show()
        $("#LastNameSearch").show()
        $("#StatusSearch").show()
    }
    countx=countx+1

}

function RemoveFilter(id){
    if(id==1){
        $("#NameSearch").hide()
    }
    if(id==2){
        $("#LastNameSearch").hide()
    }
    if(id==3){
        $("#StatusSearch").hide()
    }
}


function ClearInput(){
    $(".search").val("")
    $("#SearchResults").hide()


}

function ShowTable(){
    $("#SearchResults").show()
    ChangeTable()

}

function ChangeTable(){
   var columnNamess = $("#DisplayColumns").val();
   if(JSON.stringify(columnNamess) === JSON.stringify(['1', '2', '3'])){
    $("#Table1").show()
    $("#Table2").hide()
    $("#Table3").hide()
    $("#Table4").hide()
   }
  
   if(columnNamess.includes('4') && !columnNamess.includes('5')){
        $("#Table1").hide()
        $("#Table3").hide()
        $("#Table4").hide()
        $("#Table2").show()

   }
   if(columnNamess.includes('5') && !columnNamess.includes('4')){
    $("#Table1").hide()
    $("#Table2").hide()
    $("#Table4").hide()
    $("#Table3").show()

}
if(columnNamess.includes('5') && columnNamess.includes('4')){
    $("#Table1").hide()
    $("#Table2").hide()
    $("#Table3").hide()
    $("#Table4").show()

    }
}

function ToggleClass() {
    $(".OpenBulkActions").slideToggle("fast");
}