window.onload=function(){cityHover();}
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
			// alert(cityHover);
			// changeName(cityHover,"lg","sm");
		};
	};
};
var chooseCity = function(parentTag){
	var cityNum = parentTag.childNodes;
	for( var i=0;i<cityNum.length;i++){
		(function(arg){
			if (cityNum[i].nodeName == "IMG") {
				changeName(cityNum[arg],"lg","sm");
				// return cityNum[arg];
			};
		})(i);

		}
	}

var changeName = function(imgThis,changeStr,changedStr){
	var lg_name=imgThis.getAttribute("src").replace(changeStr,changedStr);
	imgThis.setAttribute("src",lg_name);
	
};
var topButton = document.getElementById("return-top");
topButton.onclick = function(){
	window.scroll(0,0);
    var scrolldelay = setTimeout('pageScroll()',100);
    topButton.style.display="none";
}