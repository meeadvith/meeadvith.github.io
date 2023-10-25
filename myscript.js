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
		this.style.color= 'Azure';
		this.style.backgroundImage= 'linear-gradient(to bottom, SlateGray, DarkSlateGray, rgb(20, 20, 33))';
		for (var i=0; i<btnbar.length; i++){
			btnbar[i].style.width= '21%'
		}
		this.style.width='33%'
		this.style.borderRadius = '10px';
	}
	btnbar[i].onmouseout = function btnLeave(){
		this.style.color= 'SlateGray';
		this.style.backgroundImage= 'linear-gradient(to bottom, DarkSlateGray, rgb(20, 20, 33), Black)';
		for (var i=0; i<btnbar.length; i++){
			btnbar[i].style.width= '24%'
		}
		this.style.borderRadius = '5px';
	}
	btnbar[i].onclick = function clicked(){
		if (this.innerHTML == "Games") {
			gamescreen.src = 'https://www.twoplayergames.org/game/two-ball-3d';
			gamescreen.style.display = 'block';
			about.style.display = 'none';

		}
		else {
			gamescreen.style.display = 'none';
			gamescreen.src = '';
			about.style.display = 'block';
			about.style.display = 'flex';
		}
	}
}

// mail
mail.onmouseover= function mailHover() {
	this.style.borderColor = 'lightblue';
	mailb.style.display= 'block';
	mailbb.style.display= 'block';
}
mail.onmouseout= function mailLeave(){
	this.style.borderColor = 'black';
	mailb.style.display= 'none';
	mailbb.style.display= 'none';
}
// linkedin
linkedin.onmouseover= function mailHover() {
	this.style.borderColor = 'lightblue';
	linkedinb.style.display= 'block';
	linkedinbb.style.display= 'block';
}
linkedin.onmouseout= function mailLeave(){
	this.style.borderColor = 'black';
	linkedinb.style.display= 'none';
	linkedinbb.style.display= 'none';	
}
//timer
timer.onmousedown = function timerStart() {
	if (timer.innerText != 'START') {
		return;
	}
	timer.innerText= '5:00';
	timer.style.left= '20px';
	var count = 0;
	var interval = setInterval(function(){
		mins= (Math.floor((300-count) /60)).toString();
		secs= ((300-count) % 60).toString();
		if ( secs.length < 2){
			secs = '0' + secs;
		}
		timer.innerText= mins+':'+secs;
		count++;
		if (count > 300){ 
			timer.style.right= '25px';
			timer.innerText= 'START';
			clearInterval(interval);
		}
	}, 1000);
}