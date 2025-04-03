class MyElement extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
	<div class='btnbar'>
		<button>Home</button>
		<button>Games</button>
		<button>Projects</button>
		<button>Chronolog</button>
	</div>
	<div id='mail'>
		<div></div>
		<button></button>
		<a>adviththoutu@cmail.carleton.ca</a>
	</div>
	<div id='linkedin'>
		<div></div>
		<button></button>
		<a>https://www.linkedin.com/in/adviththoutu/</a>
	</div>
	<img id='photo' src='/coffee.png' alt='my photo'></img>
	<div id='timer'>START</div>
	`;
  }
}

// Register the element
customElements.define("custom-layout", MyElement);

var btnbar = document.querySelectorAll('.btnbar button');
var mail = document.querySelector('#mail button');
var mailb = document.querySelector('#mail a');
var mailbb = document.querySelector('#mail div');
var linkedin = document.querySelector('#linkedin button');
var linkedinb = document.querySelector('#linkedin a');
var linkedinbb= document.querySelector('#linkedin div');
var gamescreen = document.querySelector('#game');
var timer = document.querySelector('#timer');
var about = document.querySelector('#aboutBox');

// btn bar
for (var i=0; i<btnbar.length; i++){
	btnbar[i].onmouseover = function btnHover(){
		for (var i=0; i<btnbar.length; i++){
			btnbar[i].style.width= '21%'
		}
		this.style.width='33%'
	}
	btnbar[i].onmouseout = function btnLeave(){
		for (var i=0; i<btnbar.length; i++){
			btnbar[i].style.width= '24%'
		}
	}
	// Page routing
	btnbar[i].onclick = function clicked(){
		if(timer.innerText != 'START'){
			params = "time=";
		}
		
		var url;
		if (this.innerHTML == "Games" && document.title != "Games") {url = "/Games";}		
		else if (this.innerHTML == "Chronolog" && document.title != "Chronolog") {url = "/Chronolog";}
		else if (this.innerHTML == "Home" && document.title != "Home") {url = "/";}
		window.location.href = url;
	}
}

// mail
mail.onclick = function mailClick() {
	window.open("mailto:adviththoutu@cmail.carleton.ca");
}
// linkedin
linkedin.onclick = function mailClick() {
	window.open("https://www.linkedin.com/in/adviththoutu/");
}
//timer
var count = 0
if (sessionStorage.getItem("timer_running") == "true"){
	count = parseInt(sessionStorage.getItem("timer_count"));
	timerStart();
}
timer.onmousedown = timerStart;
function timerStart() {
	if (timer.innerText != 'START') {
		return;
	}
	sessionStorage.setItem("timer_running", "true");
	timer.style.color = "white";
	timer.innerText= timeFormat();
	timer.style.left= '20px';
	var interval = setInterval(function(){
		timer.innerText= timeFormat();
		count++;
		sessionStorage.setItem("timer_count", count);
		if (count > 300){
			count = 0;			
			sessionStorage.setItem("timer_running", "false");
			sessionStorage.setItem("timer_count", count);
			timer.style.color = "black";
			timer.style.right= '25px';
			timer.innerText= 'START';
			clearInterval(interval);
		}
	}, 1000);
}
function timeFormat(){
	let mins= (Math.floor((300-count) /60)).toString();
	let secs= ((300-count) % 60).toString();
	if ( secs.length < 2){
		secs = '0' + secs;
	}
	return mins+':'+secs;	
}