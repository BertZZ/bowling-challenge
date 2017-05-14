function Frame (){
  this.frameScore = 0
}

Frame.prototype.ball1 = function(){
  var ball1 = Math.floor(Math.random() * 11) + 0
  this.frameScore = ball1
}
