let pmam=document.getElementById("pmam");
let hour=document.getElementById("hour");
let min =document.getElementById("min");
let sec = document.getElementById("sec");
let day=document.getElementById("day");

function digitalClock(){
	let dateTime=new Date();
	let hr=dateTime.getHours();
	let min1=dateTime.getMinutes();
	let sec1=dateTime.getSeconds();
	
	let days=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
	let day2=days[dateTime.getDay()];
	
	if(hr>12){
		hr=hr-12;
		pmam.innerHTML="PM";
	}
	if(sec1<10){
		sec.innerText = "0"+ sec1;
	}
	else{
		sec.innerText = sec1;
	}
	
	if(min1<10){
		min.innerText = "0"+ min1;
	}
	else{
		min.innerText = min1;
	}
	if(hr<10){
		hour.innerText = "0"+hr;
	}
	else{
		hour.innerText = hr;
	}
	day.innerText=day2;
	// hour.innerText = hr;
	// min.innerText = min1;
	// sec.innerText = sec1;
}
setInterval(digitalClock,500);