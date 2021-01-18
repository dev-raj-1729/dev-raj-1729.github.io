var ar ;
var gameover = false;
var winner = 0 ;
var turn = 1;
var dmsg =document.getElementById("gomsg");
function initialize(a=[]){
  a=[
    [0,0,0],
    [0,0,0],
    [0,0,0]
  ];
  return a;
}
function isFull(arr){
 return arr.reduce((accu,ar)=>ar.reduce((ac,a)=>ac&&a,true)&&accu,true);
}
function Checker(arr){
  var i =0;
  var j = 0;
  sum = 0;
  for (i=0;i<3;i++){
    sum=0;
    for(j=0;j<3;j++){
      sum+=arr[i][j];
    }
    if(sum==3)
        return 1;
    else if (sum==-3)
        return -1;
  }
  for (j=0;j<3;j++){
    sum=0;
    for(i=0;i<3;i++){
      sum+=arr[i][j];
    }
    if(sum==3)
        return 1;
    else if (sum==-3)
        return -1;
  }
  sum=0;
  for(i=0;i<3;i++)
      sum+= arr[i][i];
  if(sum==3)
        return 1;
    else if (sum==-3)
        return -1;
  sum=0;
  for(i=0;i<3;i++)
      sum+= arr[i][2-i];
  if(sum==3)
        return 1;
    else if (sum==-3)
        return -1;
  return 0;
}
ar=initialize(ar);
function Clicker(that){
  
    var id = parseInt(that.id);
    var i = Math.floor(id/10)-1;
    var j = id%10 -1;
  if(!gameover&&!ar[i][j]){
    ar[i][j] = turn;
    that.innerHTML = '<p style="font-size:3vmax">'+ (turn>0?'X':'O')+ '</p>';
    turn = -turn;
    winner = Checker(ar);
    if(winner){
      gameover=true;
      dmsg.innerHTML = (winner==1?"Player 1 ":"Player 2 ") + "is the winner";
    }
    else if(isFull(ar)){
      dmsg.innerHTML = "It is a tie!";
      gameover=true;
    }
  }
}
var grid =document.getElementsByClassName("grid-square");
var count=0;
for(var i = 1;i<=3;i++){
  for(var j = 1;j<=3;j++){
    grid[count++].id = i+''+j;
  }
}
function reset(){
  ar = initialize(ar);
  gameover = false;
  var winner = 0;
  turn = 1;
  for(var i = 0;i<9;i++){
  
    grid[i].innerHTML='';
  }
  dmsg.innerHTML ='';
}