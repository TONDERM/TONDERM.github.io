var id;
var posX=100;
var posY=0;
var elem = document.getElementById("link"); 

document.getElementById("down").addEventListener("click",function() {
  var id = setInterval(frame, 8);
  posY=elem.y;
  posX=elem.x; 
  function frame() {
    document.getElementById("stop").addEventListener("click",function(){clearInterval(id);});
    if (posY>=425) {
      clearInterval(id);
    } else {
      posY++; 
      elem.style.top = posY + 'px'; 
      document.getElementById("xCoord").value=elem.x;
      document.getElementById("yCoord").value=elem.y;
    }
  }
});

document.getElementById("up").addEventListener("click",function() {
  var id = setInterval(frame, 8);
  posY=elem.y;
  posX=elem.x; 
  function frame() {
    document.getElementById("stop").addEventListener("click",function(){clearInterval(id);});
    if (posY <= 80) {
      clearInterval(id);
    } else {
      posY--; 
      elem.style.top = posY + 'px'; 
      document.getElementById("xCoord").value=elem.x;
      document.getElementById("yCoord").value=elem.y;
    }
  }
});

document.getElementById("right").addEventListener("click",function() {
  posY=elem.y;
  posX=elem.x; 
  var id = setInterval(frame, 8);
  function frame() {
    document.getElementById("stop").addEventListener("click",function(){clearInterval(id);});
    if (posX >= 730) {
      clearInterval(id);
    } else {
      posX++;
      elem.style.left = posX + 'px'; 
      document.getElementById("xCoord").value=elem.x;
      document.getElementById("yCoord").value=elem.y;
    }
  }
});

document.getElementById("left").addEventListener("click",function() {
  posY=elem.y;
  posX=elem.x; 
  var id = setInterval(frame, 8);
  function frame() {
    document.getElementById("stop").addEventListener("click",function(){clearInterval(id);});
    if (posX <= 110) {
      clearInterval(id);
    } else {
      posX--;
      elem.style.left = posX + 'px'; 
      document.getElementById("xCoord").value=elem.x;
      document.getElementById("yCoord").value=elem.y;
    }
  }
});

document.getElementById("rock").addEventListener("click",function() {
  posY=elem.y;
  posX=elem.x; 
  // var dir='r';
  var id = setInterval(frame, 0);
  function frame() {
	document.getElementById("stop").addEventListener("click",function(){clearInterval(id);});
  	if (dir=='p'){
	    posX=posX+0; 
	    posY=posY+0;
        elem.style.left = posX + 'px';
        elem.style.top = posY + 'px';  
        // dir='l';
      }  
     else {
     	posX=posX-0; 
     	posY=posY-0;
        elem.style.left = posX + 'px'; 
        elem.style.top = posY + 'px';  
        // dir='r';
	} 
	
      document.getElementById("xCoord").value=elem.x;
      document.getElementById("yCoord").value=elem.y;
    }
});

var turnLink;
var LlinkImages = new Array(10);
var RlinkImages = new Array(10);
var UlinkImages = new Array(10);
var DlinkImages = new Array(10);
var PlinkImages = new Array(10);
var curLlink = 0;
var curRlink = 0;
var curUlink = 0;
var curDlink = 0;
var curPlink = 0;


for (var a=0; a<10; a++)
	LlinkImages[a] = 'media_MinishCap/linkLeft' + a + '.gif';

for (var b=0; b<10; b++)
	RlinkImages[b] = 'media_MinishCap/linkRight' + b + '.gif';

for (var c=0; c<10; c++)
	UlinkImages[c] = 'media_MinishCap/linkUp' + c + '.gif';

for (var d=0; d<10; d++)
	DlinkImages[d] = 'media_MinishCap/linkDown' + d + '.gif';

for (var e=0; e<27; e++)
	PlinkImages[e] = 'media_MinishCap/linkDance' + e + '.gif';

function moveDance()
{
    if (curPlink == 26)
         curPlink = 0;
    else
         ++curPlink;
    document.images[0].src = PlinkImages[curPlink];
}

function moveLeft()
{
    if (curLlink == 9)
         curLlink = 0;
    else
         ++curLlink;
    document.images[0].src = LlinkImages[curLlink];
}
function moveRight()
{
    if (curRlink == 9)
         curRlink = 0;
    else
         ++curRlink;
    document.images[0].src = RlinkImages[curRlink];
}

function moveUp()
{
    if (curUlink == 9)
         curUlink = 0;
    else
         ++curUlink;
    document.images[0].src = UlinkImages[curUlink];
}

function moveDown()
{
    if (curDlink == 9)
         curDlink = 0;
    else
         ++curDlink;
    document.images[0].src = DlinkImages[curDlink];
}

function turnAround(direction) 
{
    if (turnLink != null)
        clearInterval(turnLink);

    if (direction == 'l')      
	    turnLink= setInterval("moveLeft()", 150);

    if (direction == 'r')      
	    turnLink= setInterval("moveRight()", 150);

    if (direction == 'u')      
	    turnLink= setInterval("moveUp()", 150);

    if (direction == 'd')      
	    turnLink= setInterval("moveDown()", 150);
        
    if (direction == 'p')      
	    turnLink= setInterval("moveDance()", 150);
}
