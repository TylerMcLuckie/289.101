/*

Begin by following the steps in the workshop notes.

Next, add the following features:
- the gap goes red when the puck is over it
- the puck 'teleports' to the opposite boundary when it crosses one (think asteroids/snake)
- create an item that makes the puck bigger
- create an item that makes the puck smaller

*/

//declaring puck location

var puck_x = 210;
var puck_y = 210;
var puck = document.getElementById('puck');

//get ID

puck.style.top = puck_y + 'px';
puck.style.left = puck_x + 'px';


//move left
document.getElementById('left').addEventListener('click',function(){
   puck_x-= 50;
   document.getElementById('puck').style.left= puck_x+ 'px';                                         
});

//move right
document.getElementById('right').addEventListener('click',function(){
   puck_x+= 50;
   document.getElementById('puck').style.left= puck_x+ 'px';                                    
});

