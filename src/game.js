function Game (){
  this.frame = undefined
  this.frames = []
  this.frameNumber = frames.length + 1
  this.gameScore = 0
}

Game.prototype.newFrame = function(){
  this.frame = new Frame()
}

Game.prototype.saveFrame = function(){
  this.gameScore = this.gameScore + game.frame.totalScore
  this.frames.push(game.frame)
}
