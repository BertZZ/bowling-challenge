function Game (){
  this.frame = undefined
  this.frames = []
  this.frameNumber = 1
  this.gameScore = 0
}

Game.prototype.newFrame = function(){
  this.frame = new Frame()
}

Game.prototype.saveFrame = function(){
  if (this.frameNumber > 10) {
    console.log("The game is over your score is " + this.gameScore)
  } else {
    this.gameScore = this.gameScore + this.frame.totalScore
    this.frames.push(this.frame)
    this.frameNumber++
  }
}

Game.prototype.play = function(){
  for (i = 0; i < 11; i++){
    this.newFrame()
    this.frame.ball1(Math.floor(Math.random() * 11))
    this.frame.ball2(Math.floor(Math.random() * (11 - this.frame.ball1Score)))
    this.frame.score()
    this.frame.update()
    this.saveFrame()
  }
}
