
document.ready(function(){console.log(here)
var sources = ["img/five.jpg", "img/four.jpeg", "img/secound.jpg", "img/seventh.jpg", "img/sixth.jpg"];
var intervals = [];
var money = 0;
var bet = 0;
var reel1= document.getElementById('reel1');
var reel2= document.getElementById('reel2');
var reel3= document.getElementById('reel3');

function rotateReel() {
  //getting the images in the reel to rotate
  // changing the source of the image of every element in reel array
  reel.forEach(function(el) {
    //changing the image at specified intervals
    var interval = setInterval(function() {
      //randomly generate images displyed onto the dom
      reel1.src= sources[Math.floor(Math.random()*5)];
      reel2.src= sources[Math.floor(Math.random()*5)];
      reel3.src= sources[Math.floor(Math.random()*5)];

    }, 200);
    intervals.push(interval);
  })
}

function clear(i){
  clearInterval(intervals[i]);
  intervals[i] = "stopped";
}

//click event for SET AMOUNT
getElementById("setButton").on("click",function(){
  money = parseInt($("#setMoney").val());
  $("#purse").html(money);
});
//click event for BET AMOUNT
$("#betButton").on("click",function(){
 bet = parseInt($("#betMoney").val());
 rotateReel();
});

//click events for each stop BUTTON
$("#slot1, #slot2, #slot3").on("click", function(event) {
    var stopId = event.target.attributes["data-id"].value;

    clear(stopId);

    var areAllIntervalsStopped = intervals.every(function(interval) {
      return interval === 'stopped';
    });

    if (areAllIntervalsStopped) {
    intervals = []
    winnerLogic();
    }
  })

  function winnerLogic() {
    if ($('#reel1').attr('src') == $('#reel2').attr('src') && $('#reel2').attr('src') == $('#reel3').attr('src')){
      var newTotal = money + bet;
      money = newTotal
      alert("You Won bruh!!")
    }else{
      var newTotal = money - bet;
      money = newTotal;
      alert("Loser")
    }
    $('#purse').text(money)
  }


})

//function for spinning w/ timeduration and halt
//button to start
//score/ history of streaks
//display text if won/lost
