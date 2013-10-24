function startTime()
{
	var today= new Date();
	var h=today.getHours();
	var m=today.getMinutes();
	var s=today.getSeconds();

	// add a zero in front of numbers<10
	m=checkTime(m);
	s=checkTime(s);
	document.getElementById('clock').innerHTML=calcTime("Ottawa", '-4.0');
	t=setTimeout(function(){startTime()},500);
}

function checkTime(i)
{
	if (i<10)
  	{
  		i="0" + i;
  	}
  	
	return i;
}

function calcTime(city, offset) {
    // create Date object for current location
    var d = new Date();

    // convert to msec
    // add local time zone offset
    // get UTC time in msec
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);

    // create new Date object for different city
    // using supplied offset
    var nd = new Date(utc + (3600000*offset));

    // return time as a string
    return "The local time for "+ city +" is "+ nd.toLocaleString();
}