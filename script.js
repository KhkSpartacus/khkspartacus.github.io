function updateClock ( )

{
  var currentTime = new Date ( );

  var currentHours = currentTime.getHours ( );
  var currentMinutes = currentTime.getMinutes ( );
  var currentSeconds = currentTime.getSeconds ( );

  // Pad the minutes and seconds with leading zeros, if required
  currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;
  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

  document.getElementById("hour").firstChild.nodeValue = currentHours;
  document.getElementById("minute").firstChild.nodeValue = currentMinutes;
  document.getElementById("second").firstChild.nodeValue = currentSeconds;
  // Compose the string for display
  //var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds;

  // Update the time display
  // document.getElementById("clock").firstChild.nodeValue = currentTimeString;
}
