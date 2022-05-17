//Glass Price Calculator
function stickerPriceCalculator(){

      let height =parseFloat(document.getElementById("h").value)
      let weight=parseFloat(document.getElementById("w").value)
      let formular=height*weight;
      

    var stickerShape = $("#sticker-shape-list").val();
    var stickerSize = $("#size-list").val();
    var stickerMaterial = $("#material-list").val();
    var stickerQuantityVal = $("#quantity-list").val();
    var stickerQuantity = parseInt(stickerQuantityVal);
    var stickerPrice;

    


    function returnStickerDefaults(){
      $("#size-list option:nth-of-type(1)").text('3mm');
      $("#size-list option:nth-of-type(2)").text('4mm');
      
      //Set quantity list values 1-9
      $("#quantity-list option:nth-of-type(1)").text("1").val(1);
      $("#quantity-list option:nth-of-type(2)").text("2").val(2);
      $("#quantity-list option:nth-of-type(3)").text("3").val(3);
      $("#quantity-list option:nth-of-type(4)").text("4").val(4);
      $("#quantity-list option:nth-of-type(5)").text("5").val(5);
      $("#quantity-list option:nth-of-type(6)").text("6").val(6);
      $("#quantity-list option:nth-of-type(7)").text("7").val(7);
      $("#quantity-list option:nth-of-type(8)").text("8").val(8);
      $("#quantity-list option:nth-of-type(9)").text("9").val(9);
      $("#quantity-list option:nth-of-type(10)").text("10").val(10);
      
    }

    // Clear
    if(stickerShape == 1){
      returnStickerDefaults();
      // If 3mm
      if(stickerSize == 1){
        switch(stickerQuantity){
          case 1:
            stickerPrice =formular * 230;
            break;
          case 2:
            stickerPrice = formular * 230*2;
            break;
          case 3:
            stickerPrice = formular * 230*3;
            break;
          case 4:
            stickerPrice = formular * 230*4;
            break;
          case 5:
            stickerPrice = formular * 230*5;
            break;
          case 6:
            stickerPrice = formular * 230*6;
            break;
          case 7:
            stickerPrice = formular * 230*7;
            break;
          case 8:
            stickerPrice = formular * 230*8;
            break;
          case 9:
            stickerPrice = formular * 230*9;
            break;
          case 10:
             stickerPrice = formular*300*10;
             break;
            

        }
      }
      // If 4mm
      else if(stickerSize == 2){
        switch(stickerQuantity){
          case 1:
            stickerPrice = formular*300;
            break;
          case 2:
            stickerPrice = formular*300*2;
            break;
          case 3:
            stickerPrice = formular*300*3;
            break;
          case 4:
            stickerPrice = formular*300*4;
            break;
          case 5:
            stickerPrice = formular*300*5;
            break;
          case 6:
            stickerPrice = formular*300*6;
            break;
          case 7:
            stickerPrice = formular*300*7;
            break;
          case 8:
            stickerPrice = formular*300*8;
            break;
          case 9:
            stickerPrice = formular*300*9;
            break;
          case 10:
            stickerPrice = formular*300*10;
            break;
        }
      }
  }
  // end Die Cut options

  // Arctic, Ocean
  else if(stickerShape == 2){
    returnStickerDefaults();
    // If Thickness 3mm
    if(stickerSize == 1){
      switch(stickerQuantity){
        case 1:
          stickerPrice = formular*560;
          break;
        case 2:
          stickerPrice = formular*560*2;
          break;
        case 3:
          stickerPrice = formular*560*3;
          break;
        case 4:
          stickerPrice = formular*560*4;
          break;
        case 5:
          stickerPrice = formular*560*5;
          break;
        case 6:
          stickerPrice = formular*560*6;
          break;
        case 7:
          stickerPrice = formular*560*7;
          break;
        case 8:
          stickerPrice = formular*560*8;
          break;
        case 9:
          stickerPrice = formular*560*9;
          break;
        case 10:
          stickerPrice = formular*560*10;
          break;
      }
    }
  }
  //end Arctic

  //Mirror
  else if(stickerShape == 3){
    returnStickerDefaults();
    
    //if Thickness 3mm
      if(stickerSize == 1){
        switch(stickerQuantity){
          case 1:
            stickerPrice = formular*560;
            break;
          case 2:
            stickerPrice =  formular*560*2;
            break;
          case 3:
            stickerPrice = formular*560*3;
            break;
          case 4:
            stickerPrice = formular*560*4;
            break;
          case 5:
            stickerPrice = formular*560*5;
            break;
          case 6:
            stickerPrice = formular*560*6;
            break;
          case 7:
            stickerPrice = formular*560*7;
            break;
          case 8:
            stickerPrice = formular*560*8;
            break;
          case 9:
            stickerPrice = formular*560*9;
            break;
          case 10:
            stickerPrice = formular*560*10;
            break;
        }
      }
      //If thickness 4mm
      else if(stickerSize == 2){
        switch(stickerQuantity){
          case 1:
            stickerPrice = formular*700;
            break;
          case 2:
            stickerPrice = formular*700*2;
            break;
          case 3:
            stickerPrice = formular*700*3;
            break;
          case 4:
            stickerPrice = formular*700*4;
            break;
          case 5:
            stickerPrice = formular*700*5;
            break;
          case 6:
            stickerPrice = formular*700*6;
            break;
          case 7:
            stickerPrice = formular*700*7;
            break;
          case 8:
            stickerPrice = formular*700*8;
            break;
          case 9:
            stickerPrice = formular*700*9;
            break;
          case 10:
            stickerPrice = formular*700*10;
            break;
        }
      }
  }
  //end Mirror section

  //begin Decals options
  else if(stickerShape == 4){
    returnStickerDefaults();
    
    // If Thickness 4mm
    if(stickerSize == 1){
      switch(stickerQuantity){
        case 1:
          stickerPrice = formular*790;
          break;
        case 2:
          stickerPrice = formular*790*2;
          break;
        case 3:
          stickerPrice = formular*790*3;
          break;
        case 4:
          stickerPrice = formular*790*4;
          break;
        case 5:
          stickerPrice = formular*790*5;
          break;
        case 6:
          stickerPrice = formular*790*6;
          break;
        case 7:
          stickerPrice = formular*790*7;
          break;
        case 8:
          stickerPrice = formular*790*8;
          break;
        case 9:
          stickerPrice = formular*790*9;
          break;
        case 10:
          stickerPrice = formular*790*10;
          break;
      }
    }
  }
  //end Decals options

  if(height==0)
  {
    $("#sticker-price").text("0");
    $("hError").text("height is required");
  }
  else
  {
    $("#sticker-price").text(stickerPrice); 

  }

  if(width==0)
  {
    $("#sticker-price").text("0");
    $("wError").text("width is required");
  }
  else
  {
    $("#sticker-price").text(stickerPrice); 
  }




};
// end stickerPriceCalculator

$(document).ready(stickerPriceCalculator);

$('.sticker-calculator').change(stickerPriceCalculator);
