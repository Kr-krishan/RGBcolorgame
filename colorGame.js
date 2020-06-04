var numSquares=6;
var colors=generateRandomColor(numSquares);
/*[
	"rgb(255, 0, 0)",
	"rgb(255, 0, 255)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 0, 255)",
	"rgb(0, 255, 255)"
];*/

var square=document.querySelectorAll('.square');

var colorPicked=pickRandomColor();

var colorDisplay=document.querySelector('#colorDisplay');
colorDisplay.textContent=colorPicked;
var msgDisplay=document.querySelector('#message');
var h1=document.querySelector('h1');
var resetButton=document.querySelector('#reset');
var modeButtons=document.querySelectorAll('.mode');

for(let i=0;i<modeButtons.length;i++){
	modeButtons[i].addEventListener('click',function(){
		modeButtons[0].classList.remove('selected');
		modeButtons[1].classList.remove('selected');
		this.classList.add('selected');
		/*if(this.textContent=="Easy"){
			numSquares=3;
		}else{
			numSquares=6;
		}*/
		this.textContent=="easy" ? numSquares=3 : numSquares=6; 
		reset();
	});
}

function reset(){
	resetButton.textContent="New Colors";
	//generate 6 random colors
	colors=generateRandomColor(numSquares);
	//pick a random color
	colorPicked=pickRandomColor();
	// change picked color in heading
	colorDisplay.textContent=colorPicked;
	//remove correct or msg
	msgDisplay.textContent="";
	//change colors of squares on page
	for(let i=0;i<square.length;i++){
		if(colors[i]){
			square[i].style.display="block";
			square[i].style.backgroundColor=colors[i];
		}else{
			square[i].style.display="none";

		}
	}
	//change background of h1
	h1.style.backgroundColor="steelblue";
}


/*var easyBtn=document.querySelector('#easyBtn');
var hardBtn=document.querySelector('#hardBtn');

easyBtn.addEventListener('click',function(){
	h1.style.backgroundColor="steelblue";	
	hardBtn.classList.remove('selected');
	easyBtn.classList.add('selected');
	numSquares=3;
	colors=generateRandomColor(numSquares);
	colorPicked=pickRandomColor();
	colorDisplay.textContent=colorPicked;
	for(let i=0;i<square.length;i++){
		if(colors[i]){
			square[i].style.backgroundColor=colors[i];
		}else{
			square[i].style.display="none";
		}
	}
});
hardBtn.addEventListener('click',function(){
	h1.style.backgroundColor="steelblue";	
	hardBtn.classList.add('selected');
	easyBtn.classList.remove('selected');
	numSquares=6;
	colors=generateRandomColor(numSquares);
	colorPicked=pickRandomColor();
	colorDisplay.textContent=colorPicked;
	for(let i=0;i<square.length;i++){
		square[i].style.backgroundColor=colors[i];
		if(i>2){
			square[i].style.display="block";
		}
	}
});*/

resetButton.addEventListener('click',function(){
	reset();
});

for(let i=0;i<square.length;i++){
	// add initial color to squares
	square[i].style.backgroundColor=colors[i];

	//add click listeners to the squares
	square[i].addEventListener('click',function(){
		var colorClicked=this.style.backgroundColor;
		if(colorClicked===colorPicked){
			resetButton.textContent="PLAY AGAIN?"
			colorSame(colorClicked);
			msgDisplay.textContent="Correct!!!";
		}else{
			this.style.backgroundColor="#232323";
			msgDisplay.textContent="Try Again";
		}
	});
	//square[i].style.backgroundColor=colors[i];
}

function colorSame(color){
	//loop thro all squares to match given color
	for(let i=0;i<square.length;i++){
		square[i].style.backgroundColor=color;
	}
	//also match background of h1 with matche color
	h1.style.backgroundColor=color;
}

function pickRandomColor(){
	//pick a random color and return it
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColor(num){
	//create an array
	var arr=[];
	//fill it with random colors
	for(let i=0;i<num;i++){
		arr.push(randomColors());
	}
	//return array
	return arr;
}

function randomColors(){
	//pick red from 0-255
	var r=Math.floor(Math.random()*256);
	//pick green from 0-255
	var g=Math.floor(Math.random()*256);
	//pick blue from 0-255
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}