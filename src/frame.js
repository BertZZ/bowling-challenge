function Frame (){
  this.ball1Score = 0
  this.ball2Score = 0
  this.totalScore = 0
  this.frameOutcome = " "
}


Frame.prototype.ball1 = function(score){
  var ball1 = score
  this.ball1Score = ball1
}

Frame.prototype.ball2 = function(score){
  if ((this.ball1Score + score) > 10) {
    console.log("This is an invalid score. Please input a valid result for this ball")
  } else {
    var ball2 = score
    this.ball2Score = ball2
  }
}

Frame.prototype.score = function(){
  this.totalScore = (this.ball1Score) + (this.ball2Score)
}

Frame.prototype.update = function() {
  if (this.ball1Score === 10) {
    this.frameOutcome = "Strike"
  } else if ((this.ball1Score) + (this.ball2Score) === 10) {
    this.frameOutcome = "Spare"
  } else {
    this.frameOutcome = "Score"
  }
}
