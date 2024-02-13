document.getElementById("SideOne").addEventListener("click",function()
{
  var xhr = new XMLHttpRequest();   
  xhr.onload = function() 
  {                       
    if(xhr.status === 200) 
    {      
      responseObject = JSON.parse(xhr.responseText);
      array=responseObject.SideOne;
      processItem(array);
    }
  };
  xhr.open('GET', 'PumpkinsSideOne.json', true);        
  xhr.send(null);                                 
});
    
document.getElementById("SideTwo").addEventListener("click",function()
{
  var xhr = new XMLHttpRequest(); 
  xhr.onload = function() 
  {                       
    if(xhr.status === 200) 
    {      
      responseObject = JSON.parse(xhr.responseText);
      array=responseObject.SideTwo;
      processItem(array);
    }
  };
  xhr.open('GET', 'PumpkinsSideTwo.json', true);    
  xhr.send(null);                                
});

document.getElementById("Bsides").addEventListener("click",function()
{
  var xhr = new XMLHttpRequest(); 
  xhr.onload = function() 
  {                       
    if(xhr.status === 200) 
    {      
      responseObject = JSON.parse(xhr.responseText);
      array=responseObject.Bsides;

      var newContent = '';
      for (var i = 0; i < array.length; i++) 
      { 
        newContent += '<p>Single: ' + array[i].Single + '<br>';
        newContent += 'No.: ' + array[i].No + '<br>';
        newContent += 'Title: ' + array[i].Title + '<br>';
        newContent += 'Length: ' + array[i].Length + '</p>';
        newContent += '<hr>';
      }
		 document.getElementById('content').innerHTML = newContent;
    }
  };
  xhr.open('GET', 'PumpkinsB_Sides.json', true);       
  xhr.send(null);                               
});
    
function processItem(array)
{
  var newContent = '';
  for (var i = 0; i < array.length; i++) 
  { 
    newContent += '<p>No.: ' + array[i].No + '<br>';
    newContent += 'Title: ' + array[i].Title + '<br>';
    newContent += 'Length: ' + array[i].Length + '</p>';
    newContent += '<hr>';
  }
  document.getElementById('content').innerHTML = newContent;
}
