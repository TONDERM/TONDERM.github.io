var CabinetMove;
var CabinetImages = new Array(7);
var curCab = 0;
var gorb = 1;

for (var a = 0; a < 7; a++)
    CabinetImages[a] = 'media_GameCollection/Frame' + a + '.png';
    
function selectLeft()
{
  if (curCab  == 6)
      curCab  = 0;
  else   
    ++curCab;
    document.images[0].src = CabinetImages[curCab];
    
    if(gorb == 1)
      gorb = 3;
    else
      gorb-=1;

  setTimeout(stopCab,330);
}

function stopCab()
{
  clearInterval(CabinetMove);
}

function selectRight()
{
  if (curCab  == 0)
      curCab  = 6;

  else
    --curCab;
    document.images[0].src = CabinetImages[curCab];

    if(gorb == 3)
    gorb = 1;
    else
    gorb+=1;

  setTimeout(stopCab,330);
}

function selectGame(direction) 
{
  var visibleDrag = document.getElementById("dragDrop").style.opacity;
  var visibleCube = document.getElementById("cubeDude").style.opacity;
  var visibleUFO = document.getElementById("UFOcrash").style.opacity;

  if (direction == 'l')
  {  
    if(gorb == 1 && visibleDrag == 1 && visibleCube == 0 && visibleUFO == 0)
    {
        document.getElementById("dragDrop").style.opacity = 0;  
        document.getElementById("cubeDude").style.opacity = 0; 
        document.getElementById("UFOcrash").style.opacity = 1;   
    }
//----------------------------------------------------------------------------
    if(gorb == 2 && visibleDrag == 0 && visibleCube == 1 && visibleUFO == 0)
    {
        document.getElementById("dragDrop").style.opacity = 1;  
        document.getElementById("cubeDude").style.opacity = 0; 
        document.getElementById("UFOcrash").style.opacity = 0;   
    }
//-----------------------------------------------------------------------------------
    if(gorb == 3 && visibleDrag == 0 && visibleCube == 0 && visibleUFO == 1)
    {
        document.getElementById("dragDrop").style.opacity = 0;  
        document.getElementById("cubeDude").style.opacity = 1; 
        document.getElementById("UFOcrash").style.opacity = 0; 
    }  

    CabinetMove= setInterval("selectLeft()", 50);
  }

  if (direction == 'r')
  {  
    if(gorb == 1 && visibleDrag == 1 && visibleCube == 0 && visibleUFO == 0)
    {
        document.getElementById("dragDrop").style.opacity = 0;  
        document.getElementById("cubeDude").style.opacity = 1; 
        document.getElementById("UFOcrash").style.opacity = 0;   
    }
//----------------------------------------------------------------------------
    if(gorb == 2 && visibleDrag == 0 && visibleCube == 1 && visibleUFO == 0)
    {
        document.getElementById("dragDrop").style.opacity = 0;  
        document.getElementById("cubeDude").style.opacity = 0; 
        document.getElementById("UFOcrash").style.opacity = 1;   
    }
//-----------------------------------------------------------------------------------
    if(gorb == 3 && visibleDrag == 0 && visibleCube == 0 && visibleUFO == 1)
    {
        document.getElementById("dragDrop").style.opacity = 1;  
        document.getElementById("cubeDude").style.opacity = 0; 
        document.getElementById("UFOcrash").style.opacity = 0; 
    } 
    CabinetMove= setInterval("selectRight()", 50); 
  }
}

function playGame()
{
  if(gorb == 1)
    window.location.href = 'myDragandDrop.html';

  if(gorb == 2)
    window.location.href = 'startSpeedCube.html';

  if(gorb == 3)
    window.location.href = 'startCrystalCaverns.html';
  
}

function goBack()
{
  window.location.href = 'index.html';  
}

document.getElementById("left").addEventListener("mouseover", mouseOverLeft);
document.getElementById("left").addEventListener("mouseout", mouseOutLeft);
document.getElementById("left").addEventListener("mousedown", mouseDownLeft);
document.getElementById("left").addEventListener("mouseup", mouseUpLeft);

document.getElementById("play").addEventListener("mouseover", mouseOverPlay);
document.getElementById("play").addEventListener("mouseout", mouseOutPlay);
document.getElementById("play").addEventListener("mousedown", mouseDownPlay);
document.getElementById("play").addEventListener("mouseup", mouseUpPlay);

document.getElementById("right").addEventListener("mouseover", mouseOverRight);
document.getElementById("right").addEventListener("mouseout", mouseOutRight);
document.getElementById("right").addEventListener("mousedown", mouseDownRight);
document.getElementById("right").addEventListener("mouseup", mouseUpRight);

document.getElementById("back").addEventListener("mouseover", mouseOverBack);
document.getElementById("back").addEventListener("mouseout", mouseOutBack);
document.getElementById("back").addEventListener("mousedown", mouseDownBack);
document.getElementById("back").addEventListener("mouseup", mouseUpBack);
//-----------------------------------------------------------------------------------------------------------------------

function mouseDownLeft() 
{
  document.getElementById("left").style.fontSize = "28px";
}

function mouseUpLeft() 
{
  document.getElementById("left").style.fontSize = "30px";
}

function mouseOverLeft() 
{
  document.getElementById("left").style.boxShadow = "-1px 1px 5px yellow, -1px 1px 5px yellow, 1px -1px 5px yellow";
}

function mouseOutLeft() 
{
  document.getElementById("left").style.boxShadow = "0px 0px 0px yellow, 0px 0px 0px yellow, 0px 0px 0px yellow";
}

//-----------------------------------------------------------------------------------------------------------------------

function mouseDownPlay() 
{
  document.getElementById("play").style.fontSize = "28px";
}

function mouseUpPlay() 
{
  document.getElementById("play").style.fontSize = "30px";
}

function mouseOverPlay() 
{
  document.getElementById("play").style.boxShadow = "-1px 1px 5px orange, -1px 1px 5px orange, 1px -1px 5px orange";
}

function mouseOutPlay() 
{
  document.getElementById("play").style.boxShadow = "0px 0px 0px orange, 0px 0px 0px orange, 0px 0px 0px orange";
}

//-----------------------------------------------------------------------------------------------------------------------

function mouseDownRight() 
{
  document.getElementById("right").style.fontSize = "28px";
}

function mouseUpRight() 
{
  document.getElementById("right").style.fontSize = "30px";
}

function mouseOverRight() 
{
  document.getElementById("right").style.boxShadow = "-1px 1px 5px red, -1px 1px 5px red, 1px -1px 5px red";
}

function mouseOutRight() 
{
  document.getElementById("right").style.boxShadow = "0px 0px 0px red, 0px 0px 0px red, 0px 0px 0px red";
}

//-----------------------------------------------------------------------------------------------------------------------

function mouseDownBack() 
{
  document.getElementById("back").style.fontSize = "15px";
}

function mouseUpBack() 
{
  document.getElementById("back").style.fontSize = "17px";
}

function mouseOverBack() 
{
  document.getElementById("back").style.boxShadow = "-1px 1px 5px rgb(52, 174, 255), -1px 1px 5px rgb(52, 174, 255), 1px -1px 5px rgb(52, 174, 255)";
}

function mouseOutBack() 
{
  document.getElementById("back").style.boxShadow = "0px 0px 0px rgb(52, 174, 255), 0px 0px 0px rgb(52, 174, 255), 0px 0px 0px rgb(52, 174, 255)";
}