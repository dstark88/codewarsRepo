// window.addEventListener("load", function() {
//     var timeStamp = document.querySelector("#timeStamp");
//     this.setInterval(function() {
//         var now = moment();
//         var visibleTime = now.format('LTS');
//         timeStamp.textContent = "As of " + visibleTime;
//     },1000)
// })
$(document).ready(function() {
// won't run because dataList is not defined check on codepen io https://codepen.io/dstark88/pen/bGdBRYa
console.log("window Load");
// $(function() {
    var symbol = "MSFT";
  
    pullStocks();
    colorChange();
    
      $("#button").click(function(){
        symbol = $("#input").val().toUpperCase();
        if (dataList[symbol]) {
          $("#input").val("");
          pullStocks();
          colorChange();
        } 
        else {
          $("#input").val("")
          alert("Please enter a valid stock symbol.");
        }
      });
  
    // Grabs values from the dataList, makes readable, displays on html 
    function pullStocks() {
  
      var volume = beautifyNum(dataList[symbol].Volume);
      var marketCap = beautifyNum(dataList[symbol].MarketCap);
      
      // Logic for the timestamp
      var now = new Date();
      var hours = now.getHours();
      var minutes = now.getMinutes();
      var seconds = now.getSeconds();
  
      if (hours > 12) {
        hours -= 12;
        seconds += "PM";
      }
      else if (hours === 0) {
        hours = 12;
        seconds += "AM";
      }
      else {
        seconds += "AM";
      }
      
      // How all the values are rendered to the html page
      $("#symbol").html(dataList[symbol].Symbol);
      $('h1').html((dataList[symbol].Name).replace(/ /g,"<br>"));
      $('#lastPrice').html(dataList[symbol].LastPrice);
      $('#change').html((dataList[symbol].Change).toFixed(2));
      $('#changePercent').html("(" + (dataList[symbol].ChangePercent).toFixed(2) + "%)");
      $('#low').html((dataList[symbol].Low) + " -");
      $('#high').html(dataList[symbol].High);
      $('#open').html(dataList[symbol].Open);
      $('#volume').html(volume); 
      $('#marketCap').html(marketCap);
      $('#timeStamp').html("As of " + hours + ":" + minutes + ":" + seconds);
    }  
    
    // Changes font color reflecting when #change is positive or negative value
    function colorChange() {
      console.log((dataList[symbol].Change));
      if ((dataList[symbol].Change) < 0) {
        $(".change").css("color", "red"); 
      }
      else {
         $(".change").css("color","green"); 
      }
    }
    
    // Takes the large numbers and makes them easier to read
    function beautifyNum(num) {
      if (num < 1000) {
        return num;
      }
      else if (num < 1000000) {
        return (num/1000) + "K";
      }
      else if (num < 1000000000) {
        return (num/1000000).toFixed(1) + "M";
      }
      else if (num < 1000000000000) {
        return (num/1000000000).toFixed(1) + "B";
      }
      else {
        return (num/1000000000000).toFixed(1) + "T";
      }
    }
//   });
  
});
  
  
  
  