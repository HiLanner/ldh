window.onload=function(){cityHover();returnTop()}
var cityHover=function(){
	var imgAll = document.querySelectorAll(".city>img");
	var cityAll = document.querySelectorAll(".city");
	var imgLength = imgAll.length;
	console.log(imgLength);
	for (var i=0;i<imgLength;i++) {
		imgAll[i].onmouseover=function(){
			var that = this;
			changeName(that,"sm","lg");
		};
		cityAll[i].onmouseleave=function(){
			var that = this;
			var cityHover=chooseCity(that);
		};
	};
};
var chooseCity = function(parentTag){
	var cityNum = parentTag.childNodes;
	for( var i=0;i<cityNum.length;i++){
		(function(arg){
			if (cityNum[i].nodeName == "IMG") {
				changeName(cityNum[arg],"lg","sm");
			};
		})(i);

		}
	}

var changeName = function(imgThis,changeStr,changedStr){
	var lg_name=imgThis.getAttribute("src").replace(changeStr,changedStr);
	imgThis.setAttribute("src",lg_name);
	
};
var returnTop = function(){
    var topButton = document.getElementById("return-top");
    var getScrollValue = function(){
    	return document.documentElement.scrollTop||document.body.scrollTop;
    }
    var setScrollValue = function(value){
    	document.documentElement.scrollTop = value;
    	document.body.scrollTop = value;
    }
    window.onscroll = function(){
    	if (getScrollValue()>0) {
    		topButton.style.display = "block";
    	}else{
    		topButton.style.display = "none";
    	};
    }

topButton.onclick = function(){
    var goTop = setInterval(move,10);
    function move(){
    	setScrollValue(getScrollValue()/1.1);
    	if (getScrollValue()<1) {
    		clearInterval(goTop);
    	};
    }
}
}