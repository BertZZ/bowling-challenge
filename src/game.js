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
  this.gameScore = this.gameScore + this.frame.totalScore
  this.frames.push(this.frame)
  this.frameNumber++
}
