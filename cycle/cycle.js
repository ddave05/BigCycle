// event date (unchanged so a constant)
const eventDate = new Date("18 April, 2021 9:00:00").getTime();

// update every 1 second
var x = setInterval (
    function() {

      // get today's date and time
  var now = new Date().getTime();
    
  // calculate the time between the event and now
  var distance = eventDate - now;
    
  // calculate the time in each day, hour, minute and second (unchanged - constant)
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // display the result in an empty div in html // 
  document.getElementById("display").innerHTML = days + " days " + hours + " hours "
  + minutes + " minutes " + seconds + " seconds " + "until the event " ;
     
  //stops the execution of the function and displays a message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("display").innerHTML = "Started 9am on 18th April 2021";
  }
}, 1000);