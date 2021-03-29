$(document).ready(function(){
    $("#about").click(function(){
        $("#aboutPage").show();
        $("#banner").css("background-image", "linear-gradient(to right, #00c0ff , #2ad8a6)");
        $("#homepage, #stockAnalysis, #projectbckgrnd, #pdfEx, #pivotTable, #flexDash, #randomForest, #wildfireOne, #wildfireTwo, #youtube").hide();
        $("#banner").css("padding", "2em");
    });
});

// STOCK ANALYSIS
$(document).ready(function(){
    $("#featured, #stockProj").click(function(){
        $("#stockAnalysis, #projectbckgrnd").show();
        $("#banner").css("background-image", "linear-gradient(to right, #fff, #fff)");
        $("#banner").css("padding-right", "0");
        $("#homepage, #aboutPage, #pdfEx, #pivotTable, #flexDash, #randomForest, #wildfireOne, #wildfireTwo, #youtube").hide();
    });
});

// PDF EXPRESSIONS
$(document).ready(function(){
    $("#pdfExProj").click(function(){
        $("#pdfEx, #projectbckgrnd").show();
        $("#banner").css("background-image", "linear-gradient(to right, #fff, #fff)");
        $("#banner").css("padding-right", "0");
        $("#homepage, #aboutPage, #stockAnalysis, #pivotTable, #flexDash, #randomForest, #wildfireOne, #wildfireTwo, #youtube").hide();
    });
});

// PIVOT TABLES
$(document).ready(function(){
    $("#ptProj").click(function(){
        $("#pivotTable, #projectbckgrnd").show();
        $("#banner").css("background-image", "linear-gradient(to right, #fff, #fff)");
        $("#banner").css("padding-right", "0");
        $("#homepage, #aboutPage, #stockAnalysis, #pdfEx, #flexDash, #randomForest,  #wildfireOne, #wildfireTwo, #youtube").hide();
    });
});

// FLEX DASHBOARD
$(document).ready(function(){
    $("#flexDashProj").click(function(){
        $("#flexDash, #projectbckgrnd").show();
        $("#banner").css("background-image", "linear-gradient(to right, #fff, #fff)");
        $("#banner").css("padding-right", "0");
        $("#homepage, #aboutPage, #stockAnalysis, #pdfEx, #pivotTable, #randomForest, #wildfireOne, #wildfireTwo, #youtube").hide();
    });
});

// MACHINE LEARNING RANDOM FOREST
$(document).ready(function(){
    $("#randomForestProj").click(function(){
        $("#randomForest, #projectbckgrnd").show();
        $("#banner").css("background-image", "linear-gradient(to right, #fff, #fff)");
        $("#banner").css("padding-right", "0");
        $("#homepage, #aboutPage, #stockAnalysis, #pdfEx, #pivotTable, #flexDash, #wildfireOne, #wildfireTwo, #youtube").hide();
    });
});

// WILDFIRE TWO
$(document).ready(function(){
    $("#wf2Proj").click(function(){
        $("#wildfireTwo, #projectbckgrnd").show();
        $("#banner").css("background-image", "linear-gradient(to right, #fff, #fff)");
        $("#banner").css("padding-right", "0");
        $("#homepage, #aboutPage, #stockAnalysis, #pdfEx, #pivotTable, #flexDash, #randomForest, #wildfireOne, #youtube").hide();
    });
});

// WILDFIRE ONE
$(document).ready(function(){
    $("#wf1Proj").click(function(){
        $("#wildfireOne, #projectbckgrnd").show();
        $("#banner").css("background-image", "linear-gradient(to right, #fff, #fff)");
        $("#banner").css("padding-right", "0");
        $("#homepage, #aboutPage, #stockAnalysis, #pdfEx, #pivotTable, #flexDash, #randomForest, #wildfireTwo, #youtube").hide();
    });
});

// YOUTUBE
$(document).ready(function(){
    $("#ytProj").click(function(){
        $("#youtube, #projectbckgrnd").show();
        $("#banner").css("background-image", "linear-gradient(to right, #fff, #fff)");
        $("#banner").css("padding-right", "0");
        $("#homepage, #aboutPage, #stockAnalysis, #pdfEx, #pivotTable, #flexDash, #randomForest, #wildfireTwo, #wildfireOne").hide();
    });
});

// CLOSE TO HOMEPAGE
$("button").click(function(){
  $("#aboutPage, #stockAnalysis, #projectbckgrnd, #pdfEx").hide();
  $("#banner").css("background-image", "linear-gradient(to right, #00c0ff , #2ad8a6)");
  $("#banner").css("padding", "2em");
  $("#homepage").show();
});
