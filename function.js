function right() {
	var player = document.getElementById("player");   
	var pos = 0;
	var id = setInterval(frame,1);
	function frame() {
	if (pos == 350) {
	  clearInterval(id);
	} else {

	  player.style.left = pos + 'px'; 
	  player.style.left = pos + 'px'; 
	pos++; 

	}
  }

}

function left(){
	var player = document.getElementById("player");
	var pos = 0;
	var id = setInterval(frame, 1);
	function frame(){
		if (pos == 350){
			clearInterval(id);		
		} else 
		{

		  player.style.right = pos + 'px'; 
		  player.style.right = pos + 'px'; 
			pos++; 


		}
	  }
}	

function fire() {
	var fire	=	document.getElementById("fire1");
	var enemy=document.getElementById("enemy3");
	var pos = 60;
	var id = setInterval(frame, 1);
	function frame() {
	if (pos == 350) {
		clearInterval(id);
		enemy.style.display = "none";

		fire.style.display = "none";


	} else {
		fire.style.display = "block";
		fire.style.bottom = pos + 'px'; 
		fire.style.bottom = pos + 'px'; 
		pos++; 



	}
  }
}

	
//AUTO REGENERATION
setInterval(regenerate,1000);
function regenerate(){
	document.getElementById("enemy2").style.display="block";
}

//AUTO MOVEMENT DROP 
var enem1	=	document.getElementById("enemy1");
var enem2	=	document.getElementById("enemy2");
var enem3	=	document.getElementById("enemy3");
var enem4	=	document.getElementById("enemy4");
var enem5	=	document.getElementById("enemy5");
var id		=	setInterval(autoMove,10);
var pos = 0;	 
function autoMove(){

		if (pos ==400) {

			}else {
			enem1.style.top = pos + 'px'; 
			enem2.style.top = pos + 'px'; 
			enem3.style.top = pos + 'px';
			enem4.style.top = pos + 'px';
			enem5.style.top = pos + 'px';
			enem3.style.bottom = pos + 'px'; 
			pos++;
				if(pos==350){
						pos=0;
				}
			}
	}
function Enemy(speed,color){
	this.speed=speed;
	this.color=color;
}
